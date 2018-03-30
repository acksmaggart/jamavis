import re
from nltk.stem.wordnet import WordNetLemmatizer
import nltk


def tokenize(text):
        tokens = [word for sent in nltk.sent_tokenize(text) for word in nltk.word_tokenize(sent)]
        filtered_tokens = [token for token in tokens if re.search('(^[a-zA-Z]+$)', token)]
        a = []
        for i in filtered_tokens:
           a.append(WordNetLemmatizer().lemmatize(i, 'v'))
        return a
        #return filtered_tokens
