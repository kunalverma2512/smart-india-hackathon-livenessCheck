import os
from flask import Flask, request, jsonify
import cv2
import numpy as np
import onnxruntime as ort
from flask_cors import CORS  # Import CORS
from mycopy import *

app = Flask(__name__)
CORS(app)  # Initialize CORS with default settings

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files.get('image')  # Read the image data
    if file:
        image = np.frombuffer(file.read(), np.uint8)  # Convert to numpy array
        image = cv2.imdecode(image, cv2.IMREAD_COLOR)  # Decode image

        # Placeholder for the model inference
        label_name = process_frame(image)
        return jsonify(label_name)
    else:
        return jsonify({'error': 'No image uploaded'}), 400

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5001))
    app.run(host="0.0.0.0", port=port)
