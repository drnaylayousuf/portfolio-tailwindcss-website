"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when a menu item is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main>
      {/* Hamburger Icon */}
      <button onClick={toggleMenu} className="absolute top-5 left-5 z-20">
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-30 flex flex-col items-center justify-center">
          <nav className="bg-white p-4 rounded-lg">
            <ul className="flex flex-col gap-4">
              {/* Each link will close the menu when clicked */}
              <li><Link href="/hero" className="text-blue-500" onClick={closeMenu}>HOME</Link></li>
              <li><Link href="/skills" className="text-blue-500" onClick={closeMenu}>Skills</Link></li>
              <li><Link href="/projects" className="text-blue-500" onClick={closeMenu}>Projects</Link></li>
              <li><Link href="/contact" className="text-blue-500" onClick={closeMenu}>Contact</Link></li>
              {/* Close button */}
              <li><button onClick={closeMenu} className="bg-blue-500 text-white p-2 rounded">Close</button></li>
            </ul>
          </nav>
        </div>
      )}
    </main>
  );
}
