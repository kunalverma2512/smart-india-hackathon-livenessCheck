import React from "react";

const PlatformOverview = () => {
  return (
    <div>
      <div className="px-8 py-16 text-center bg-gray-900 shadow-2xl">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white text-5xl sm:text-6xl font-extrabold mb-10 leading-tight">
            Simulating Secure Digital Identity with Face Verification
          </h2>
          <div className="text-lg sm:text-xl text-slate-300 space-y-6 text-justify leading-relaxed">
            <p>
              In today’s rapidly evolving digital world, verifying personal identity securely is more crucial than ever. This platform demonstrates an AI-powered facial liveness detection system designed to verify individuals using cutting-edge machine learning and computer vision — without the need for hardware tokens or OTPs.
            </p>

            <p>
              Whether you're building digital services, experimenting with KYC models, or researching e-governance frameworks — our system simulates how real-time facial verification can enhance both user experience and fraud prevention. It detects spoofing attempts such as photo and replay attacks by analyzing live webcam footage.
            </p>

            <p>
              This prototype mimics Aadhaar-style authentication scenarios to showcase how facial biometrics and liveness checks can be used together in real-world integrations. The goal is to serve as an educational and experimental tool for developers, researchers, and digital identity system designers.
            </p>

            <p>
              Users simply input a simulated ID (e.g., Aadhaar number), perform a liveness check via their webcam, and receive a result indicating whether the attempt is genuine or fake — all with full transparency and privacy.
            </p>
          </div>

          <button
            type="button"
            className="inline-block mt-14 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black text-lg sm:text-xl font-semibold tracking-wide rounded-full shadow-md transition duration-200"
            onClick={() => (window.location.href = "/liveness")}
          >
            Begin Face Verification
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlatformOverview;
