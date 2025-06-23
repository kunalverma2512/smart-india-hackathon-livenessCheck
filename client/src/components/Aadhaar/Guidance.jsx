import React from "react";

const Guidance = () => {
  return (
    <div class="bg-gradient-to-r from-purple-800 to-indigo-800 py-12 px-4">
      <div class="max-w-screen-xl mx-auto">
        <div class="max-w-3xl mx-auto mb-16 text-center">
          <h2 class="text-white text-3xl lg:text-4xl font-bold text-center mb-4 leading-relaxed">
            Follow These Steps Before You Begin
          </h2>
          <p class="text-slate-300 text-sm leading-relaxed">
            To ensure smooth and accurate liveliness detection, please follow
            the steps below carefully before proceeding.
          </p>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          <div class="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 mb-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 11c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 17h1.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01-1.414 1.414l-3.414-3.414A1 1 0 0116 17z"
              />
            </svg>
            <h3 class="text-lg font-semibold mb-3">Ensure Proper Lighting</h3>
            <p class="text-slate-300 group-hover:text-slate-600 text-sm leading-relaxed">
              Make sure your face is clearly visible and well-lit for accurate
              detection.
            </p>
          </div>

          <div class="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 mb-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4a1 1 0 011-1h2.586a1 1 0 01.707.293L9 4h6l1.707-1.707A1 1 0 0117.414 2H20a1 1 0 011 1v2m-1 16a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1h16z"
              />
            </svg>
            <h3 class="text-lg font-semibold mb-3">Face the Camera Directly</h3>
            <p class="text-slate-300 group-hover:text-slate-600 text-sm leading-relaxed">
              Look straight into the camera with a neutral expression.
            </p>
          </div>

          <div class="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 mb-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 17.25a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM6 12a6 6 0 0112 0v2.25a2.25 2.25 0 01-4.5 0V12a1.5 1.5 0 00-3 0v2.25a2.25 2.25 0 01-4.5 0V12z"
              />
            </svg>
            <h3 class="text-lg font-semibold mb-3">
              Neutral Facial Expression
            </h3>
            <p class="text-slate-300 group-hover:text-slate-600 text-sm leading-relaxed">
              Avoid smiling, laughing, or covering your face during the scan.
            </p>
          </div>

          <div class="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 mb-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h4l3 10h8l3-10h4M16 6a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <h3 class="text-lg font-semibold mb-3">No Accessories</h3>
            <p class="text-slate-300 group-hover:text-slate-600 text-sm leading-relaxed">
              Remove any hats, sunglasses, or face coverings before proceeding.
            </p>
          </div>

          <div class="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 mb-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-9.33-5.013"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 21H4l1.405-1.405A2.032 2.032 0 016 18.158V15a6 6 0 0111.33-3.013"
              />
            </svg>
            <h3 class="text-lg font-semibold mb-3">Stay Still</h3>
            <p class="text-slate-300 group-hover:text-slate-600 text-sm leading-relaxed">
              Keep your head steady and avoid sudden movements.
            </p>
          </div>

          <div class="rounded-xl group p-8 text-center bg-white text-purple-800 shadow-xl transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 mb-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <h3 class="text-lg font-semibold mb-3">Ready to Begin?</h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
              Click below to start your liveliness check and complete the
              verification process.
            </p>
            <a
              href="/liveness-check"
              class="inline-block px-5 py-2 bg-purple-800 hover:bg-purple-900 text-white rounded-xl text-sm font-semibold transition"
            >
              Start Liveliness Check
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidance;
