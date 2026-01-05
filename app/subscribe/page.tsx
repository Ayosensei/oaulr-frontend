// app/subscribe/page.tsx
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

const pricingPlans = [
  {
    title: "Undergraduate Student (OAU)",
    price: "₦2,000",
    period: "/month",
    features: ["Access to OAU Law Reports", "Basic Search", "Mobile Access"],
    buttonText: "Verify & Subscribe",
    highlight: false
  },
  {
    title: "Undergraduate Student (Other)",
    price: "₦2,000",
    period: "/month",
    features: ["Access to OAU Law Reports", "Basic Search", "Mobile Access"],
    buttonText: "Subscribe Now",
    highlight: false
  },
  {
    title: "Law School Student",
    price: "₦3,000",
    period: "/month",
    features: ["Full Case Access", "Advanced Search", "Citation Tools"],
    buttonText: "Subscribe Now",
    highlight: false
  },
  {
    title: "Legal Practitioner",
    price: "₦20,000",
    period: "/6 months",
    altPrice: "₦40,000 /yearly",
    features: ["Full Commercial License", "Priority Support", "Multiple Device Login", "Offline Access"],
    buttonText: "Subscribe Now",
    highlight: false
  },
  {
    title: "Academic Researcher",
    price: "₦20,000",
    period: "/6 months",
    altPrice: "₦40,000 /yearly",
    features: ["Archive Access", "Citation Export", "Research Tools", "Priority Support"],
    buttonText: "Subscribe Now",
    highlight: false
  },
  {
    title: "Judicial Officer",
    price: "₦25,000",
    period: "/6 months",
    altPrice: "₦50,000 /yearly",
    features: ["Premium Access", "All Features Included", "Dedicated Support", "Institutional Login"],
    buttonText: "Subscribe Now",
    highlight: false
  }
];

export default function SubscribePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header Banner with Image Background */}
      <div className="relative bg-[#002147] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2600&auto=format&fit=crop" 
            alt="Legal Contracts" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down">
            <h2 className="text-4xl font-extrabold sm:text-5xl text-[#d4af37]">
              Choose Your Access Plan
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Support the Faculty of Law and gain access to decades of legal precedence.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {pricingPlans.map((plan, index) => (
            <FadeIn key={plan.title} delay={0.1 * index} direction="up" className="h-full">
              <div 
                className={`bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col relative ${
                  plan.highlight ? 'border-[#d4af37] ring-1 ring-[#d4af37]/20 shadow-xl' : 'border-gray-200'
                }`}
              >
                 {plan.highlight && (
                  <div className="absolute top-0 inset-x-0 bg-[#d4af37] text-[#002147] text-xs font-bold px-3 py-1.5 uppercase text-center tracking-wide z-10">
                    Recommended
                  </div>
                )}
                
                <div className={`px-6 py-8 flex-grow flex flex-col ${plan.highlight ? 'mt-2' : ''}`}>
                  <h3 className="text-xl font-bold text-[#002147] text-center mb-2 min-h-[56px] flex items-center justify-center">
                    {plan.title}
                  </h3>
                  
                  <div className="mt-4 text-center">
                    <div className="flex justify-center items-baseline">
                      <span className="text-4xl font-extrabold text-[#002147]">{plan.price}</span>
                      <span className="ml-1 text-sm text-gray-500">{plan.period}</span>
                    </div>
                    {plan.altPrice && (
                      <div className="mt-2 text-sm font-semibold text-[#d4af37]">
                        OR {plan.altPrice}
                      </div>
                    )}
                  </div>

                   <ul className="mt-8 space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <span className="text-[#d4af37] mr-2 flex-shrink-0">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/register" 
                    className={`block w-full text-center font-bold py-3 rounded-lg transition active:scale-95 ${
                      plan.highlight 
                        ? 'bg-[#002147] text-white hover:bg-[#003366]' 
                        : 'bg-white border-2 border-[#002147] text-[#002147] hover:bg-gray-50'
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}

        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-4xl font-extrabold text-[#002147] p-10"> Unit Account Number: 2047860210 <br/> Account Name: Ife Law Report <br/> Bank: First Bank <br/>Contact Number(s): +234 805 816 3438, +234 816 353 3315</p>
      </div>
    </div>
  );
}