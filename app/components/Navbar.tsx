// app/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white text-[#002147] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-extrabold text-2xl tracking-wider text-[#002147]">
              OAULR
              <span className="block text-[11px] text-[#003366] font-medium uppercase tracking-widest">
                Obafemi Awolowo University Law Reports
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <Link href="/" className="hover:text-[#d4af37] transition">Home</Link>
            <Link href="/reports" className="hover:text-[#d4af37] transition">Reports</Link>
            <Link href="/subscribe" className="hover:text-[#d4af37] transition">Subscribe</Link>
            <Link href="/about" className="hover:text-[#d4af37] transition">About Us</Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="font-bold hover:text-[#d4af37] transition">Log In</Link>
            <Link href="/register" className="bg-[#002147] text-white px-5 py-2.5 rounded shadow-sm font-bold hover:bg-[#003366] transition">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}