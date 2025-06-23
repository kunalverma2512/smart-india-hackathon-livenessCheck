import React from "react";
import { useNavigate } from "react-router-dom";

const LivenessInfoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="py-8 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-slate-900 text-4xl lg:text-5xl font-bold leading-relaxed">
              Verification Process Overview
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed mt-4">
              Before we begin, take a moment to understand the simple and secure
              steps involved in verifying your identity.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-14 h-14 p-3 rounded-md flex items-center justify-center mx-auto bg-blue-50 mb-6">
                <svg
                  className="w-full h-full text-blue-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 3a2 2 0 00-2 2v5.5a2.5 2.5 0 002.5 2.5H7v2H5a1 1 0 100 2h10a1 1 0 100-2h-2v-2h2.5A2.5 2.5 0 0018 10.5V5a2 2 0 00-2-2H4z" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-xl font-semibold mb-2">
                Face Alignment
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Position your face properly so the system can start aligning it
                in the frame.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-14 h-14 p-3 rounded-md flex items-center justify-center mx-auto bg-green-50 mb-6">
                <svg
                  className="w-full h-full text-green-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16v2H4zm0 14h16v2H4zM7 9h10v6H7z" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-xl font-semibold mb-2">
                Background Clarity
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Ensure there's no distraction or multiple faces in the
                background.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-14 h-14 p-3 rounded-md flex items-center justify-center mx-auto bg-purple-50 mb-6">
                <svg
                  className="w-full h-full text-purple-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v7a2 2 0 002 2h4v-2H6v-7h12v7h-4v2h4a2 2 0 002-2v-7a2 2 0 00-2-2h-1V7a5 5 0 00-5-5z" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-xl font-semibold mb-2">
                Environment
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Be in a well-lit, quiet room. Avoid sunglasses or masks during
                verification.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-14 h-14 p-3 rounded-md flex items-center justify-center mx-auto bg-yellow-50 mb-6">
                <svg
                  className="w-full h-full text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 00-3.516 19.396c.556.103.758-.241.758-.537v-1.885c-3.086.672-3.731-1.487-3.731-1.487-.506-1.29-1.236-1.636-1.236-1.636-1.01-.691.077-.677.077-.677 1.118.079 1.707 1.152 1.707 1.152.992 1.7 2.6 1.21 3.237.925.101-.717.39-1.211.71-1.49-2.464-.281-5.057-1.232-5.057-5.486 0-1.212.434-2.204 1.145-2.98-.115-.281-.496-1.415.109-2.95 0 0 .929-.297 3.045 1.135A10.58 10.58 0 0112 6.84c.942.004 1.89.127 2.776.374 2.114-1.432 3.042-1.135 3.042-1.135.607 1.535.226 2.669.111 2.95.713.776 1.144 1.768 1.144 2.98 0 4.265-2.596 5.203-5.067 5.478.401.347.759 1.033.759 2.08v3.08c0 .297.2.645.765.536A10 10 0 0012 2z" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-xl font-semibold mb-2">
                No Distractions
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Keep your attention on the screen. Don't switch tabs or minimize
                during check.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="text-center">
              <div className="w-14 h-14 p-3 rounded-md flex items-center justify-center mx-auto bg-pink-50 mb-6">
                <svg
                  className="w-full h-full text-pink-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 3H7a2 2 0 00-2 2v16l7-3 7 3V5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-xl font-semibold mb-2">
                One-Time Use
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Each verification session is unique and cannot be reused. This
                ensures your data is secure.
              </p>
            </div>

            {/* CTA Feature - Click to Start */}
            <button
              onClick={() => navigate("/liveness/liveliness-check")}
              className="cursor-pointer text-center bg-blue-50 hover:bg-blue-100 rounded-md transition-all duration-300 p-6 flex flex-col items-center justify-center"
            >
              <div className="w-14 h-14 p-3 rounded-full bg-blue-200 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-700 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a1 1 0 011 1v17.586l4.293-4.293a1 1 0 011.414 1.414l-6 6a1.002 1.002 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L11 20.586V3a1 1 0 011-1z" />
                </svg>
              </div>
              <h3 className="text-slate-900 text-xl font-semibold mb-2">
                Start Liveness Check
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                You're all set. Click to begin your secure liveness
                verification.
              </p>
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default LivenessInfoPage;
