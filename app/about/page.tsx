// app/about/page.tsx
// ... keep imports ...
import FadeIn from '../components/FadeIn';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-[#002147]">
      
      {/* ... Hero Section (same as before) ... */}

      {/* Mission Section with IMAGE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <FadeIn direction="right">
             {/* ... Mission Text ... */}
             <div>
              <h2 className="text-3xl font-bold text-[#002147] mb-6 relative inline-block">
                Our Mission
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#d4af37] rounded"></span>
              </h2>
              <div className="prose text-gray-600 space-y-6 text-lg leading-relaxed">
                <p>
                  The OAU Law Reports (OAULR) is the official law reporting unit...
                </p>
                {/* ... rest of text ... */}
              </div>
            </div>
          </FadeIn>

          {/* NEW: Image Stack instead of Icon Grid */}
          <div className="mt-12 lg:mt-0 relative">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition duration-500 h-[400px]">
                <Image 
                  src="https://images.unsplash.com/photo-1462206092226-f46025ffe607?q=80&w=874&auto=format&fit=crop" 
                  alt="Law Student" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition duration-500 h-[400px]">
                <Image 
                  src="https://images.unsplash.com/photo-1617203443952-6d2619f7ff4e?q=80&w=870&auto=format&fit=crop" 
                  alt="Law Student" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* ... Editorial Board & Contact (same as before) ... */}

    </div>
  );
}