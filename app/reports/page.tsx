// app/reports/page.tsx
import Link from 'next/link';
import FadeIn from '../components/FadeIn'; // Adjust path to go up one level

// Mock Data
import { reports } from '../api/data/reports';
import ReportsClient from './ReportsClient';

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

        <ReportsClient initialReports={reports} />

        {/* Pagination Mock */}
        {/*<FadeIn delay={0.8} direction="up">
          <div className="mt-10 flex justify-center space-x-2">
            <button className="px-4 py-2 border rounded text-gray-500 disabled:opacity-50 hover:bg-gray-100 transition">Previous</button>
            <button className="px-4 py-2 border rounded bg-[#002147] text-white transition transform active:scale-95">1</button>
            <button className="px-4 py-2 border rounded text-[#002147] hover:bg-gray-100 transition transform active:scale-95">2</button>
            <button className="px-4 py-2 border rounded text-[#002147] hover:bg-gray-100 transition transform active:scale-95">3</button>
            <button className="px-4 py-2 border rounded text-[#002147] hover:bg-gray-100 transition">Next</button>
          </div>
        </FadeIn>*/}

      </div>
    </div>
  );
}