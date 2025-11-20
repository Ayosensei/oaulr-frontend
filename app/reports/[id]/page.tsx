// app/reports/[id]/page.tsx
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';

// === 1. THE MOCK DATABASE ===
const casesDatabase: any = {
  "1": {
    id: "1",
    title: "GLENYORK NIGERIA LIMITED & ANOR v. PANALPINA WORLD TRANSPORT NIG. LIMITED",
    court: "Supreme Court of Nigeria",
    appealNo: "APPEAL NO.: SC.34/2008",
    date: "Friday, February 21, 2025",
    decision: "Appeal Allowed.",
    catchphrase: "JURISDICTION — ADMIRALTY JURISDICTION — Whether Section 1(1) & (2) of the Admiralty Jurisdiction Act 1991 extends to carriage of goods by land after offloading from ship.",
    leadJudgment: `EMMANUEL AKOMAYE AGIM, J.S.C. (Delivering the Leading Judgment): This appeal No. SC.34/2008 was commenced on 14-12-2008 when the appellant herein filed a notice of appeal against the Judgment of the Court of appeal...`,
    facts: `Sometimes in 1993, the 1st appellant (Plaintiff before the trial court) imported a Diesel Power Engine from the United Kingdom...`,
    issues: ["1. Whether the Court of Appeal was right...", "2. Whether the facts of this case...", "3. Whether the decision in Aluminum Manufacturing..."],
    holdings: ["JURISDICTION: The Admiralty jurisdiction...", "ON ISSUE 1...", "ON ISSUE 2...", "ON ISSUE 3...", "ON ISSUE 4...", "CONCLUSION..."],
    justices: ["Helen Moronkeji Ogunwumiju, JSC", "Emmanuel Akomaye Agim, JSC", "Haruna Simon Tsammani, JSC", "Obande Festus Ogbuinya, JSC", "Mohammed Baba Idris, JSC"],
    counsel: { appellant: "Mbanefo Ikwegbue, Esq.", respondent: "Ayodeji Ademola, Esq." },
    casesReferredTo: ["P.E Ltd v. Leventis Technical Ltd", "Aluminum Manufacturing Co. v. NPA"]
  },
  "2": {
    id: "2", title: "State v. Adebayo & Ors", date: "10th November, 2023", court: "Court of Appeal, Akure", appealNo: "CA/AK/45/2023",
    decision: "Appeal Dismissed.", catchphrase: "CRIMINAL LAW — EVIDENCE", facts: "Placeholder...", issues: [], holdings: [], justices: [], counsel: {appellant:"", respondent:""}, casesReferredTo: []
  },
  "3": {
    id: "3", title: "OAU Ventures v. Tech Corp", date: "28th October, 2023", court: "Federal High Court, Osogbo", appealNo: "FHC/OS/99/2022",
    decision: "Judgment for Defendant.", catchphrase: "COMMERCIAL LAW — CONTRACTS", facts: "Placeholder...", issues: [], holdings: [], justices: [], counsel: {appellant:"", respondent:""}, casesReferredTo: []
  },
  "4": {
    id: "4", title: "In Re: Faculty Election 2021", date: "2021", court: "Student Judicial Council", appealNo: "SJC/001/2021",
    decision: "Election Nullified.", catchphrase: "ADMINISTRATIVE LAW — ELECTORAL MATTERS", facts: "Placeholder...", issues: [], holdings: [], justices: [], counsel: {appellant:"", respondent:""}, casesReferredTo: []
  },
  "5": {
    id: "5", title: "Dr. X v. Governing Council", date: "2020", court: "National Industrial Court", appealNo: "NICN/IB/22/2020",
    decision: "Claim Succeeded.", catchphrase: "EMPLOYMENT LAW — FAIR HEARING", facts: "Placeholder...", issues: [], holdings: [], justices: [], counsel: {appellant:"", respondent:""}, casesReferredTo: []
  }
};

const getCaseData = (id: string) => {
  return casesDatabase[id] || null;
};

// === 2. THE COMPONENT (UPDATED FOR NEXT.JS 15) ===
// We change 'params' to be a Promise and make the function async
export default async function CaseDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params; // <--- THIS FIXES THE ERROR
  const caseData = getCaseData(params.id);

  if (!caseData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-[#002147]">Case Not Found</h2>
        <p className="text-gray-600 mt-2">ID: {params.id}</p>
        <Link href="/reports" className="text-[#d4af37] font-bold hover:underline mt-4 text-lg">&larr; Go Back</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn direction="right">
          <Link href="/reports" className="inline-flex items-center text-base font-bold text-[#d4af37] hover:text-[#002147] mb-8 transition group">
            <span className="group-hover:-translate-x-1 transition-transform mr-1">&larr;</span> Back to Case List
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          
          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 space-y-10">
            <FadeIn direction="up">
              <div className="bg-white p-10 rounded-xl shadow-sm border-t-4 border-[#002147]">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{caseData.court}</span>
                  <span className="text-sm font-bold text-[#002147] bg-blue-50 px-3 py-1 rounded">{caseData.date}</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-[#002147] mb-3 leading-tight uppercase">
                  {caseData.title}
                </h1>
                <p className="text-xl text-[#d4af37] font-serif italic font-semibold mb-8">
                  {caseData.appealNo}
                </p>
                <div className="bg-gray-50 border-l-4 border-[#d4af37] p-6 italic text-gray-800 font-serif text-lg leading-relaxed">
                  {caseData.catchphrase}
                </div>
              </div>
            </FadeIn>

            {/* Lead Judgment */}
            {caseData.leadJudgment && (
              <FadeIn direction="up" delay={0.1}>
                <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-[#002147] font-bold uppercase tracking-widest text-base mb-6 border-b pb-2">Lead Judgment (Excerpt)</h3>
                  <p className="text-lg md:text-xl text-gray-800 leading-loose text-justify whitespace-pre-line">
                    {caseData.leadJudgment}
                  </p>
                </div>
              </FadeIn>
            )}

            {/* Facts */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#002147] font-bold uppercase tracking-widest text-base mb-6 border-b pb-2">Facts of the Case</h3>
                <p className="text-lg md:text-xl text-gray-800 leading-loose text-justify whitespace-pre-line">
                  {caseData.facts}
                </p>
              </div>
            </FadeIn>

            {/* Issues */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#002147] font-bold uppercase tracking-widest text-base mb-6 border-b pb-2">Issues</h3>
                <ul className="space-y-6">
                  {caseData.issues.map((issue: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#d4af37] font-bold mr-4 text-2xl">?</span>
                      <span className="text-lg md:text-xl text-gray-800 font-medium italic leading-relaxed">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Holdings */}
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#002147] font-bold uppercase tracking-widest text-base mb-6 border-b pb-2">Holdings</h3>
                <div className="space-y-8">
                  {caseData.holdings.map((holding: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-lg mr-5 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-lg md:text-xl text-gray-800 leading-loose">
                        {holding}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-4 space-y-6">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-[#002147] mb-4 text-lg">⚖️ Justices</h3>
                <ul className="space-y-3">
                  {caseData.justices.map((judge: string, idx: number) => (
                    <li key={idx} className="text-base text-gray-700 border-b border-gray-50 last:border-0 pb-2 mb-2">{judge}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-[#002147] mb-4 text-lg">👔 Counsel</h3>
                <div className="mb-4">
                  <p className="text-xs text-gray-400 uppercase font-bold">For Appellant</p>
                  <p className="text-base text-gray-900 mt-1 font-medium">{caseData.counsel.appellant}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">For Respondent</p>
                  <p className="text-base text-gray-900 mt-1 font-medium">{caseData.counsel.respondent}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.5}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-24">
                <button className="w-full bg-[#d4af37] text-[#002147] font-bold py-4 rounded-lg hover:bg-[#e6c248] transition shadow-md active:scale-95 mb-3 flex items-center justify-center text-lg">
                  📥 Download PDF
                </button>
                <button className="w-full border border-[#002147] text-[#002147] font-bold py-4 rounded-lg hover:bg-gray-50 transition active:scale-95 flex items-center justify-center text-lg">
                  Share Case
                </button>
              </div>
            </FadeIn>
          </div>

        </div> 

        {/* FINAL DECISION */}
        <FadeIn direction="up" delay={0.5}>
          <div className="w-full bg-[#002147] rounded-2xl shadow-2xl border-t-8 border-[#d4af37] p-8 md:p-12 text-center relative overflow-hidden mt-8">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex justify-center items-center">
               <span className="text-[15rem]">⚖️</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm md:text-base mb-6">Final Verdict</h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">"{caseData.decision}"</p>
              </div>
              <div className="mt-8 flex justify-center"><span className="inline-block w-24 h-1 bg-[#d4af37] rounded-full"></span></div>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}