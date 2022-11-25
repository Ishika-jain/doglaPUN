from flask import Flask, jsonify, request
from sklearn.preprocessing import LabelEncoder
import pandas as pd
import numpy as np
from scipy.stats import mode
import pickle


# creating a Flask app

    # return render_template('after.html')
app = Flask(__name__)
classifier = pickle.load(open('classifier.pkl','rb'))
data = pd.read_csv('Training.csv').dropna(axis = 1)
disease = ['Fungal infection',
 'Allergy',
 'GERD',
 'Chronic cholestasis',
 'Drug Reaction',
 'Peptic ulcer diseae',
 'AIDS',
 'Diabetes',
 'Gastroenteritis',
 'Bronchial Asthma',
 'Hypertension ',
 'Migraine',
 'Cervical spondylosis',
 'Paralysis (brain hemorrhage)',
 'Jaundice',
 'Malaria',
 'Chicken pox',
 'Dengue',
 'Typhoid',
 'hepatitis A',
 'Hepatitis B',
 'Hepatitis C',
 'Hepatitis D',
 'Hepatitis E',
 'Alcoholic hepatitis',
 'Tuberculosis',
 'Common Cold',
 'Pneumonia',
 'Dimorphic hemmorhoids(piles)',
 'Heart attack',
 'Varicose veins',
 'Hypothyroidism',
 'Hyperthyroidism',
 'Hypoglycemia',
 'Osteoarthristis',
 'Arthritis',
 '(vertigo) Paroymsal  Positional Vertigo',
 'Acne',
 'Urinary tract infection',
 'Psoriasis',
 'Impetigo']

@app.route('/', methods = ['GET'])
def ha():
    # return render_template("index.html")
    return "hi"

@app.route('/predict_api',methods=['POST'])

def predict_api():
    data=request.json['data']
    print(data)
    print(np.array(list(data.values())).reshape(1,-1))
    
    encoder = LabelEncoder()
    data["prognosis"] = encoder.fit_transform(data["prognosis"])  

@app.route('/hellopost', methods = ['POST'])
def home():
    X = data.iloc[:,:-1]
    y = data.iloc[:, -1]
    body = request.get_json(force=True)
    symptoms = X.columns.values
    symptom_index = {}
    for index, value in enumerate(symptoms):
      symptom = " ".join([i.capitalize() for i in value.split("_")])
      symptom_index[symptom] = index
    encoder = LabelEncoder()
    data_dict = {
      "symptom_index":symptom_index,
      "predictions_classes": encoder.classes_
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
    model_1 = pickle.load(open("classifier.pkl", 'rb'))
    ans1 = model_1.predictDisease([[range]])
    
    
        

# driver function
if __name__ == '_main_':

	app.run(debug =True)