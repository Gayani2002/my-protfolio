'use client'

import { useState } from 'react';
import MenuItem from "../Navigation/MenuItem";
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-md">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center h-16 px-10">
        {/* Logo on the left */}
        <div className="text-l font-bold text-blue-400 tracking-wide">
          <Image
            src="/images/Preview.png"
            alt="Logo"
            width={40}
            height={40}
            className="inline-block mr-2"
          />
      
        </div>

        {/* Menu aligned right */}
        <div className="flex gap-10 text-lg font-medium tracking-wide">
          <MenuItem title="About" />
          <MenuItem title="Skills" />
          <MenuItem title="Projects" />
          <MenuItem title="Contact" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center h-16 px-6">
        {/* Logo */}
        <div className="text-2xl  text-blue-400 tracking-wide">
            <Image
            src="/images/Preview.png"
            alt="Logo"
            width={40}
            height={40}
            className="inline-block mr-2"
          />
        </div>

        {/* Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none transition-transform transform hover:scale-110"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black bg-opacity-95 absolute w-full left-0 transition-all duration-300 ease-in-out ${
          isOpen ? "top-16 opacity-100" : "-top-96 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-6 space-y-6 text-lg font-medium">
          <MenuItem title="About" mobile onClick={() => setIsOpen(false)} />
          <MenuItem title="Skills" mobile onClick={() => setIsOpen(false)} />
          <MenuItem title="Projects" mobile onClick={() => setIsOpen(false)} />
          <MenuItem title="Contact" mobile onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
