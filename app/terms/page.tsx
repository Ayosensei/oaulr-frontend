// app/terms/page.tsx
'use client';

import FadeIn from '../components/FadeIn';

export default function Terms() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header Banner */}
      <div className="relative bg-[#002147] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2600&auto=format&fit=crop" 
            alt="Legal Documents" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#d4af37]">
              Terms & Conditions
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              OAU Electronic Law Reports
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <FadeIn direction="up" delay={0.2}>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 lg:p-12">
            
            {/* Introduction */}
            <div className="mb-8 md:mb-12">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                You&apos;re most welcome to OAU Electronic Law Reports.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Kindly have a keen perusal of the terms contained herein before making use of this E-OAU Law Reports. Contained herein are pivotal information as it pertains to your legal rights, remedies, obligations; and OAU E-Law Reports (which expression include its privies, sponsors, successors-in-title, assigns and licensees) relationship with you in respect of this E-Law Reports.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                These Terms shall apply to all users of this E-Law Reports regardless of their status.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                By continuing to use this Application, you are agreeing to abide by and be bound by the following terms and conditions of use. Should you at any point in time have any reason to be at variance with the terms and conditions herein stated, we advise that you stop its usage immediately or contact the Editor-in-Chief.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Supplemental Terms of Use, documents, or other information that may be posted on the E-OAU Law Reports from time to time are hereby expressly incorporated herein by reference. We the discretionary right to make changes or modifications to these Terms of Use at any time and for any reason.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                1. INTELLECTUAL PROPERTY RIGHTS
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                <strong>1.1</strong> Subject to the provisions under 1.2 below, E-OAULR owns the proprietary and intellectual property rights in this Application, its content (including all information, data, text, graphics, artwork, sound recording, videos, photographs, logos, icons and so-on) and the Underlying System. All these intellectual property rights are reserved.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                <strong>1.2</strong> Without prejudice to 1.1 above, the Intellectual Property and the accompanying rights in the eBooks, Journals, and State Laws contained in the Textbooks and Journals or State Laws sections of this E-Law Reports belong to the Authors. However, the rights in the annotation of the eBooks and State Laws remain exclusively that of OAU E-Law Reports.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                2. GRANT OF LICENSE
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Subject to the payment of the requisite subscription package, forthwith, you are given a weekly, monthly, quarterly, half-yearly, yearly, (as the case may be) license to this OAU E-Law Reports solely for the purpose for which it is intended. In addition, you are granted the privilege to access the information contained in the OAU E-Law Reports anywhere in the globe.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                <strong>2.1</strong> Your licence shall not be transferred, distributed or otherwise shared with a third party either through computerized software distribution or manually.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                <strong>2.2</strong> Your licence is renewable upon payment of the requisite subscription as may be fixed by OAU E-Law Reports. You agree, in respect to your duration of subscription, that the expiration of your licence terminates your right to use the OAU E-Law Reports until such time when access may be restored through the renewal of your subscription.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                <strong>2.3</strong> Your licence lets you use the main parts of the OAU E-Law Reports. If you want to use extra features that are not included, you are required to pay the relevant access/upgrade fee.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                <strong>2.4</strong> While you may access in-app purchase features like Textbooks and Journals and State Laws and enjoy the free resource (if any) you hereby agree to pay for all rental (where applicable) or in-app purchases made on the OAU E-Law Reports as such are not covered by your subscription fee.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                3. ACCEPTABLE USE OF THE APPLICATION AND CONTENT
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                <strong>3.1</strong> You may view, reference and print pages from the OAU E-Law Reports for your own personal use, subject to the restrictions as may be set out in Clause 4 (Fair usage) and Clause 5 (Unacceptable Use of the Application and Content) of this Terms of Use.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                4. FAIR USAGE
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                <strong>4.1</strong> To ensure the quality of service to all our clients, and to ensure that the behaviour of some does not disadvantage the majority of our clients and users, you agree to be subject to the fair usage limits as contained in this clause.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                <strong>4.2</strong> This fair usage clause applies to your usage of this OAU E-Law Reports, in particular, to the quantity and type of devices from which you can access the OAU E-Law Reports. Consequently, this fair usage clause imposes an upper limit on the number of devices from which you may access the OAU E-Law Reports as follows:
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 ml-6">
                <strong>4.2.1</strong> You may access the OAU E-Law Reports on up to three devices (laptop, mobile and tablet)
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 ml-6">
                <strong>4.2.2</strong> If you desire to switch any of the devices identified with your licence, you will be required to contact support@oaulawreports@gmail.com Such change of devices shall not be more than thrice during the subsistence of your licence.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 ml-6">
                <strong>4.2.3</strong> Should you exceed the permitted number of devices, you may be denied access to the OAU E-Law Reports on the superfluous device(s).
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed ml-6">
                <strong>4.2.4</strong> Without prejudice to Clause 4.2 above, OAU E-Law Reports reserves at its sole discretion to review what constitutes fair Usage of the OAU E-Law Reports from time to time.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                5. UNACCEPTABLE USE OF THE APPLICATION AND CONTENT
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                <strong>5.1</strong> Content of this OAU E-Law Reports must not be:
              </p>
              <ul className="list-none ml-6 mb-4 space-y-2">
                <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>a.</strong> republished in hard copy, e-book format, on another Application or by any means whatsoever except for the purpose of referencing it as a law report;
                </li>
                <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>b.</strong> sold, rented or sub-licensed;
                </li>
                <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>c.</strong> reproduced, duplicated, copied or otherwise exploited for commercial purpose(s);
                </li>
              </ul>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3 font-semibold">
                <strong>5.2 PROHIBITED USES</strong>
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                You must not:
              </p>
              <ul className="list-none ml-6 space-y-3">
                <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>a.</strong> use the OAU E-Law Reports in any manner that is unlawful or that may damage, disable, or impair the E-Law Reports;
                </li>
                <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>b.</strong> introduce or transmit any virus, worm, Trojan horse, time bomb, keystroke logger, spyware, malware, or any other harmful or similar feature that compromises or may compromise the OAU E-Law Reports or any underlying system, or otherwise attempt to interfere with or damage the E-Law Reports or its systems;
                </li>
                <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>c.</strong> use the Application in any manner that could damage, disable, overburden, or impair the system or interfere with any other user&apos;s access to or enjoyment of the Application;
                </li>
                <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>d.</strong> access or attempt to access the OAU E-Law Reports through any means other than standard web browsers. Prohibited methods include, but are not limited to, scraping, deep-linking, data harvesting, data mining, use of robots, spiders, automation tools, or any similar data-gathering, extraction, or monitoring methods;
                </li>
                <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>e.</strong> attempt to gain unauthorized access to any reports, data, services, accounts, computer systems, or networks connected with the Application;
                </li>
                <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>f.</strong> use the OAU E-Law Reports in violation of any applicable laws, regulations, or legal requirements; or
                </li>
                <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>g.</strong> use the OAU E-Law Reports to cause harm, injury, or loss to any person or business entity. in any manner that could damage, disable, overburden, or impair the system or interfere with any other user&apos;s access to or enjoyment of the E-Law Reports;
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                6. REGISTRATION, PASSWORD AND SECURITY PROCEDURES
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                <strong>6.1</strong> You must provide accurate, current and complete information in your dealings with us especially when setting up an account and must promptly update that information as required so that the information remains accurate, current and complete at all times.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                <strong>6.2</strong> Certain areas of this E-Law Reports are restricted to logged in users and permitted persons only. If you log in with a user ID and password to enable you to access restricted areas of this Application or other content or services, such user ID and password are confidential and must be treated as such. Consequently, you must:
              </p>
              <ul className="list-none ml-6 mb-4 space-y-2">
                <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>a.</strong> keep same secure and confidential.
                </li>
                <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>b.</strong> immediately notify us if you become aware of any disclosure or unauthorized use of your User ID by sending an email to support@lawpavilion.com.
                </li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                <strong>6.3</strong> Where you access or use the E-Law Reports on behalf of another person or entity (including a company), you represent and warrant that you are duly authorized to agree to these Terms on behalf of that person or entity. By agreeing to these Terms on their behalf, such person or entity shall be legally bound by these Terms.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                7. NO WARRANTIES
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                The information on this E-Law Reports is provided on an &quot;as is&quot; basis. There is therefore no representation or warranty, of any kind related to this E-Law Reports or the materials contained on this Application. Also, nothing contained on this Application shall be interpreted as advising you.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                8. LIMITATION OF LIABILITY
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                <strong>8.1</strong> To the extent permitted by law, we and our licensees, officers, directors and employees have no liability or responsibility to you or any other person for any loss as a result of:
              </p>
              <ul className="list-none ml-6 space-y-3">
                <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>a.</strong> any exposure to viruses or other forms of interference which may damage your computer system or expose you to fraud when you access or use the E-Law Reports. To avoid doubt, you are responsible for ensuring the process by which you access and use the E-Law Reports protects you from this;
                </li>
                <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>b.</strong> any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.
                </li>
                <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>c.</strong> We make no representation or warranty that the E-Law Reports is appropriate or available for use in all countries or that the content satisfies the laws of all countries. You are responsible for ensuring that your access to and use of the E-Law Reports is not illegal or prohibited, and for your own compliance with applicable local laws.
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                9. CHANGES
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms from time to time by updating them on the OAU E-Law Reports. Except as otherwise stated, any change takes effect immediately. If there are any significant changes, we will notify you of these changes within the E-Law Reports.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                What constitutes a significant change will be determined at our sole discretion. You are therefore responsible for ensuring you are familiar with the latest Terms. By continuing to access and use the E-Law Reports, you agree to be bound by the changed Terms.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                10. ASSIGNMENT
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                OAU E-Law Reports reserves the right to assign, transfer, and subcontract its rights and/or obligations under these Terms as it deems fit and without your prior notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                11. FORCE MAJEURE
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                OAU E-Law Reports shall not be liable to you for any failure to perform under this Terms where such failure is due to an event which could not have been reasonably foreseen or beyond our control including but not limited to any act of God, terrorism, war, epidemic, pandemic, political insurgence, insurrection, riot, civil unrest, act of civil or military authority, uprising, earthquake, flood or any other natural or manmade eventuality outside of our control, which causes the termination of this Terms.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                12. ENTIRE AGREEMENT
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                These Terms constitute the entire agreement between you and OAU E-Law Reports in relation to your use of this E-Law Reports, and supersede all prior agreements and understandings.
              </p>
            </section>

            {/* Section 13 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                13. DISPUTE RESOLUTION
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                In the event of any dispute, difference or claim (&quot;Dispute&quot;) arising whether directly or indirectly from this Terms, Parties shall first attempt in good faith to resolve the Dispute through direct negotiation between senior representatives of each party for at least thirty (30) days.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                <strong>13.1</strong> If the Dispute is not settled amicably within the period stated above, the Dispute shall be referred for Mediation which shall be conducted in accordance with the Arbitration and Mediation Act, 2023 or such other rules mutually agreed by the Parties.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                <strong>13.2</strong> Each Party shall bear its own costs and would be liable to contribute the equal amount in respect of fees to be paid to the Mediator/ Arbitrator.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Clause 13.1 shall not preclude a Party from making an application to the Court for Injunctive Relief.
              </p>
            </section>

            {/* Section 14 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                14. GOVERNING LAW
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                This Terms of Use shall be governed by and construed in accordance with the Laws of the Federal Republic of Nigeria, without reference to principles of conflict of laws; and parties shall submit to the jurisdiction of the Nigerian Courts.
              </p>
            </section>

            {/* Section 15 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                15. ENFORCEABILITY
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                The invalidity or unenforceability of any provision of this Terms of Use shall not affect the validity or enforceability of its other provisions.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                The failure of OAU E-Law Reports at any time to enforce your performance of any provisions of this Agreement shall in no way affect its to enforce the same subsequently nor constitute a waiver, nor shall the waiver by OAU E-Law Reports of any breach of any provision hereof be held to be a waiver of any other breach of the same or any other provision.
              </p>
            </section>

            {/* Section 16 */}
            <section className="mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-4">
                16. INDEMNITY
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                You hereby agree to hold OAU E-Law Reports free and harmless from any and all claims, damages, and expenses of every kind or nature whatsoever arising in any way related to your breach of any of the provisions of these Terms.
              </p>
            </section>

            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t-2 border-gray-200">
              <h3 className="text-xl md:text-2xl font-bold text-[#002147] mb-4 text-center">
                Connect with us via
              </h3>
              <div className="text-center space-y-2">
                <p className="text-base md:text-lg text-gray-700">
                  <strong>Phone:</strong> +234 805 816 3438 or +234 816 353 3315
                </p>
                <p className="text-base md:text-lg text-gray-700">
                  <strong>Email:</strong> oaulawreports@gmail.com
                </p>
              </div>
              <p className="text-center text-sm text-gray-500 mt-6">
                © 2026 OAU E-LAW REPORTS
              </p>
            </div>

          </div>
        </FadeIn>
      </div>
    </div>
  );
}