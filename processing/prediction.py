import pickle
import os
import time as myTime
import re

import nltk
from nltk.stem.wordnet import WordNetLemmatizer
import numpy as np

from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
import keras
import tensorflow as tf

from sklearn.feature_extraction.text import TfidfVectorizer

import eHostess.PyConTextInterface.PyConText as PyConText
import eHostess.PyConTextInterface.SentenceSplitters.SpacySplitter as SpacySplitter

from BestModel import tokenize
from SVM_TFIDF_Only import tokenizer

def tokenizer(text):
    tokens = [word for sent in nltk.sent_tokenize(text) for word in nltk.word_tokenize(sent)]
    filtered_tokens = [token for token in tokens if re.search('(^[a-zA-Z]+$)', token)]
    a = []
    for i in filtered_tokens:
        a.append(WordNetLemmatizer().lemmatize(i, 'v'))
    return a
    # return filtered_tokens

class Predictor(object):
    def __init__(self):
        self.model_dict = {}
        self.MAX_NUM_WORDS = 2000

        self.SCRIPT_PATH = os.path.dirname(os.path.realpath(__file__))
        self.RELATIVE_PATH = './models/'

        self.MODEL_PATH_DICT = {
            'svm-ds': 'SVMFinal.pkl',
            'svm': 'SVMNotDownsampledFinal.pkl',
            'et': 'ExtraTreesNotDownsampledEnglishStopOnlyFinal.pkl',
            'et-ds': 'ExtraTreesEnglishStopOnlyFinal.pkl',
            'cnn': 'CNNNotDownsampledRedo.h5',
            'cnn-ds': 'CNNFinal.h5'
        }

        etDSVocabPath = os.path.join(self.SCRIPT_PATH, self.RELATIVE_PATH + "ExtraTreesVocabularyEnglishStopOnlyFinal.pkl")
        etVocabPath = os.path.join(self.SCRIPT_PATH, self.RELATIVE_PATH + "ExtraTreesVocabularyNotDownsampledEnglishStopOnlyFinal.pkl")
        self.etDSVocab = pickle.load(open(etDSVocabPath, "rb"))
        self.etVocab = pickle.load(open(etVocabPath, "rb"))

        # de-serialize the pkl models
        print("Deserializing Models...")
        for modelName in self.MODEL_PATH_DICT.keys():
            if modelName in ['cnn', 'cnn-ds']:
                continue
            modelPath = self.getModelPath(modelName)
            model = pickle.load(open(modelPath, 'rb'))
            self.model_dict[modelName] = model

        # de-serialize the neural network
        self.tokenizers = {
            'cnn': 'CNNTokenizerNotDownsampled.pkl',
            'cnn-ds': 'CNNTokenizer.pkl'
        }
        self.graph = tf.get_default_graph()
        for modelName in ['cnn', 'cnn-ds']:
            tokenizerPath = os.path.join(self.SCRIPT_PATH, self.RELATIVE_PATH + self.tokenizers[modelName])
            tokenizer = pickle.load(open(tokenizerPath, 'rb'))
            modelPath = self.getModelPath(modelName)
            model = keras.models.load_model(modelPath)
            #https://github.com/keras-team/keras/issues/2397
            model._make_predict_function()
            self.model_dict[modelName] = {}
            self.model_dict[modelName]['model'] = model
            self.model_dict[modelName]['tokenizer'] = tokenizer


    def getModelPath(self, modelName):
        if modelName not in self.MODEL_PATH_DICT.keys():
            raise RuntimeError("%s not in list of models: %s" % (modelName, self.MODEL_PATH_DICT.keys()))
        filePath = os.path.join(self.SCRIPT_PATH, self.RELATIVE_PATH + self.MODEL_PATH_DICT[modelName])
        if not os.path.isfile(filePath):
            cwd = os.getcwd()
            print("cwd: %s" % cwd)
            raise RuntimeError("%s is not a file." % filePath)

        return filePath


    def formatTimeMethod(self, seconds):
        denoms = [1., 0.001]
        units = ['s', 'ms']
        for index, denom in enumerate(denoms):
            if seconds / denom > 1.:
                alteredTime = seconds / denom
                return "%.3f %s" % (alteredTime, units[index])
        alteredTime = seconds / 0.001
        return "%.3f %s" % (alteredTime, 'ms')


    def getSVMModelPredictionAndTime(self, modelName, text):
        model = self.model_dict[modelName]

        start = myTime.time()
        prediction = model.predict([text])[0]
        end = myTime.time()

        elapsed = end - start
        #time = self.formatTimeMethod(elapsed)

        return prediction, elapsed

    def getETModelPredictionAndTime(self, modelName, text):
        vocab = None
        if modelName == "et":
            vocab = self.etVocab
        else:
            vocab = self.etDSVocab

        model = self.model_dict[modelName]

        start = myTime.time()
        cv = TfidfVectorizer(lowercase=True,
                             ngram_range=(1, 3), preprocessor=None, stop_words="english",
                             strip_accents=None, tokenizer=tokenizer, vocabulary=vocab)
        modelInput = cv.fit_transform([text])
        prediction = model.predict(modelInput)[0]
        end = myTime.time()
        elapsed = end - start

        return prediction, elapsed


    def getNNModelPredictionAndTime(self, modelName, text):
        model = self.model_dict[modelName]['model']
        tokenizer = self.model_dict[modelName]["tokenizer"]

        numLabels = 2

        start = myTime.time()
        sequences = tokenizer.texts_to_sequences([text])
        inputSequences = pad_sequences(sequences, maxlen=self.MAX_NUM_WORDS)
        #https://github.com/keras-team/keras/issues/2397
        with self.graph.as_default():
            rawPredictions = model.predict(inputSequences)
        end = myTime.time()
        elapsed = end - start

        rawPredictions = np.reshape(np.where(rawPredictions > .5, 1, 0), (rawPredictions.shape[0],))
        prediction = rawPredictions[0]

        return prediction, elapsed
            
    def getRBPredictionAndTime(self, text):
        start = myTime.time()
        doc_name = 'doc'
        pyConTextInput = SpacySplitter.splitSentencesRawString(text, doc_name)
        pyConText = PyConText.PyConTextInterface()
        pyConTextDocs = pyConText.PerformAnnotation(pyConTextInput)

        prediction = 0.

        doc = pyConTextDocs
        for annotation in doc.annotations:
            if annotation.annotationClass == "bleeding_present":
                prediction = 1.
                break

        end = myTime.time()
        elapsed = end - start

        # Get tokens
        raw_sentences = list(map(lambda sentence: sentence.text, pyConTextInput[doc_name]))


        return prediction, elapsed, raw_sentences

