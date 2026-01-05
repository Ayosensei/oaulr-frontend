// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#002147] text-white border-t border-[#d4af37]">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Description */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold tracking-wider text-white">
              OAULR
            </h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              The official digital repository for judgments and rulings from the Faculty of Law, Obafemi Awolowo University.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-[#d4af37] uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white hover:underline transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-gray-300 hover:text-white hover:underline transition">
                  Browse Reports
                </Link>
              </li>
              <li>
                <Link href="/subscribe" className="text-gray-300 hover:text-white hover:underline transition">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white hover:underline transition">
                  About the Faculty
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h3 className="text-sm font-bold text-[#d4af37] uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white hover:underline transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white hover:underline transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-[#d4af37] uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                Head Office Address: Law Reports Unit <br/> Behind New Moot & Mock Court building <br/> Faculty of Law, <br/>Obafemi Awolowo University,<br/> Ile-Ife, Osun State.
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <a>oaulawreports@gmail.com</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                Managing Editor: +2348058163438 <br/> Senior Editor: +2348163533315
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                <a href="https://www.facebook.com/groups/704983879159290/permalink/705182099139468/">@Obafemi Awolowo University Law Reports (OAULR)</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} OAU Law Reports. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <span className="text-gray-500 text-xs">
              Developed for the Faculty of Law
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}