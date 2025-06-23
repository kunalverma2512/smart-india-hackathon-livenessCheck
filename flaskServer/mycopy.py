import cv2
import numpy as np
import onnxruntime as ort

threshold = 0.5

print('[INFO] loading face detector...')
proto_path = "face_detection/deploy.prototxt"
model_path = "face_detection/res10_300x300_ssd_iter_140000.caffemodel"

detector_net = cv2.dnn.readNetFromCaffe(proto_path, model_path)

print('[INFO] loading liveness model...')
session = ort.InferenceSession("liveness_model.onnx")


def process_frame(frm):
    height, width = frm.shape[:2]
    aspect = width / height
    new_width = 800
    new_height = int(new_width / aspect)
    frm = cv2.resize(frm, (new_width, new_height))

    (h, w) = frm.shape[:2]
    blob = cv2.dnn.blobFromImage(
        cv2.resize(frm, (300, 300)),
        1.0,
        (300, 300),
        (104.0, 177.0, 123.0)
    )

    detector_net.setInput(blob)
    detections = detector_net.forward()

    for i in range(0, detections.shape[2]):
        confidence = detections[0, 0, i, 2]

        if confidence > threshold:
            box = detections[0, 0, i, 3:7] * np.array([w, h, w, h])
            (startX, startY, endX, endY) = box.astype('int')

            startX = max(0, startX - 20)
            startY = max(0, startY - 20)
            endX = min(w, endX + 20)
            endY = min(h, endY + 20)

            face = frm[startY:endY, startX:endX]

            try:
                face = cv2.resize(face, (32, 32))
            except:
                break

            face = face.astype('float32') / 255.0
            face = np.array(face)
            face = np.expand_dims(face, axis=0)

            input_name = session.get_inputs()[0].name
            outputs = session.run(None, {input_name: face})

            preds = outputs[0][0]
            j = int(np.argmax(preds))

            label_name = 'real' if j == 1 else 'fake'
            print(f'[INFO] Prediction: {label_name}')
            return label_name

    return "no_face"
