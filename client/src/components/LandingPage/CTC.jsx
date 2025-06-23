import React from "react";

const CTC = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-yellow-500 after:left-0 after:right-0 after:mx-auto after:rounded-full">
          <h2 className="text-slate-900 text-4xl sm:text-5xl font-bold !leading-tight">
            Ready to Show You're Real?
          </h2>
        </div>

        <div className="mt-10">
          <p className="text-slate-700 text-lg leading-relaxed">
            Begin a quick and secure face verification using our AI-driven liveness detection system. It’s fast, lightweight, and works directly in your browser — no apps, no downloads.
            <br />
            This simulation demonstrates how face verification works in real-time environments using only your camera and a few seconds of input.
          </p>
        </div>

        <div className="flex max-sm:flex-col justify-center gap-6 mt-12 max-w-xs mx-auto">
          <button
            type="button"
            className="min-w-[150px] rounded-md cursor-pointer px-5 py-3 text-base tracking-wide font-semibold outline-none border text-white border-yellow-500 bg-yellow-500 hover:bg-transparent hover:text-yellow-500 transition-all duration-300"
            onClick={() => window.location.href = "/liveness"}
          >
            Start Now
          </button>
          <button
            type="button"
            className="text-slate-900 min-w-[150px] rounded-md cursor-pointer px-5 py-3 text-base tracking-wide font-semibold outline-none border border-gray-300 hover:bg-gray-100 transition-all duration-300"
            onClick={() => window.location.href = "/learn"}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTC;
