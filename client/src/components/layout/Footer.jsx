import React from "react";

const Footer = () => {
  return (
    <footer className="tracking-wide bg-gray-50 px-10 pt-12 pb-6">
      <div className="flex flex-wrap justify-between gap-10">
        <div className="max-w-md">
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png"
              alt="UIDAI Logo"
              // className="w-36"
            />
          </a>
          <div className="mt-6">
            <p className="text-slate-600 leading-relaxed text-sm">
              Our platform simulates Aadhaar-based Face Authentication with
              advanced liveness detection technology. It provides a secure and
              smooth user experience, helping citizens understand how real-time
              biometric verification can work digitally.
            </p>
          </div>
          <ul className="mt-10 flex space-x-5">
            {/* You can link to your GitHub or leave void */}
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-blue-600 w-8 h-8"
                  viewBox="0 0 49.652 49.652"
                >
                  <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-slate-900 font-semibold text-sm">Verification</h4>
          <ul className="mt-6 space-y-4">
            <li>
              <a
                href="/"
                className="text-slate-600 hover:text-slate-900 text-sm"
              >
                Liveness Detection
              </a>
            </li>
            <li>
              <a
                href="/aadhaar"
                className="text-slate-600 hover:text-slate-900 text-sm"
              >
                Aadhaar Simulation
              </a>
            </li>
            <li>
              <a
                href="/profile"
                className="text-slate-600 hover:text-slate-900 text-sm"
              >
                User Profile
              </a>
            </li>
            <li>
              <a
                href="/success"
                className="text-slate-600 hover:text-slate-900 text-sm"
              >
                Verification Result
              </a>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-slate-900 font-semibold text-sm">Resources</h4>
          <ul className="space-y-4 mt-6">
            <li>
              <a
                href="https://uidai.gov.in"
                className="text-slate-600 hover:text-slate-900 text-sm"
                target="_blank"
                rel="noreferrer"
              >
                UIDAI Official
              </a>
            </li>
            <li>
              <a
                href="https://myaadhaar.uidai.gov.in/"
                className="text-slate-600 hover:text-slate-900 text-sm"
                target="_blank"
                rel="noreferrer"
              >
                My Aadhaar Portal
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="text-slate-600 hover:text-slate-900 text-sm"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-slate-900 font-semibold text-sm">Team</h4>
          <ul className="space-y-4 mt-6">
            <li>
              <a
                href="/team"
                className="text-slate-600 hover:text-slate-900 text-sm"
              >
                Our Members
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-slate-600 hover:text-slate-900 text-sm"
              >
                About Project
              </a>
            </li>
            <li>
              <a
                href="/contactus"
                className="text-slate-600 hover:text-slate-900 text-sm"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-xs text-red-500 max-w-xl leading-relaxed">
          Disclaimer: This project is a prototype developed as part of the Smart
          India Hackathon 2025. It is not affiliated with UIDAI or any
          government body. The Aadhaar logo is used here only for simulation
          purposes and belongs to UIDAI.
        </p>
      </div>

      <hr className="mt-10 mb-6 border-gray-300" />

      <div className="flex flex-wrap max-md:flex-col gap-4">
        <ul className="md:flex md:space-x-6 max-md:space-y-2">
          <li>
            <a
              href="/terms"
              className="text-slate-600 hover:text-slate-900 text-sm"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="/privacy"
              className="text-slate-600 hover:text-slate-900 text-sm"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/security"
              className="text-slate-600 hover:text-slate-900 text-sm"
            >
              Security
            </a>
          </li>
        </ul>
        <p className="text-slate-600 text-sm md:ml-auto">
          © 2025 UIDAI Liveness Sim. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
