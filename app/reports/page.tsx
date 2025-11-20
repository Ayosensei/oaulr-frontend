// app/reports/page.tsx
import Link from 'next/link';
import FadeIn from '../components/FadeIn'; // Adjust path to go up one level

// Mock Data
const cases = [
  { 
    id: 1, 
    title: "Glenyork (Nig.) Ltd & Anor  v. Panalpina World Transport (Nig.) Ltd", 
    year: "2025", 
    category: "Civil Procedure (Jurisdiction)", 
    citation: "[2024/25] 1 OAULR",
    summary: "This Supreme Court appeal determines whether a claim for goods damaged during road transport after offloading from a ship falls under the exclusive admiralty jurisdiction of the Federal High Court or belongs in the State High Court as a simple contract dispute.",
    isFree: true 
  },
  { 
    id: 2, 
    title: "Afribank (Nig) Pls & Ors v. NDIC & Ors", 
    year: "2025", 
    category: "Company Law (Derivative Action)", 
    citation: "[2024/25] 2 OAULR",
    summary: "his appeal determines whether judicial leave obtained to file a previous derivative action confers a vested right that validates a fresh suit without the need to obtain new leave under Section 303(1) of the Companies and Allied Matters Act (CAMA) 1990.",
    isFree: true 
  },
  { 
    id: 3, 
    title: "Dickson v. Ijalaye", 
    year: "2025", 
    category: "Land Law (Proof of Title & Abandoned Property)", 
    citation: "[2024/25] 3 OAULR",
    summary: "This Supreme Court appeal contests the lower courts' decisions which upheld the Respondent's title acquired via the Abandoned Property Implementation Committee, while rejecting the Appellant's counter-claim based on traditional history and a Customary Court judgment deemed a nullity for lack of jurisdiction over urban land.",
    isFree: false 
  },
  { 
    id: 4, 
    title: "Okonjo-Iweala v. Fawehinmi & Ors", 
    year: "2025", 
    category: "Civil Procedure (Locus Standi & Appellate Powers)", 
    citation: "[2024/25] 4 OAULR",
    summary: "This Supreme Court appeal challenges the Court of Appeal's decision to grant locus standi to a taxpayer contesting the Appellant's ministerial remuneration and its subsequent invocation of Section 15 of the Court of Appeal Act to determine the substantive case rather than remitting it to the trial court.",
    isFree: true 
  },
  { 
    id: 5, 
    title: "Unity Bank Plc  v. Rhour & Lue (Nig.) Ltd. & Anor", 
    year: "2025", 
    category: "Banking Law & Civil Procedure", 
    citation: "[2024/25] 5 OAULR",
    summary: "This Supreme Court appeal determines whether a loan recovery suit claiming principal and disputed compound interest qualifies for the summary Undefended List procedure, specifically addressing whether a borrower's admission of the principal debt while contesting the interest rates and repayment terms constitutes a triable defense on the merit.",
    isFree: false 
  },
];

export default function ReportsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <FadeIn direction="down">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-[#002147]">Browse Reports</h1>
            <p className="text-gray-600 mt-2">Search and filter through the complete archive of judgments.</p>
          </div>
        </FadeIn>

        {/* Search & Filter Toolbar */}
        <FadeIn delay={0.2} direction="up">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <input 
                type="text" 
                placeholder="Search by Case Title, Citation, or Judge..." 
                // ADDED: text-gray-900
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:border-[#002147] focus:ring-1 focus:ring-[#002147]"
              />
            </div>
            <div className="flex gap-4">
              <select className="border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none">
                <option>All Years</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
              <select className="border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none">
                <option>All Categories</option>
                <option>Constitutional</option>
                <option>Criminal</option>
                <option>Commercial</option>
              </select>
              <button className="bg-[#002147] text-white px-6 py-2 rounded-md font-bold hover:bg-[#003366] transition active:scale-95">
                Filter
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Case List with Staggered Animation */}
        <div className="space-y-6">
          {cases.map((lawCase, index) => (
            <FadeIn key={lawCase.id} delay={index * 0.15} direction="up">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-[#d4af37] hover:shadow-md transition duration-300 flex flex-col md:flex-row justify-between items-start md:items-center transform hover:-translate-y-1">
                
                {/* Left: Case Details */}
                <div className="flex-grow pr-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="px-2 py-1 bg-blue-50 text-[#002147] text-xs font-bold uppercase rounded">
                      {lawCase.category}
                    </span>
                    <span className="text-gray-400 text-xs font-medium">•</span>
                    <span className="text-gray-500 text-xs font-medium">{lawCase.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#002147] hover:underline cursor-pointer">
                    {lawCase.title}
                  </h3>
                  <p className="text-[#d4af37] font-medium text-sm mt-1 italic">
                    {lawCase.citation}
                  </p>
                  <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                    {lawCase.summary}
                  </p>
                </div>

                {/* Right: Action Button */}
                <div className="mt-4 md:mt-0 min-w-[140px] text-right">
                  {lawCase.isFree ? (
                    // CHANGED: Now links to /reports/[ID]
                    <Link 
                      href={`/reports/${lawCase.id}`}
                      className="w-full border-2 border-[#002147] text-[#002147] font-bold py-2 px-4 rounded hover:bg-[#002147] hover:text-white transition-all duration-300 flex items-center justify-center active:scale-95"
                    >
                      <span className="mr-2">📄</span> Read Full
                    </Link>
                  ) : (
                    <div className="flex flex-col items-end">
                      <Link href="/subscribe" className="w-full bg-gray-100 text-gray-400 font-bold py-2 px-4 rounded border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-200 hover:text-gray-600 transition">
                         <span className="mr-2">🔒</span> Locked
                      </Link>
                      <p className="text-xs text-[#d4af37] mt-2 font-medium">Premium Access Only</p>
                    </div>
                  )}
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Pagination Mock */}
        <FadeIn delay={0.8} direction="up">
          <div className="mt-10 flex justify-center space-x-2">
            <button className="px-4 py-2 border rounded text-gray-500 disabled:opacity-50 hover:bg-gray-100 transition">Previous</button>
            <button className="px-4 py-2 border rounded bg-[#002147] text-white transition transform active:scale-95">1</button>
            <button className="px-4 py-2 border rounded text-[#002147] hover:bg-gray-100 transition transform active:scale-95">2</button>
            <button className="px-4 py-2 border rounded text-[#002147] hover:bg-gray-100 transition transform active:scale-95">3</button>
            <button className="px-4 py-2 border rounded text-[#002147] hover:bg-gray-100 transition">Next</button>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}