from sklearn.feature_extraction.text import CountVectorizer
from numpy.linalg import norm
import numpy as np

import pickle


class SvmExplanation(object):
    def __init__(self, path_to_full_svm_model="./models/SVMFinalNotDownsampledFinal.pkl",
                 path_to_ds_svm_model="./models/SVMFinal.pkl"):

        print("Initializing the SvmExplanation module.")

        self.svm_full_pipeline = pickle.load(open(path_to_full_svm_model, 'rb'))
        self.svm_ds_pipeline = pickle.load(open(path_to_ds_svm_model, 'rb'))

        self.full_tfidf_vectorizer = self.svm_full_pipeline.named_steps['vectorize']
        self.full_selector = self.svm_full_pipeline.named_steps['feature_selection']
        self.full_estimator = self.svm_full_pipeline.named_steps['estimation']

        self.ds_tfidf_vectorizer = self.svm_ds_pipeline.named_steps['vectorize']
        self.ds_selector = self.svm_ds_pipeline.named_steps['feature_selection']
        self.ds_estimator = self.svm_ds_pipeline.named_steps['estimation']

        self.full_weights = np.squeeze(np.array(self.full_estimator.coef_.todense()))
        self.full_intercept = self.full_estimator.intercept_

        self.ds_weights = np.squeeze(np.array(self.ds_estimator.coef_.todense()))
        self.ds_intercept = self.ds_estimator.intercept_

        self.full_count_vectorizer = CountVectorizer(analyzer=self.full_tfidf_vectorizer.build_analyzer(),
                                                     vocabulary=self.full_tfidf_vectorizer.vocabulary_)
        self.ds_count_vectorizer = CountVectorizer(analyzer=self.ds_tfidf_vectorizer.build_analyzer(),
                                                     vocabulary=self.ds_tfidf_vectorizer.vocabulary_)

        self.full_selection_mask = self.full_selector.get_support()
        self.ds_selection_mask = self.ds_selector.get_support()

        self.full_selected_vocab = np.array(self.full_tfidf_vectorizer.get_feature_names())[self.full_selection_mask]
        self.ds_selected_vocab = np.array(self.ds_tfidf_vectorizer.get_feature_names())[self.ds_selection_mask]

        self.full_selected_idf = self.full_tfidf_vectorizer.idf_[self.full_selection_mask]
        self.ds_selected_idf = self.ds_tfidf_vectorizer.idf_[self.ds_selection_mask]

    def explainFullSVM(self, text):
        return self._explainInternal(text, self.full_tfidf_vectorizer, self.full_count_vectorizer,
                                     self.full_weights, self.full_intercept,
                                     self.full_selection_mask, self.full_selected_vocab, self.full_selected_idf)

    def explainDSSVM(self, text):
        return self._explainInternal(text, self.ds_tfidf_vectorizer, self.ds_count_vectorizer,
                                     self.ds_weights, self.ds_intercept,
                                     self.ds_selection_mask, self.ds_selected_vocab, self.ds_selected_idf)

    def _explainInternal(self, text, tfidf_vectorizer, count_vectorizer, weights, intercept,
                         selection_mask, selected_vocab, selected_idf):
        """
        Output a matrix with each row containing
        :param text:
        :param tfidf_vectorizer:
        :param count_vectorizer:
        :param selector:
        :param weights:
        :param intercept:
        :return:
        """

        count = np.array(count_vectorizer.transform([text]).todense())[0]
        tfidf_representation = np.array(tfidf_vectorizer.transform([text]).todense())[0]

        selected_count = count[selection_mask]
        unnormalized_values = np.multiply(selected_count, selected_idf)

        selected_tfidf_representation = tfidf_representation[selection_mask]
        model_score = np.multiply(selected_tfidf_representation, weights)

        output_dicts = []

        for index in range(len(selected_vocab)):
            row = {
                "term" : selected_vocab[index],
                "weight" : weights[index],
                "idf" : selected_idf[index],
                "count" : selected_count[index],
                "unnormalized": unnormalized_values[index],
                "normalization" : selected_tfidf_representation[index],
                "modelScore" : model_score[index],
                "intercept" : intercept[0]
            }

            output_dicts.append(row)

        return output_dicts
