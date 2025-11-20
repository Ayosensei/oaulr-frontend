// app/subscribe/page.tsx
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export default function SubscribePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header Banner with Image Background */}
      <div className="relative bg-[#002147] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2600&auto=format&fit=crop" 
            alt="Legal Contracts" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down">
            <h2 className="text-4xl font-extrabold sm:text-5xl">
              Choose Your Access Plan
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Support the Faculty of Law and gain access to decades of legal precedence.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Pricing Cards (Negative Margin to pull them up into the banner) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Free Tier */}
          <FadeIn delay={0.2} direction="up" className="h-full">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
               <div className="px-6 py-8">
                 <h3 className="text-2xl font-bold text-[#002147] text-center">Guest Access</h3>
                 {/* ... Rest of code is same as before ... */}
                 <div className="mt-8 flex justify-center items-baseline">
                  <span className="text-4xl font-extrabold text-[#002147]">Free</span>
                </div>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-50/50 border-t border-gray-100 flex-grow flex flex-col justify-between">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-2">✓</span> Browse Case Titles
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-2">✓</span> Read Headnotes/Summaries
                  </li>
                  <li className="flex items-start text-gray-400">
                    <span className="mr-2">✕</span> Full PDF Judgments
                  </li>
                </ul>
                <Link href="/register" className="block w-full text-center bg-white border-2 border-[#002147] text-[#002147] font-bold py-3 rounded-lg hover:bg-gray-50 transition active:scale-95">
                  Create Free Account
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Student Tier */}
          <FadeIn delay={0.4} direction="up" className="h-full">
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-[#d4af37] overflow-hidden transform scale-105 hover:scale-[1.07] transition-all duration-300 h-full flex flex-col relative">
               {/* ... Rest of code is same as before ... */}
               <div className="absolute top-0 inset-x-0 bg-[#d4af37] text-[#002147] text-xs font-bold px-3 py-1.5 uppercase text-center tracking-wide">
                Best Value for Students
              </div>
              <div className="px-6 py-8 mt-2">
                <h3 className="text-2xl font-bold text-[#002147] text-center">Student</h3>
                <p className="mt-4 text-gray-500 text-center">Verified OAU Law Students.</p>
                <div className="mt-8 flex justify-center items-baseline">
                  <span className="text-5xl font-extrabold text-[#002147]">₦2,000</span>
                  <span className="ml-1 text-xl text-gray-500">/session</span>
                </div>
              </div>
              <div className="px-6 pt-6 pb-8 bg-[#fffbf0] border-t border-[#fcefc2] flex-grow flex flex-col justify-between">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start text-gray-800">
                    <span className="text-[#d4af37] mr-2">✓</span> Unlimited PDF Downloads
                  </li>
                  <li className="flex items-start text-gray-800">
                    <span className="text-[#d4af37] mr-2">✓</span> Advanced Search Filters
                  </li>
                  <li className="flex items-start text-gray-800">
                    <span className="text-[#d4af37] mr-2">✓</span> Academic Citation Tool
                  </li>
                </ul>
                <button className="block w-full text-center bg-[#002147] text-white font-bold py-3 rounded-lg hover:bg-[#003366] transition shadow-lg active:scale-95">
                  Verify & Subscribe
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Professional Tier */}
          <FadeIn delay={0.6} direction="up" className="h-full">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
               {/* ... Rest of code is same as before ... */}
               <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-[#002147] text-center">Professional</h3>
                <p className="mt-4 text-gray-500 text-center">Lawyers, Firms, and Researchers.</p>
                <div className="mt-8 flex justify-center items-baseline">
                  <span className="text-4xl font-extrabold text-[#002147]">₦15,000</span>
                  <span className="ml-1 text-xl text-gray-500">/year</span>
                </div>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-50/50 border-t border-gray-100 flex-grow flex flex-col justify-between">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-2">✓</span> Full Commercial License
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-2">✓</span> Priority Support
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-2">✓</span> Multiple Device Login
                  </li>
                </ul>
                <button className="block w-full text-center bg-[#d4af37] text-[#002147] font-bold py-3 rounded-lg hover:bg-yellow-400 transition active:scale-95">
                  Subscribe Now
                </button>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}