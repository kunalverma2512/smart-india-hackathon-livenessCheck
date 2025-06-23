import React from "react";

const About = () => {
  return (
    <>
      <section className="overflow-hidden pt-28 pb-12 lg:pt-[140px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center text-center px-4">
            <div className="w-full lg:w-10/12 xl:w-8/12">
              <span className="block mb-4 text-lg font-semibold text-primary">
                Why Choose Our UIDAI Solution
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-bold text-dark dark:text-white leading-tight">
                Face Authentication Reimagined for Seamless Aadhaar Verification
              </h2>
              <p className="mb-6 text-lg text-gray-700 dark:text-dark-6 leading-relaxed">
                Our project is a cutting-edge face authentication system built
                to streamline Aadhaar-based verification using only a camera and
                browser—no external hardware needed. With real-time face mesh
                tracking and deep liveness detection, we ensure highly secure
                and spoof-proof authentication in seconds.
              </p>
              <p className="mb-6 text-lg text-gray-700 dark:text-dark-6 leading-relaxed">
                Built under the UIDAI Face Authentication challenge, our system
                eliminates friction for users across all demographics,
                especially in rural and digitally underserved regions. It
                bridges the gap between accessibility and security using
                AI-powered analysis for facial integrity, movement, and
                responsiveness.
              </p>
              <p className="text-lg text-gray-700 dark:text-dark-6 leading-relaxed">
                Whether it's for government welfare schemes, mobile KYC, or
                public service access, our face authentication solution
                drastically reduces verification time, improves accuracy, and
                provides an inclusive, scalable approach to digital identity
                verification.
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
                Empowering Secure Digital Identity
              </h6>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our platform is developed under the UIDAI Face Authentication
                framework to provide a seamless and secure method of
                Aadhaar-based identity verification. With facial biometrics and
                real-time liveness detection, users can authenticate themselves
                effortlessly without needing physical documents or OTPs,
                promoting accessibility and reducing identity fraud.
              </p>
            </div>

            <div className="px-8">
              <h6 className="text-slate-900 text-2xl sm:text-3xl font-extrabold mb-4">
                How the System Works
              </h6>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Using your device camera via React Webcam, we capture a short
                live video of your face. MediaPipe FaceMesh analyzes this feed
                to ensure you're a real, live person — not a spoof or printed
                photo. This data is then prepared for Aadhaar-based
                authentication, ensuring high accuracy and privacy throughout
                the process.
              </p>
            </div>

            <div className="px-8">
              <h6 className="text-slate-900 text-2xl sm:text-3xl font-extrabold mb-4">
                Scalability & Future Vision
              </h6>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Built with scalability in mind, our system is capable of serving
                millions of users through modular APIs. It can be embedded into
                mobile apps, web portals, or even public kiosks. We envision a
                future where face authentication becomes the default secure
                gateway for accessing essential government and financial
                services — fully digital and inclusive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
