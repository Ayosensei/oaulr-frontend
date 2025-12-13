"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

interface Report {
    id: number;
    title: string;
    year: string;
    category: string;
    citation: string;
    summary: string;
    isFree: boolean;
}

interface ReportsClientProps {
    initialReports: Report[];
}

export default function ReportsClient({ initialReports }: ReportsClientProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedYear, setSelectedYear] = useState("All Years");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    // Extract unique years and categories for filter options
    const years = useMemo(() => {
        const allYears = initialReports.map(r => r.year);
        return ["All Years", ...Array.from(new Set(allYears)).sort().reverse()];
    }, [initialReports]);

    const categories = useMemo(() => {
        const allCategories = initialReports.map(r => r.category);
        return ["All Categories", ...Array.from(new Set(allCategories)).sort()];
    }, [initialReports]);

    // Filter logic
    const filteredReports = useMemo(() => {
        return initialReports.filter(report => {
            const matchesSearch =
                report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                report.citation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                report.summary.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesYear = selectedYear === "All Years" || report.year === selectedYear;
            const matchesCategory = selectedCategory === "All Categories" || report.category === selectedCategory;

            return matchesSearch && matchesYear && matchesCategory;
        });
    }, [initialReports, searchQuery, selectedYear, selectedCategory]);

    return (
        <div>
            {/* Search & Filter Toolbar */}
            <FadeIn delay={0.2} direction="up">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-8 flex flex-col md:flex-row gap-4">
                    <div className="flex-grow">
                        <input
                            type="text"
                            placeholder="Search by Case Title, Citation, or Summary..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:border-[#002147] focus:ring-1 focus:ring-[#002147]"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="w-full sm:w-auto border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none"
                        >
                            {years.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full sm:w-auto border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none md:max-w-[200px]"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </FadeIn>

            {/* Case List */}
            <div className="space-y-6">
                {filteredReports.length > 0 ? (
                    filteredReports.map((lawCase, index) => (
                        <FadeIn key={lawCase.id} delay={index * 0.1} direction="up">
                            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200 hover:border-[#d4af37] hover:shadow-md transition duration-300 flex flex-col md:flex-row justify-between items-start md:items-center transform hover:-translate-y-1">

                                {/* Left: Case Details */}
                                <div className="flex-grow pr-0 md:pr-4 mb-4 md:mb-0 w-full">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="px-2 py-1 bg-blue-50 text-[#002147] text-[10px] md:text-xs font-bold uppercase rounded">
                                            {lawCase.category}
                                        </span>
                                        <span className="text-gray-400 text-xs font-medium">•</span>
                                        <span className="text-gray-500 text-xs font-medium">{lawCase.year}</span>
                                    </div>

                                    <Link href={`/reports/${lawCase.id}`}>
                                        <h3 className="text-lg md:text-xl font-bold text-[#002147] hover:underline cursor-pointer">
                                            {lawCase.title}
                                        </h3>
                                    </Link>
                                    <p className="text-[#d4af37] font-medium text-xs md:text-sm mt-1 italic">
                                        {lawCase.citation}
                                    </p>
                                    <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                                        {lawCase.summary}
                                    </p>
                                </div>

                                {/* Right: Action Button */}
                                <div className="min-w-full md:min-w-[140px] md:text-right">
                                    {lawCase.isFree ? (
                                        <Link
                                            href={`/reports/${lawCase.id}`}
                                            className="w-full border-2 border-[#002147] text-[#002147] font-bold py-2 px-4 rounded hover:bg-[#002147] hover:text-white transition-all duration-300 flex items-center justify-center active:scale-95 text-sm md:text-base"
                                        >
                                            <span className="mr-2">Read Full</span>
                                        </Link>
                                    ) : (
                                        <div className="flex flex-col items-start md:items-end w-full">
                                            <Link href="/subscribe" className="w-full bg-gray-100 text-gray-400 font-bold py-2 px-4 rounded border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-200 hover:text-gray-600 transition text-sm md:text-base">
                                                <span className="mr-2">Locked</span> 
                                            </Link>
                                            <p className="text-xs text-[#d4af37] mt-2 font-medium w-full text-center md:text-right">Premium Access Only</p>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </FadeIn>
                    ))
                ) : (
                    <FadeIn direction="up">
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No cases found matching your criteria.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedYear("All Years");
                                    setSelectedCategory("All Categories");
                                }}
                                className="mt-4 text-[#002147] font-bold hover:underline"
                            >
                                Clear Filters
                            </button>
                        </div>
                    </FadeIn>
                )}
            </div>
        </div>
    );
}
