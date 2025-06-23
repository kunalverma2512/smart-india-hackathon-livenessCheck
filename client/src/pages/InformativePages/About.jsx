import React from "react";

const About = () => {
  return (
    <>
      <section className="overflow-hidden pt-28 pb-12 lg:pt-[140px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center text-center px-4">
            <div className="w-full lg:w-10/12 xl:w-8/12">
              <span className="block mb-4 text-lg font-semibold text-primary">
                Why Choose Our Face Verification Prototype
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-bold text-dark dark:text-white leading-tight">
                Face Authentication Reimagined for Seamless Aadhaar Simulation
              </h2>
              <p className="mb-6 text-lg text-gray-700 dark:text-dark-6 leading-relaxed">
                This project is a proof-of-concept face authentication system designed to simulate Aadhaar-based identity verification using just a device camera and browser—no external hardware required. With real-time face mesh tracking and deep liveness detection, it aims to offer highly secure and spoof-resistant verification within seconds.
              </p>
              <p className="mb-6 text-lg text-gray-700 dark:text-dark-6 leading-relaxed">
                Developed as part of a Smart India Hackathon initiative, our system is intended to demonstrate how modern AI-powered solutions can increase accessibility, particularly for underserved or remote areas. It focuses on facial movement, integrity, and responsiveness to ensure secure identity verification.
              </p>
              <p className="text-lg text-gray-700 dark:text-dark-6 leading-relaxed">
                From government service simulations to KYC mockups, our prototype reduces verification steps, improves usability, and presents a scalable model for future digital identity platforms—built around inclusivity and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:divide-x-2 lg:divide-gray-300">
            <div className="px-8">
              <h6 className="text-slate-900 text-2xl sm:text-3xl font-extrabold mb-4">
                Empowering Secure Digital Identity (Prototype)
              </h6>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                This platform simulates a face-based identity verification model to show how secure and inclusive digital identity could work. With real-time liveness checks, we reduce dependency on physical documents or OTPs—making it easier to verify users in a digital-first way.
              </p>
            </div>

            <div className="px-8">
              <h6 className="text-slate-900 text-2xl sm:text-3xl font-extrabold mb-4">
                How the Prototype Works
              </h6>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Using your device camera, we capture a short live feed of your face. MediaPipe FaceMesh and deep learning algorithms evaluate if the user is real (and not a spoof). This mimics what an actual Aadhaar-like system might perform in the future—secure and frictionless identity checks.
              </p>
            </div>

            <div className="px-8">
              <h6 className="text-slate-900 text-2xl sm:text-3xl font-extrabold mb-4">
                Scalable by Design
              </h6>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our system architecture is modular and API-friendly—ready for integration in mobile apps, web portals, or kiosks. While this is a demonstration project, it lays the foundation for how future digital public services can adopt AI-powered authentication in a scalable and privacy-aware manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
