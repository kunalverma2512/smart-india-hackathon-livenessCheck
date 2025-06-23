import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex shadow-[0px_0px_16px_rgba(17,_17,_26,_0.1)] py-4 px-4 sm:px-6 bg-white min-h-[70px] tracking-wide fixed w-full z-50">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full max-w-screen-xl mx-auto">
        {/* Logo */}
        <a href="/" className="max-sm:hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png"
            alt="logo"
            className="w-20"
          />
        </a>
        <a href="/" className="hidden max-sm:block">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png"
            alt="logo"
            className="w-14"
          />
        </a>

        {/* Menu items */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-lg:z-50 lg:block`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="lg:hidden fixed top-4 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="lg:flex gap-x-5 max-lg:space-y-3">
            <li className="mb-6 hidden max-lg:block">
              <a href="/">
                <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png"
            alt="logo"
            className="w-36"
          />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a href="/" className="hover:text-blue-700 text-blue-700 font-medium block text-base">
                Home
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a href="/team" className="hover:text-blue-700 text-slate-900 font-medium block text-base">
                Team
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a href="/faq" className="hover:text-blue-700 text-slate-900 font-medium block text-base">
                FAQ
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a href="/about" className="hover:text-blue-700 text-slate-900 font-medium block text-base">
                About
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a href="/contactus" className="hover:text-blue-700 text-slate-900 font-medium block text-base">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="flex items-center max-lg:ml-auto space-x-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden cursor-pointer"
          >
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
