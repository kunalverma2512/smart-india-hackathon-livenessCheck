import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#f8fafc] text-white mt-4">
      <div className="relative overflow-hidden min-h-[auto] md:min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-screen-xl mx-auto py-16 lg:py-28 px-6 sm:px-8">
          <div className="relative z-10 max-lg:text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold !leading-tight text-orange-500">
              Welcome to
              <span className="text-[#02a926] block">
                {" "}
                Face Verification Prototype
              </span>
            </h1>
            <div className="max-w-md md:max-w-3xl mx-auto mt-6">
              <p className="text-lg sm:text-xl text-gray-900 leading-relaxed">
                Experience AI-driven face verification with liveness detection —
                simulating how secure, hardware-free authentication can work
                for digital identity systems.
              </p>

              <div className="mt-12 lg:mt-16 flex flex-wrap max-lg:justify-center gap-6">
                <div className="rounded-full shadow-sm">
                  <button
                    className="w-full flex items-center justify-center px-8 py-4 font-medium text-base tracking-wide rounded-full text-slate-900 bg-green-600 hover:bg-gray-50 transition border-0 cursor-pointer"
                    onClick={() => (window.location.href = "/liveness")}
                  >
                    Start Verification
                  </button>
                </div>
                <div>
                  <button
                    className="w-full flex items-center justify-center px-8 py-4 font-medium text-base tracking-wide rounded-full bg-orange-600 hover:bg-gray-50 transition border-0 cursor-pointer hover:text-black"
                    onClick={() => (window.location.href = "/about")}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-yellow-400">
          {/* Optional: Add an illustration or animation here */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
