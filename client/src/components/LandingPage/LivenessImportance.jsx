import React from 'react';

const LivenessImportance = () => {
  return (
    <div className="max-w-5xl mx-auto bg-gray-100 p-10 rounded-sm min-h-screen md:min-h-auto flex items-center mt-10">
      <div>
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold mb-6">
          Why Liveness Detection Matters in Face Verification
        </h2>
        <p className="text-slate-600 leading-relaxed text-lg sm:text-xl">
          In today’s digital age, identity fraud through spoofing techniques like photos, videos, and deepfakes is a growing concern. Liveness detection ensures that the face being verified belongs to a real, live person — not a static image or recording.
          <br /><br />
          This technology plays a vital role in enhancing the integrity of face-based verification systems. By analyzing facial movement, responsiveness, and depth cues in real-time, it adds an extra layer of trust and protection to digital onboarding, eKYC, and secure access workflows.
          <br /><br />
          Our simulation demonstrates how AI-driven video analysis can be used to prevent impersonation and support more secure, inclusive, and user-friendly identity verification experiences.
        </p>
        <div className="mt-6">
          <a
            href="/learn"
            className="text-blue-500 font-semibold hover:underline text-lg"
          >
            Learn how it works...
          </a>
        </div>
      </div>
    </div>
  );
};

export default LivenessImportance;
