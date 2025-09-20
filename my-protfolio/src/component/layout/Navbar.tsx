'use client' // Required for interactivity

import { useState } from 'react';
import MenuItem from "../Navigation/MenuItem";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-black text-white">
      {/* Desktop Navigation (shows on md screens and larger) */}
      <div className="hidden md:flex justify-end items-center h-14 -mt-14">
        <div className="flex justify-around text-xl w-1/2">
          <MenuItem title={"About"} />
          <MenuItem title={"Skills"} />
          <MenuItem title={"Projects"} />
          <MenuItem title={"Contact"} />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center h-14 px-4">
        {/* Logo or brand name can go here */}
        <div>YourLogo</div>
        
        {/* Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (shows when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-black py-4 px-4 space-y-4">
          <MenuItem title={"About"} mobile onClick={() => setIsOpen(false)} />
          <MenuItem title={"Education"} mobile onClick={() => setIsOpen(false)} />
          <MenuItem title={"Skills"} mobile onClick={() => setIsOpen(false)} />
          <MenuItem title={"Projects"} mobile onClick={() => setIsOpen(false)} />
          <MenuItem title={"Contact"} mobile onClick={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default Navbar;