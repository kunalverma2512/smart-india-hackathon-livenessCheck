import React from "react";

const FAQ = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 pt-[100px]">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-indigo-700 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-10">
          <FAQItem
            question="What is the purpose of this system?"
            answer="This platform simulates Aadhaar-like face authentication using facial landmark detection and liveness checks to demonstrate secure, AI-based identity verification."
          />
          <FAQItem
            question="Do I need to install anything?"
            answer="No installation is required. The entire process runs in your browser — simply allow access to your camera to begin the face verification simulation."
          />
          <FAQItem
            question="What is liveness detection and why is it important?"
            answer="Liveness detection ensures that a real human is interacting with the system by analyzing facial movements, preventing spoofing attempts like using photos or videos."
          />
          <FAQItem
            question="How does the face detection system work?"
            answer="The system uses MediaPipe FaceMesh to identify 468 facial landmarks in real-time, analyzing subtle movements like blinking or turning to assess liveliness."
          />
          <FAQItem
            question="Is this linked to the official UIDAI database?"
            answer="No. This is an independent prototype created for demonstration purposes. It is not connected to UIDAI or any government servers."
          />
          <FAQItem
            question="What happens to my face data?"
            answer="Your face data is processed entirely in real-time within your browser. It is not stored or transmitted unless explicitly stated. Privacy is a key focus of this simulation."
          />
          <FAQItem
            question="Is it mobile-friendly?"
            answer="Yes. The web app is fully responsive and works seamlessly on mobile devices using the front camera."
          />
          <FAQItem
            question="Can I test it without entering an Aadhaar number?"
            answer="Yes. The system is designed to allow full testing of face detection and liveness features without entering any personal Aadhaar details. It is a standalone simulation."
          />
          <FAQItem
            question="What tech stack is used in this project?"
            answer="This prototype uses React and Tailwind CSS for the frontend. Webcam access is provided via react-webcam, and facial analysis is handled by MediaPipe FaceMesh. It's structured to support integration with real authentication APIs if needed in future deployments."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;

const FAQItem = ({ question, answer }) => (
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
      <h3 className="text-2xl font-semibold text-slate-900">{question}</h3>
      <p className="text-lg text-slate-600 mt-3 leading-relaxed">{answer}</p>
    </div>
  </div>
);
