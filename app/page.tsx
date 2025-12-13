import Link from 'next/link';
import FadeIn from './components/FadeIn';
import Carousel from './components/Carousel'; // Import the slider
import { reports } from './api/data/reports'
const recentCases = reports.slice(0, 3);

export default function Home() {
  return (
    <div>
      {/* Hero Section - NOW WITH CAROUSEL */}
      <section className="bg-[#ffffff] text-white relative">
        <Carousel />

      </section>

      {/* Recently Uploaded Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <FadeIn direction="right">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147]">Recently Uploaded</h2>
              <p className="text-gray-500 mt-1">The latest judgments added to the repository.</p>
            </FadeIn>
            <FadeIn direction="left">
              <Link href="/reports" className="text-[#d4af37] font-bold hover:underline flex items-center hover:translate-x-1 transition-transform">
                View All Cases &rarr;
              </Link>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {recentCases.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.1} direction="up" className="h-full">
                <Link href={`/reports/${item.id}`} className="block h-full">
                  <div className="group h-full bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-xl hover:border-[#002147] transition-all duration-300 cursor-pointer hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-blue-50 text-[#002147] text-xs font-bold px-2 py-1 rounded uppercase">
                        {item.category}
                      </span>
                      <span className="text-gray-400 text-sm">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#002147] group-hover:text-[#d4af37] transition mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                      {item.summary}
                    </p>
                    <span className="text-sm font-bold text-[#002147] flex items-center group-hover:text-[#d4af37] transition">
                      Read Headnote <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Image + CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Image */}
          <FadeIn direction="right">
            <div className="relative h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?q=80&w=2600&auto=format&fit=crop"
                alt="Law Library"
                className="object-cover w-full h-full transform hover:scale-105 transition duration-700"
              />
            </div>
          </FadeIn>

          {/* Right: Content */}
          <div>
            <FadeIn direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-6">Why Subscribe to OAULR?</h2>
            </FadeIn>

            <div className="space-y-6">
              {[
                { icon: "📚", title: "Full Case Access", desc: "Read complete PDFs of judgments and rulings." },
                { icon: "🔍", title: "Advanced Search", desc: "Filter by Coram, Date, and Subject Matter." },
                { icon: "🏛️", title: "Academic Integrity", desc: "Verified reports directly from the Faculty of Law." }
              ].map((feature, idx) => (
                <FadeIn key={idx} delay={idx * 0.2} direction="up">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-xl md:text-2xl border border-gray-100">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-[#002147]">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}