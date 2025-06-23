import React from 'react'

const LivenessImportance = () => {
  return (
    <div className="max-w-5xl mx-auto bg-gray-100 p-10 rounded-sm min-h-screen md:min-h-auto flex items-center mt-10">
  <div>
    <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold mb-6">
      Why Liveness Detection Matters in Aadhaar Authentication
    </h2>
    <p className="text-slate-600 leading-relaxed text-lg sm:text-xl">
      In a world where digital impersonation is on the rise, verifying whether a person is physically present during authentication is absolutely critical. Liveness detection ensures that the Aadhaar number being used is not just correct, but is being validated by a real, live individual — not a photo, video, or deepfake attempt.
      <br /><br />
      This system plays a crucial role in preventing fraud, securing eKYC flows, and enabling robust identity verification in sectors like banking, telecom, and government services. Our simulation showcases how AI-based video analysis can act as a strong safeguard against identity spoofing.
    </p>
    <div className="mt-6">
      <a
        href="learn"
        className="text-blue-500 font-semibold hover:underline text-lg"
      >
        Learn how it works...
      </a>
    </div>
  </div>
</div>

  )
}

export default LivenessImportance
