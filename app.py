import os
import pickle
import re

import nltk
from nltk.stem.wordnet import WordNetLemmatizer

from flask import Flask, send_from_directory, request, jsonify
from rq import Queue
from rq.job import Job
from worker import conn

from flask_cors import CORS

# This is necessary for the SVM model vectorizer to be unpickled correctly.
import Tokenizer


# def tokenizer(text):
#     tokens = [word for sent in nltk.sent_tokenize(text) for word in nltk.word_tokenize(sent)]
#     filtered_tokens = [token for token in tokens if re.search('(^[a-zA-Z]+$)', token)]
#     a = []
#     for i in filtered_tokens:
#         a.append(WordNetLemmatizer().lemmatize(i, 'v'))
#     return a

from processing.prediction import Predictor

app = Flask(__name__)
CORS(app)
app.debug = True
app.config.from_object(os.environ['APP_SETTINGS'])

q = Queue(connection=conn)

svmModels = ['svm', 'svm-ds']
etModels = ['et', 'et-ds']
nnModels = ['cnn', 'cnn-ds']

predictor = Predictor()

@app.route('/')
def serveIndex():
    return send_from_directory("public", "index.html") 

@app.route('/public/css/<path>')
def serveCSS(path):
    return send_from_directory("public/css/", path)

@app.route('/public/js/<path>')
def serveJS(path):
    return send_from_directory("public/js/", path)

@app.route('/public/bower_components/d3/<path>')
def serveBowerD3(path):
    return send_from_directory("public/bower_components/d3/", path)

@app.route('/public/bower_components/d3-tip/<path>')
def serveBowerD3Tip(path):
    return send_from_directory("public/bower_components/d3-tip/", path)

@app.route('/public/data/<path>')
def serveData(path):
    return send_from_directory("public/data/", path)

@app.route('/public/<path>')
def servePublicBase(path):
    return send_from_directory('public/', path)

@app.route('/predict', methods=['POST']) 
def predict():
    
    print("Predict Request:")
    print(request.headers)
    print("")
    print(request.data)

    body = request.get_json()
    print(body)
    modelName = body['model']
    text = body['text']
    dynamic = None
    if modelName in svmModels:
        prediction, time, explanation = predictor.getSVMModelPredictionAndTime(modelName, text)
        dynamic = explanation
    elif modelName in etModels:
        prediction, time = predictor.getETModelPredictionAndTime(modelName, text)
    elif modelName in nnModels:
        prediction, time = predictor.getNNModelPredictionAndTime(modelName, text)
    elif modelName == 'rb':
        prediction, time, tokens = predictor.getRBPredictionAndTime(text)
        dynamic = tokens
    else:
        return "Error: %s is not a valid model name" % modelName
    print("prediction")
    print(prediction)
    responseObj = {"prediction" : prediction, "time" : time, "model" : modelName, 'dynamic' : dynamic}
    return jsonify(responseObj)
 
@app.route('/test', methods=['GET'])
def test():
    return jsonify({"text" : "yep"})

if __name__ == "__main__":
    app.run()
