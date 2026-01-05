// app/privacy/page.tsx
'use client';

import FadeIn from '../components/FadeIn';

export default function Privacy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header Banner */}
      <div className="relative bg-[#002147] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2600&auto=format&fit=crop" 
            alt="Privacy and Security" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#d4af37]">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              OAU Electronic Law Reports - Committed to protecting your privacy
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <FadeIn direction="up" delay={0.2}>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 lg:p-12">
            
            {/* Introduction Banner */}
            <div className="bg-gradient-to-r from-[#002147] to-[#003366] text-white rounded-xl p-6 md:p-8 mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Your Privacy Matters
              </h2>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                We are committed to safeguarding your personal data in compliance with the Nigeria Data Protection Act, 2023 (NDPA).
              </p>
            </div>

            {/* Section 1.1 */}
            <section className="mb-8 md:mb-10">
              <h3 className="text-xl md:text-2xl font-bold text-[#002147] mb-4 flex items-start">
                <span className="text-[#d4af37] mr-3">1.1</span>
                <span>Data Collection and Processing</span>
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                In the course of using the OAU E-Law Reports, we may collect and process certain personal data, particularly where you register for an account or otherwise interact with the platform. You undertake to provide personal data that is accurate, complete, and up to date, and you agree to comply with all applicable policies and procedures relating to data access, privacy, and security. You shall not submit false, misleading, or inaccurate information.
              </p>
            </section>

            {/* Section 1.2 */}
            <section className="mb-8 md:mb-10">
              <h3 className="text-xl md:text-2xl font-bold text-[#002147] mb-4 flex items-start">
                <span className="text-[#d4af37] mr-3">1.2</span>
                <span>Lawful Use of Personal Data</span>
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Personal data collected is processed in accordance with the <strong>Nigeria Data Protection Act, 2023 (NDPA)</strong> and is used solely for legitimate purposes, including:
              </p>
              <ul className="list-disc list-inside ml-4 md:ml-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>Communicating with you</li>
                <li>Providing and improving services</li>
                <li>Conducting statistical analysis</li>
                <li>Evaluating service delivery</li>
                <li>Carrying out credit checks where applicable and lawful</li>
                <li>Research and development</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                Such personal data shall <strong>not be sold, traded, or otherwise disclosed to third parties</strong> for their independent use, except where required by law, permitted under the NDPA, or with your consent.
              </p>
            </section>

            {/* Section 1.3 */}
            <section className="mb-8 md:mb-10">
              <h3 className="text-xl md:text-2xl font-bold text-[#002147] mb-4 flex items-start">
                <span className="text-[#d4af37] mr-3">1.3</span>
                <span>Data Security and Protection</span>
              </h3>
              <div className="bg-blue-50 border-l-4 border-[#002147] p-4 md:p-6 rounded-r-lg">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We are committed to safeguarding your personal data and, in compliance with the <strong>NDPA 2023</strong>, we implement appropriate technical and organizational measures to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
                </p>
              </div>
            </section>

            {/* Section 1.4 */}
            <section className="mb-8 md:mb-10">
              <h3 className="text-xl md:text-2xl font-bold text-[#002147] mb-4 flex items-start">
                <span className="text-[#d4af37] mr-3">1.4</span>
                <span>Technical and Usage Information (Log Data)</span>
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                We may also collect technical and usage information (&quot;Log Data&quot;) when you access or use the OAU E-Law Reports. This may include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm md:text-base text-gray-700">
                    <strong>•</strong> Internet Protocol (IP) address
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm md:text-base text-gray-700">
                    <strong>•</strong> Browser type and version
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm md:text-base text-gray-700">
                    <strong>•</strong> Device information
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm md:text-base text-gray-700">
                    <strong>•</strong> Pages or features accessed
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm md:text-base text-gray-700">
                    <strong>•</strong> Date and time of access
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm md:text-base text-gray-700">
                    <strong>•</strong> Duration of use
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Such data may be collected through cookies or similar technologies and is processed for purposes including system administration, security, analytics, and improvement of the OAU E-Law Reports, in accordance with the <strong>NDPA 2023</strong>.
              </p>
            </section>

            {/* Compliance Badge */}
            <div className="mt-10 md:mt-12 pt-8 border-t-2 border-gray-200">
              <div className="bg-gradient-to-br from-[#002147] to-[#003366] text-white rounded-xl p-6 md:p-8 text-center">
                <div className="inline-block bg-[#d4af37] text-[#002147] px-4 md:px-6 py-2 rounded-full font-bold text-sm md:text-base mb-4">
                  NDPA 2023 COMPLIANT
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Nigeria Data Protection Act, 2023
                </h3>
                <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto">
                  All personal data processing activities are conducted in full compliance with the Nigeria Data Protection Act, 2023, ensuring your rights and privacy are protected.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                © 2026 OAU E-LAW REPORTS
              </p>
            </div>

          </div>
        </FadeIn>
      </div>
    </div>
  );
}