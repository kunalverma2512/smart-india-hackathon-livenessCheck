## Face Liveness Detector (Active + Passive)

A full‑stack face liveness verification system combining:

- Active liveness: real‑time user actions (blink, rotate left/right) via MediaPipe Face Mesh landmarks.
- Passive liveness: FaceNet face crops analyzed by a CNN (ONNX) to classify real vs. spoof.

The client orchestrates both checks; results are fused to decide authentication. A Node server provides contact email functionality, and a Flask ML service performs inference.

---

### Architecture

- **Client (`client/`, React + Vite + Tailwind)**
  - Captures webcam stream (`react-webcam`).
  - Active liveness using `@mediapipe/face_mesh` landmark tracking to detect blink and head rotations.
  - Sends frames to backend for passive liveness.
  - Routes and UI for landing, info pages, Aadhaar liveness flow.

- **ML Inference Service (`flaskServer/`, Python + Flask)**
  - Endpoint: `POST /predict` accepts an image (`multipart/form-data`, field: `image`).
  - Loads FaceNet for face detection/embedding and a CNN ONNX model (`liveness_model.onnx`) for spoof detection.
  - Uses OpenCV for preprocessing; returns JSON label/prediction.

- **Node API (`server/`, Express)**
  - Email delivery for contact form via `nodemailer`.
  - Route base: `/send-mail` → `POST /send-mail/send-contact`.

---

### Repository Layout

- `client/` – React frontend (Vite, Tailwind, MediaPipe, Router, Toasts)
- `flaskServer/` – Flask app with ONNX runtime, OpenCV, FaceNet/CNN pipeline
- `server/` – Express server for email notifications

---

### Prerequisites

- Node.js 18+ and npm
- Python 3.10+ (recommended) and pip
- Webcam access (for active liveness)

---

### Quick Start (Local, 3 terminals)

1) ML Service (Flask)

```bash
cd flaskServer
python -m venv .venv
# Windows PowerShell
.\.venv\Scripts\Activate.ps1
pip install --upgrade pip
pip install -r requirements.txt
python server.py  # serves on http://localhost:5001
```

2) Node API (Express)

```bash
cd server
npm install
copy NUL .env  # Windows create empty .env, then set vars below
npm run dev  # http://localhost:8080
```

Required `.env` in `server/`:

```
MAIL_USER=your_gmail_address
MAIL_PASS=your_app_password
PORT=8080
```

3) Client (React)

```bash
cd client
npm install
npm run dev  # http://localhost:5173
```

Ensure the client points to the correct Flask URL for `/predict` and Node URL for contact form.

---

### Active Liveness (Client‑side)

- **Signals**: Eye blink detection and head rotation left/right.
- **Technique**: `@mediapipe/face_mesh` provides face landmarks; temporal logic validates requested actions occur within time windows.
- **Flow**: Prompt → capture webcam frames → landmark analysis → pass/fail per action → aggregate active score.

### Passive Liveness (Server‑side)

- **Input**: RGB frame or face crop from the client.
- **Pipeline**: Face detection/FaceNet → preprocessing → ONNX CNN (`liveness_model.onnx`) → real/spoof label.
- **Output**: JSON with label/score; fused with active results on client to decide auth.

---

### APIs

- Flask ML Service (`flaskServer/server.py`)
  - `POST /predict`
    - Content-Type: `multipart/form-data`
    - Field: `image` (binary)
    - Response (example):
      ```json
      { "label": "real", "score": 0.98 }
      ```

- Node Mail Service (`server/server.js`)
  - `POST /send-mail/send-contact`
    - Body (JSON): `{ name, email, phone, message }`
    - Response: `{ success: true, message: "Message sent successfully!" }`

Note: Adjust client base URLs if deploying services on different hosts.

---

### Models and Assets

- `flaskServer/liveness_model.onnx` – Passive liveness CNN model.
- `flaskServer/face_detection/` – SSD face detector (`deploy.prototxt`, `res10_300x300_ssd_iter_140000.caffemodel`).
- MediaPipe Face Mesh (client) for active landmark detection.

---

### Security and Privacy Considerations

- Process video locally in the browser for active checks; only required frames are sent to the ML service for passive checks.
- Use HTTPS in production; enforce CORS allowlists.
- Store no biometric images server‑side by default; if persistence is added, encrypt at rest and restrict retention.
- Use Gmail App Passwords for mail; never commit secrets.

---

### Troubleshooting

- Webcam blocked: allow camera permissions in the browser.
- CORS errors: align client origins with Flask/Node CORS configs.
- ONNX/CPU errors on Windows: verify `onnxruntime` is installed and compatible with your Python version; update `opencv-python` if needed.
- Gmail auth fails: ensure App Password is configured and `MAIL_USER/MAIL_PASS` are set.

---

### Deployment Notes

- Flask: `render.yaml` provided; can deploy to Render/railway. Set `PORT` env if required.
- Client: Vite build (`npm run build`), deploy static to Vercel/Netlify. `client/vercel.json` exists for config.
- Node: Deploy to a Node host; set `.env` secrets and `PORT`.

---


