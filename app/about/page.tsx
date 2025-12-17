// app/about/page.tsx
import FadeIn from '../components/FadeIn';
import Image from 'next/image';

export default function AboutPage() {
  const pioneeringBoard = [
    "Prof. O.l. Odumosu (Editor-in- Chief)", "A. B. Kasumu", "R.K. Goel", 
    "A. A. O. Okunniga", "D. A. Ijalaye", "S. A. Adesanya", 
    "F. O. B . Babafemi", "D.O. Aihe", "I. O. Agbede", 
    "G. A.Olawoyin", "P. A. Oluyede", "I. Sagay", 
    "S. O. Fashokun", "C. O. Adubi"
  ];

  const pastEditors = [
    "O. I. Odumosu", "J. O. Fabunmi", "M. Olu Adediran", 
    "Abel A. Emiko", "A. A. O. Okunniga", "S. A. Oretuyi", 
    "M.A. Owoade", "A. O. Popoola", "O.M. Adelakun", 
    "O. O. Oladele", "K. O. Fayokun", "O. S. Oyelade", 
    "A. A. Oluwabiyi (Mrs)", "Z. O. Alayinde", "O. S. Fayomi"
  ];

  const fullTimeEditors = [
    "A. O. Adedeji", "C. O. Awoyode", "B. O. Akingbade", 
    "A. O. Ekundayo (Mrs)", "A. A. Ogungbenro", "A. O. Fabunmi (Mrs)", 
    "Ronke E. Ogunti (Miss)", "A. A. Ajibola (Mrs)", "Florence A. Olugunna", 
    "T. A. Babawale", "O . O. Oyebade", "F.O. Rufus (Mrs)", 
    "Janet Oyeyemi (Mrs)", "Adebola Rebecca Adedoyin (Mrs)", "Matthew Igbokwe"
  ];

  return (
    <div className="bg-white min-h-screen text-[#002147]">
      
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-[#002147] flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80"
              alt="Law Library Background"
              fill
              className="object-cover"
              priority
            />
         </div>
         <div className="relative z-10 text-center px-4">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                About Us
              </h1>
              <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded"></div>
            </FadeIn>
         </div>
      </div>

      {/* 1. History & Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Text Content */}
          <FadeIn direction="right">
             <div>
              <h2 className="text-3xl font-bold text-[#002147] mb-6 relative inline-block">
                Introduction & History
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#d4af37] rounded"></span>
              </h2>
              <div className="prose text-gray-600 space-y-6 text-lg leading-relaxed text-justify">
                <p> 
                  The then University of Ife Law Reports (UILR) now Obafemi Awolowo University Law Reports (OAULR) was known throughout the Common Law countries as one of the best reported Law Reports. It is a baby of the Faculty of Law, Obafemi Awolowo University, Ile-Ife.
                </p>
                <p>
                  The Faculty was the first and remains the only one in Nigeria that has such a project. The Law Reports came into existence in 1971. It was seen at the time and up till now, primarily as a research work.
                </p>
                <p>
                  From the early 1970s to 1980s the OAULR was one of the most cited Law Reports in the superior courts in Nigeria. There was regular publication of the Reports which were then printed in Parts from 1971. That era closed with the production of Volume 7 in the early 1980s. From that time until the late 2000s the Reports suffered a setback.
                </p>
                <p>
                  The current era began with the publication of the (2008) OAULR and since then the work has been consistently published.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Image Stack */}
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
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white -rotate-2 hover:rotate-0 transition duration-500 h-[400px] mt-[-200px] ml-12 border-t-0">
                <Image 
                  src="https://images.unsplash.com/photo-1617203443952-6d2619f7ff4e?q=80&w=870&auto=format&fit=crop" 
                  alt="Law Books" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* 2. Testimonials Section */}
      <div className="bg-[#f8f9fa] py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center text-[#002147] mb-12">
                 Testimonials
              </h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 gap-10">
              <FadeIn direction="up" delay={0.1}>
                 <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#d4af37] h-full">
                    <p className="text-lg italic text-gray-700 mb-6">
                      &quot;I have been a fan of your undoubtedly well edited and nicely produced Law Reports which I consider a worthy contribution to knowledge and to the legal profession.&quot;
                    </p>
                    <div className="font-bold text-[#002147]">
                      - Chief R. A. Akinjide
                    </div>
                    <div className="text-sm text-gray-500">
                      One time Attorney General of the Federation
                    </div>
                 </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                 <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#d4af37] h-full">
                    <p className="text-lg italic text-gray-700 mb-6">
                      &quot;After reading through your Law Reports I am convinced that the standard of Reports compares in everything with the Weekly Law Reports published in London. In style, it is modern, in the choice of cases to be reported, it is uniquely selective...&quot;
                    </p>
                    <div className="font-bold text-[#002147]">
                      - Hon. Justice Adewale Thompson
                    </div>
                    <div className="text-sm text-gray-500">
                      The then Western State of Nigeria High Court
                    </div>
                 </div>
              </FadeIn>
            </div>
         </div>
      </div>

      {/* 3. Editorial Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <FadeIn>
            <h2 className="text-3xl font-bold text-[#002147] mb-12 text-center">
              Our Editorial Team
            </h2>
         </FadeIn>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pioneering Board */}
            <FadeIn delay={0.1}>
               <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-4 pb-2 border-b border-gray-100">
                    Pioneering Editorial Board
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    {pioneeringBoard.map((name, i) => (
                      <li key={i}>{name}</li>
                    ))}
                  </ul>
               </div>
            </FadeIn>

            {/* Past Editors */}
            <FadeIn delay={0.2}>
               <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-4 pb-2 border-b border-gray-100">
                    Past Editors-in-Chief
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    {pastEditors.map((name, i) => (
                      <li key={i}>{name}</li>
                    ))}
                  </ul>
               </div>
            </FadeIn>

            {/* Full Time Editors */}
            <FadeIn delay={0.3}>
               <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-4 pb-2 border-b border-gray-100">
                    Full Time Editors
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    {fullTimeEditors.map((name, i) => (
                      <li key={i}>{name}</li>
                    ))}
                  </ul>
               </div>
            </FadeIn>
         </div>
      </div>

    </div>
  );
}