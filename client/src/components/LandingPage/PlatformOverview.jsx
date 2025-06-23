import React from "react";

const PlatformOverview = () => {
  return (
    <div>
      <div className="px-8 py-16 text-center bg-gray-900  shadow-2xl">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white text-5xl sm:text-6xl font-extrabold mb-10 leading-tight">
            Empowering Digital Identity with Secure Face Verification
          </h2>
          <div className="text-lg sm:text-xl text-slate-300 space-y-6 text-justify leading-relaxed">
            <p>
              In today’s rapidly evolving digital landscape, the security of
              your personal identity is more important than ever. Our platform
              offers an AI-powered facial liveness detection system aligned with
              the vision of UIDAI, designed to accurately and securely verify
              individuals using advanced machine learning and computer vision.
            </p>

            <p>
              Whether you’re applying for digital services, validating identity
              online, or building systems that require user presence assurance —
              our solution brings an extra layer of security and trust. By using
              real-time webcam analysis, we detect spoofing attempts such as
              photo or video-based fraud, ensuring that only live, present
              individuals can proceed.
            </p>

            <p>
              We simulate Aadhaar-based authentication environments to
              demonstrate how real-world integrations could work — making our
              platform a powerful educational and prototyping tool for identity
              systems, e-governance applications, and secure KYC workflows. It’s
              not just a demo; it’s a step toward a smarter, safer, and more
              responsible identity infrastructure.
            </p>

            <p>
              You can start by submitting your Aadhaar number (simulated),
              followed by a quick liveness check using your webcam. Our system
              will determine whether the face is live or fake in real-time, and
              present results with full transparency.
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
