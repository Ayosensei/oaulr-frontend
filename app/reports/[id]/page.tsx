'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import FadeIn from '../../components/FadeIn';
import Breadcrumbs from '../../components/Breadcrumbs';
import DownloadButton from './download';
import ShareButton from '@/app/components/ShareButton';
import { getBaseUrl } from '@/app/components/BaseUrl';

type CourtCase = {
  id: number;
  FILE_NAME: string;
  TITLE: string;
  APPELLANTS: string[];
  RESPONDENTS: string[];
  DATE_OF_JUDGMENT: string;
  COURT: string;
  PANEL: string[];
  APPEAL_NO: string;
  JURISDICTION_ISSUE: string;
  FACTS: string;
  ISSUES_FOR_DETERMINATION: string[];
  HELD: string;
  CASES_REFERRED_TO: string[];
  CONCURRING_OPINIONS: string[];
  OUTCOME: string;
  Counsel: {
    APPELLANTS: string,
    RESPONDENTS: string
  }
};

export default function CaseDetail() {
  const params = useParams();
  const id = params.id as string;

  const [caseData, setCaseData] = useState<CourtCase | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const baseUrl = getBaseUrl();
      const res = await fetch(`${baseUrl}/api/cases`, {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        },
        cache: 'no-store',
      });

      if (!res.ok) {
        console.error('Failed to fetch cases');
        setCaseData(null);
        setLoading(false);
        return;
      }

      const { cases } = await res.json();
      const foundCase = cases.find((c: CourtCase) => c.id === Number(id));
      setCaseData(foundCase || null);
      setLoading(false);
    }

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-[#002147]">Loading...</h2>
      </div>
    );
  }

  if (!caseData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-[#002147]">Case Not Found</h2>
        <p className="text-gray-600 mt-2">ID: {id}</p>
        <Link href="/reports" className="text-[#d4af37] font-bold hover:underline mt-4 text-lg">&larr; Go Back</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn direction="right">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Reports', href: '/reports' },
            
              { label: caseData.TITLE }
            ]}
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 space-y-10">
            <FadeIn direction="up">
              <div className="bg-white p-10 rounded-xl shadow-sm border-t-4 border-[#002147]">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{caseData.COURT}</span>
                  <span className="text-sm font-bold text-[#002147] bg-blue-50 px-3 py-1 rounded">{caseData.DATE_OF_JUDGMENT}</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-[#002147] mb-3 leading-tight uppercase">
                  {caseData.TITLE}
                </h1>
                <p className="text-xl text-[#d4af37] font-serif italic font-semibold mb-8">
                  {caseData.APPEAL_NO}
                </p>
                <div className="bg-gray-50 border-l-4 border-[#d4af37] p-6 italic text-gray-800 font-serif text-lg leading-relaxed">
                  {caseData.JURISDICTION_ISSUE}
                </div>
              </div>
            </FadeIn>

            {/* Lead Judgment */}
            {caseData.HELD && (
              <FadeIn direction="up" delay={0.1}>
                <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-[#002147] font-bold uppercase tracking-widest text-base mb-6 border-b pb-2">Lead Judgment (Excerpt)</h3>
                  <p className="text-lg md:text-xl text-gray-800 leading-loose text-justify whitespace-pre-line">
                    {caseData.HELD}
                  </p>
                </div>
              </FadeIn>
            )}

            {/* Facts */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#002147] font-bold uppercase tracking-widest text-base mb-6 border-b pb-2">Facts of the Case</h3>
                <p className="text-lg md:text-xl text-gray-800 leading-loose text-justify whitespace-pre-line">
                  {caseData.FACTS}
                </p>
              </div>
            </FadeIn>

            {/* Issues */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#002147] font-bold uppercase tracking-widest text-base mb-6 border-b pb-2">Issues</h3>
                <ul className="space-y-6">
                  {caseData.ISSUES_FOR_DETERMINATION.map((issue: string, index: number) => (
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
                  {caseData.CASES_REFERRED_TO.map((holding: string, index: number) => (
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
                  {caseData.PANEL.map((judge: string, idx: number) => (
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
                  <p className="text-base text-gray-900 mt-1 font-medium">{caseData.Counsel.APPELLANTS}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">For Respondent</p>
                  <p className="text-base text-gray-900 mt-1 font-medium">{caseData.Counsel.RESPONDENTS}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.5}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-24">
                <DownloadButton caseData={caseData} />
                {/* Ensure this button text doesn't wrap awkwardly */}
                <ShareButton
                  title={caseData.TITLE}
                  url={`${getBaseUrl()}/reports/${id}`}
                />
              </div>
            </FadeIn>
          </div>

        </div>

        {/* FINAL DECISION */}
        <FadeIn direction="up" delay={0.5}>
          <div className="w-full bg-[#002147] rounded-2xl shadow-2xl border-t-8 border-[#d4af37] p-8 md:p-12 text-center relative overflow-hidden mt-8">

            {/* FIX: Reduce icon size on mobile (text-8xl) and large on desktop (md:text-[15rem]) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex justify-center items-center">
              <span className="text-8xl md:text-[15rem]">⚖️</span>
            </div>

            <div className="relative z-10">
              <h3 className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-xs md:text-base mb-4 md:mb-6">
                Final Verdict
              </h3>

              <div className="max-w-4xl mx-auto">
                {/* FIX: Reduce text size on mobile (text-2xl) */}
                <p className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                  {caseData.OUTCOME}
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <span className="inline-block w-16 md:w-24 h-1 bg-[#d4af37] rounded-full"></span>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}