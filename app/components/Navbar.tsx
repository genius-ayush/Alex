"use client";
import React, { useState } from "react";
import Image from 'next/image'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 backdrop-blur-lg">
        <div className="flex justify-between items-center h-[72px] w-full lg:w-3/4 mx-auto px-6 lg:px-20 shadow-sm">
          {/* Logo Section */}
          <div className="flex items-center font-semibold gap-2">
            <Image src="/icon.png" alt="Logo" className="w-9 h-9" width={9} height={9}/>
            <span className="leading-10 text-xl">Alex</span>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <button
            className="block lg:hidden text-gray-400 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`lg:flex gap-6 text-gray-400 ${
              isOpen ? "flex flex-col absolute top-[72px] left-0 w-full bg-black px-6 py-4" : "hidden"
            }`}
          >
            <div className="hover:text-white cursor-pointer">Home</div>
            <div className="hover:text-white cursor-pointer">Feature</div>
            <div className="hover:text-white cursor-pointer">Docs</div>
            <div className="hover:text-white cursor-pointer">Pricing</div>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
