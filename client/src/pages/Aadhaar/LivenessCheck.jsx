import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { FaceMesh } from "@mediapipe/face_mesh";
import { Camera } from "@mediapipe/camera_utils";
import axios from "axios";

const LivenessCheck = () => {
  const webcamRef = useRef(null);
  const [status, setStatus] = useState("Initializing...");
  const [result, setResult] = useState(null);
  const [capturedCount, setCapturedCount] = useState(0);
  const capturedImages = useRef([]);
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);
  const faceMeshRef = useRef(null);
  const canvasRef = useRef(null);
  const cameraRef = useRef(null);
  // const [faceDetected, setFaceDetected] = useState(true);
  // const [videoSize, setVideoSize] = useState({ width: 640, height: 480 });

  const isBlinking = (landmarks) => {
    const top = landmarks[159].y;
    const bottom = landmarks[145].y;
    return Math.abs(top - bottom) < 0.005;
  };

  const isLookingLeft = (landmarks) => {
    const nose = landmarks[1].x;
    const left = landmarks[234].x;
    return nose - left < 0.01;
  };

  const isLookingRight = (landmarks) => {
    const nose = landmarks[1].x;
    const right = landmarks[454].x;
    return right - nose < 0.01;
  };

  const captureAndSend = async () => {
    setStatus("📤 Sending frames to server...");
    const imagesToSend = capturedImages.current.slice(0, 20);
    let realCount = 0;
    let fakeCount = 0;

    for (const image of imagesToSend) {
      const blob = await fetch(image).then((res) => res.blob());
      const formData = new FormData();
      formData.append("image", blob, "frame.jpg");

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_FLASK_URL}/predict`,
          formData
        );
        if (response.data === "real") realCount++;
        else fakeCount++;
      } catch (error) {
        console.error("API error:", error);
      }
    }

    const verdict =
      realCount > fakeCount ? "✅ User is Real" : "❌ User is Fake";
    setResult({ verdict, realCount, fakeCount });
    setStatus("✅ Process Complete");

    cameraRef.current?.stop(); // stop camera
  };

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        const allDevices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = allDevices.filter((d) => d.kind === "videoinput");
        setDevices(videoDevices);
        setSelectedDeviceId(videoDevices[0]?.deviceId || null);
      } catch (err) {
        console.error("Device error:", err);
      }
    };
    fetchDevices();
  }, []);

  useEffect(() => {
    if (!selectedDeviceId || !webcamRef.current || !webcamRef.current.video)
      return;

    let blinked = false;
    let lookedLeft = false;
    let lookedRight = false;
    let captured = false;

    if (cameraRef.current) cameraRef.current.stop();

    const faceMesh = new FaceMesh({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.6,
    });

    faceMesh.onResults((results) => {
      if (result) return; // stop drawing if result is out

      const canvasCtx = canvasRef.current?.getContext("2d");
      const canvasElement = canvasRef.current;
      const videoElement = webcamRef.current.video;

      canvasElement.width = videoElement.videoWidth;
      canvasElement.height = videoElement.videoHeight;

      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

      if (
        results.multiFaceLandmarks &&
        results.multiFaceLandmarks.length > 0 &&
        webcamRef.current
      ) {
        const landmarks = results.multiFaceLandmarks[0];

        // Draw face mesh
        canvasCtx.lineWidth = 1;
        canvasCtx.strokeStyle = "lime";
        for (let i = 0; i < landmarks.length; i++) {
          const x = landmarks[i].x * canvasElement.width;
          const y = landmarks[i].y * canvasElement.height;

          canvasCtx.beginPath();
          canvasCtx.arc(x, y, 1.5, 0, 2 * Math.PI);
          canvasCtx.stroke();
        }

        if (!blinked && isBlinking(landmarks)) {
          blinked = true;
          setStatus("✅ Blink Detected. Now turn your head to the left...");
        }

        if (blinked && !lookedLeft && isLookingLeft(landmarks)) {
          lookedLeft = true;
          setStatus("✅ Turned Left. Now turn your head to the right...");
        }

        if (
          blinked &&
          lookedLeft &&
          !lookedRight &&
          isLookingRight(landmarks)
        ) {
          lookedRight = true;
          setStatus("✅ Turned Right. Starting image capture...");
        }

        if (blinked && lookedLeft && lookedRight && !captured) {
          captured = true;
          setStatus("🎯 Capturing frames...");
          capturedImages.current = [];
          setCapturedCount(0);

          const interval = setInterval(() => {
            const img = webcamRef.current.getScreenshot();
            if (img) {
              capturedImages.current.push(img);
              setCapturedCount((prev) => prev + 1);
            }
            if (capturedImages.current.length >= 10) {
              clearInterval(interval);
              captureAndSend();
            }
          }, 100);
        }
      }
    });

    faceMeshRef.current = faceMesh;

    const camera = new Camera(webcamRef.current.video, {
      onFrame: async () => {
        await faceMesh.send({ image: webcamRef.current.video });
      },
      width: 640,
      height: 480,
    });

    cameraRef.current = camera;
    camera.start();

    return () => {
      camera.stop();
    };
  }, [selectedDeviceId, result]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Liveness Check</h1>
      {result?.verdict ? (
        ""
      ) : (
        <p className="text-sm text-gray-600 mb-2">
          🧍 Sit still · 💡 Ensure good lighting · 🎯 Keep face centered · 👁️
          Blink · 👈 Turn Left · 👉 Turn Right
        </p>
      )}

      {/* Camera and Canvas only when no result yet */}
      {selectedDeviceId && !result && (
        <div className="relative w-full max-w-md aspect-video">
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{ deviceId: { exact: selectedDeviceId } }}
            className="rounded-lg shadow-md w-full h-full object-cover"
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 z-10 w-full h-full"
          />
        </div>
      )}

      <p className="mt-4 text-lg font-medium text-blue-700">{status}</p>

      {/* {capturedCount > 0 && capturedCount < 20 && (
        <p className="text-sm mt-1 text-gray-700">
          Captured: {capturedCount} / 20
        </p>
      )} */}

      {result?.verdict === "✅ User is Real" && (
        <div className="mt-8 bg-green-100 border border-green-400 text-green-800 px-6 py-4 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2">🎉 Liveness Verified!</h2>
          <p className="text-md">
            You're good to go. Proceed to the next step.
          </p>
        </div>
      )}

      {result?.verdict === "❌ User is Fake" && (
        <div className="mt-8 bg-red-100 border border-red-400 text-red-800 px-6 py-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">❌ Verification Failed</h2>
          <p className="text-md mb-4">Face liveness could not be confirmed.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            🔄 Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default LivenessCheck;
