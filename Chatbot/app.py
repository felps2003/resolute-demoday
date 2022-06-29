from flask import Flask, render_template, request, jsonify
from chat import get_response
import regex as re
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    text = text.lower()
    print(text)
    response = get_response(text)
    response = re.sub("Ã¡","á", response)
    response = re.sub("Ã³","ó", response)
    response = re.sub("Ã§","ç", response)
    response = re.sub("Ã£","ã", response)
    response = re.sub("Ãª","ê", response)
    response = re.sub("Ã‰","É", response)
    response = re.sub("Ã©","é", response)
    response = re.sub("Ãº","ú", response)
    response = re.sub("Ã­","í", response)
    response = re.sub("Â°","°", response)
    message = {"answer": response}
    return jsonify(message)

if __name__ == "__main__":
    app.run(debug=True)