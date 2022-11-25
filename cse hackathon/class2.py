# Importing libraries
import numpy as np
import pandas as pd
from scipy.stats import mode
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix

data = pd.read_csv('Training.csv').dropna(axis = 1)


encoder = LabelEncoder()
data["prognosis"] = encoder.fit_transform(data["prognosis"])

X = data.iloc[:,:-1]
y = data.iloc[:, -1]
X_train, X_test, y_train, y_test =train_test_split(
X, y, test_size = 0.2, random_state = 24)

def cv_scoring(estimator, X, y):
    return accuracy_score(y, estimator.predict(X))


models = {
    "SVC":SVC()
}


classifier = RandomForestClassifier(random_state=18)
classifier.fit(X_train, y_train)
preds = classifier.predict(X_test)


classifier = RandomForestClassifier(random_state=18)
classifier.fit(X, y)


test_data = pd.read_csv('Testing.csv').dropna(axis=1)

test_X = test_data.iloc[:, :-1]
test_Y = encoder.transform(test_data.iloc[:, -1])


rf_preds = classifier.predict(test_X)

final_preds = [mode([i])[0][0] for i in zip(rf_preds)]
symptoms = X.columns.values

symptom_index = {}
for index, value in enumerate(symptoms):
    symptom = " ".join([i.capitalize() for i in value.split("_")])
    symptom_index[symptom] = index

data_dict = {
    "symptom_index":symptom_index,
    "predictions_classes":encoder.classes_
}

def predictDisease(symptoms):
    symptoms = symptoms.split(",")

    input_data = [0] * len(data_dict["symptom_index"])
    for symptom in symptoms:
        index = data_dict["symptom_index"][symptom]
        input_data[index] = 1
        
    input_data = np.array(input_data).reshape(1,-1)
    
  
    rf_prediction = data_dict["predictions_classes"][classifier.predict(input_data)[0]]
    
    
    final_prediction = mode([rf_prediction])[0][0]
    predictions = {
        "rf_model_prediction": rf_prediction 
    }
    return predictions



import pickle
pickle_out = open("classifier.pkl", "wb")
pickle.dump(classifier , pickle_out)
pickle_out.close()