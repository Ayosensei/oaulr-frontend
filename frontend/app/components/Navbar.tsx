// app/components/Navbar.tsx
'use client'; // <--- REQUIRED for the mobile menu to work

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-[#002147] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-extrabold text-2xl tracking-wider text-[#002147]">
              OAULR
              <span className="block text-[10px] text-[#003366] font-medium uppercase tracking-widest">
                Obafemi Awolowo University Law Reports
              </span>
            </Link>
          </div>

          {/* DESKTOP Menu (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <Link href="/" className="hover:text-[#d4af37] transition">Home</Link>
            <Link href="/reports" className="hover:text-[#d4af37] transition">Reports</Link>
            <Link href="/subscribe" className="hover:text-[#d4af37] transition">Subscribe</Link>
            <Link href="/about" className="hover:text-[#d4af37] transition">About Us</Link>
          </div>

          {/* DESKTOP Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="font-bold hover:text-[#d4af37] transition">Log In</Link>
            <Link href="/register" className="bg-[#002147] text-white px-5 py-2.5 rounded shadow-sm font-bold hover:bg-[#003366] transition">
              Get Started
            </Link>
          </div>

          {/* MOBILE Toggle Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#002147] focus:outline-none">
              <span className="text-3xl">{isOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (Visible when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-50 hover:text-[#d4af37]">Home</Link>
            <Link href="/reports" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-50 hover:text-[#d4af37]">Reports</Link>
            <Link href="/subscribe" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-50 hover:text-[#d4af37]">Subscribe</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-50 hover:text-[#d4af37]">About Us</Link>
            <div className="border-t border-gray-100 pt-4 mt-2 flex flex-col space-y-3">
              <Link href="/login" onClick={() => setIsOpen(false)} className="text-center block w-full px-4 py-3 text-[#002147] font-bold border border-[#002147] rounded">Log In</Link>
              <Link href="/register" onClick={() => setIsOpen(false)} className="text-center block w-full px-4 py-3 text-white bg-[#002147] font-bold rounded">Get Started</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}