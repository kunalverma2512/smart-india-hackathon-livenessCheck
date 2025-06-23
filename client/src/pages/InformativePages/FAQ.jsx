import React from "react";

const FAQ = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 pt-[100px]">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-indigo-700 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-10">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-1">
              <svg
                className="h-7 w-7 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-5">
              <h3 className="text-2xl font-semibold text-slate-900">
                What is the purpose of this system?
              </h3>
              <p className="text-lg text-slate-600 mt-3 leading-relaxed">
                This platform provides Aadhaar-based face authentication using
                facial landmarks and liveness detection to verify identity
                securely and quickly.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 pt-1">
              <svg
                className="h-7 w-7 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-5">
              <h3 className="text-2xl font-semibold text-slate-900">
                Do I need to install anything?
              </h3>
              <p className="text-lg text-slate-600 mt-3 leading-relaxed">
                No, the entire process runs in your browser. You just need to
                allow access to your webcam and enter your Aadhaar number for
                verification.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 pt-1">
              <svg
                className="h-7 w-7 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-5">
              <h3 className="text-2xl font-semibold text-slate-900">
                What is liveness detection and why is it important?
              </h3>
              <p className="text-lg text-slate-600 mt-3 leading-relaxed">
                Liveness detection ensures that a real person is in front of the
                camera and not a photo or replayed video, making spoofing
                attempts ineffective.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 pt-1">
              <svg
                className="h-7 w-7 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-5">
              <h3 className="text-2xl font-semibold text-slate-900">
                How does the face detection system work?
              </h3>
              <p className="text-lg text-slate-600 mt-3 leading-relaxed">
                The system uses MediaPipe FaceMesh to detect 468 facial
                landmarks in real-time and analyze movements to detect liveness
                cues like blinking or head turns.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 pt-1">
              <svg
                className="h-7 w-7 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-5">
              <h3 className="text-2xl font-semibold text-slate-900">
                Is this linked to the official UIDAI database?
              </h3>
              <p className="text-lg text-slate-600 mt-3 leading-relaxed">
                Currently, the project is a prototype and does not connect
                directly to the UIDAI server. It demonstrates how such a system
                can be implemented in practice.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 pt-1">
              <svg
                className="h-7 w-7 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-5">
              <h3 className="text-2xl font-semibold text-slate-900">
                What happens to my face data?
              </h3>
              <p className="text-lg text-slate-600 mt-3 leading-relaxed">
                Your face data is processed in real-time within your browser and
                not stored or sent to any server unless explicitly mentioned.
                Privacy is our top priority.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 pt-1">
              <svg
                className="h-7 w-7 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-5">
              <h3 className="text-2xl font-semibold text-slate-900">
                Is it mobile-friendly?
              </h3>
              <p className="text-lg text-slate-600 mt-3 leading-relaxed">
                Yes. The entire web app is fully responsive and works smoothly
                on mobile browsers as well, using the front camera for facial
                input.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 pt-1">
              <svg
                className="h-7 w-7 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-5">
              <h3 className="text-2xl font-semibold text-slate-900">
                Can I test it without an Aadhaar number?
              </h3>
              <p className="text-lg text-slate-600 mt-3 leading-relaxed">
                Yes, the prototype allows testing the facial detection and
                liveness functionality without needing a real Aadhaar number for
                development purposes.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 pt-1">
              <svg
                className="h-7 w-7 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-5">
              <h3 className="text-2xl font-semibold text-slate-900">
                What tech stack is used in this project?
              </h3>
              <p className="text-lg text-slate-600 mt-3 leading-relaxed">
                The frontend is built using React and Tailwind CSS. Camera
                access is handled via <code>react-webcam</code> which internally
                uses browser media APIs. Face detection and liveness checks are
                done with MediaPipe FaceMesh. The system is modular and ready to
                connect with any Aadhaar authentication backend or secure API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
