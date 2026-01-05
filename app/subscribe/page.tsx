// app/subscribe/page.tsx
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

const pricingPlans = [
  {
    title: "Undergraduate Student (OAU)",
    price: "₦5,000",
    period: "/month",
    features: ["Full Case Access", "Advanced Search", "Citation Tools"],
    buttonText: "Verify & Subscribe",
    highlight: false
  },
  {
    title: "Undergraduate Student (Other)",
    price: "₦5,000",
    period: "/month",
    features: ["Full Case Access", "Advanced Search", "Citation Tools"],
    buttonText: "Subscribe Now",
    highlight: false
  },
  {
    title: "Law School Student",
    price: "₦5,000",
    period: "/month",
    features: ["Full Case Access", "Advanced Search", "Citation Tools"],
    buttonText: "Subscribe Now",
    highlight: false
  },
  {
    title: "Legal Practitioner",
    price: "₦5,000",
    period: "/month",
    altPrice: "₦60,000 /yearly",
    features: ["Full Case Access", "Advanced Search", "Citation Tools"],
    buttonText: "Subscribe Now",
    highlight: false
  },
  {
    title: "Academic Researcher",
    price: "₦5,000",
    period: "/month",
    altPrice: "₦60,000 /yearly",
    features: ["Full Case Access", "Advanced Search", "Citation Tools"],
    buttonText: "Subscribe Now",
    highlight: false
  },
  {
    title: "Judicial Officer",
    price: "₦5,000",
    period: "/month",
    altPrice: "₦60,000 /yearly",
    features: ["Full Case Access", "Advanced Search", "Citation Tools"],
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
      
      {/* Payment Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <FadeIn direction="up" delay={0.3}>
          <div className="bg-white rounded-2xl shadow-xl border-2 border-[#d4af37] overflow-hidden">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[#002147] to-[#003366] text-white px-6 py-8 text-center">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
                Payment Information
              </h3>
              <p className="text-base md:text-lg text-gray-300">
                Complete your subscription by making payment to the account below
              </p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              
              {/* Bank Account Details */}
              <div className="mb-8">
                <h4 className="text-lg md:text-xl font-bold text-[#002147] mb-6 text-center">
                  Bank Account Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  
                  {/* Account Number */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-center mb-3">
                      <span className="text-3xl">🏦</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 text-center mb-2 font-medium">
                      Account Number
                    </p>
                    <p className="text-xl md:text-2xl font-extrabold text-[#002147] text-center tracking-wide">
                      2047860210
                    </p>
                  </div>

                  {/* Account Name */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-center mb-3">
                      <span className="text-3xl">👤</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 text-center mb-2 font-medium">
                      Account Name
                    </p>
                    <p className="text-lg md:text-xl font-extrabold text-[#002147] text-center">
                      Ife Law Report
                    </p>
                  </div>

                  {/* Bank Name */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-center mb-3">
                      <span className="text-3xl">🏛️</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 text-center mb-2 font-medium">
                      Bank Name
                    </p>
                    <p className="text-lg md:text-xl font-extrabold text-[#002147] text-center">
                      First Bank
                    </p>
                  </div>

                </div>
              </div>

              {/* Divider */}
              <div className="border-t-2 border-gray-200 my-8"></div>

              {/* Contact Information */}
              <div>
                <h4 className="text-lg md:text-xl font-bold text-[#002147] mb-6 text-center">
                  Need Help? Contact Us
                </h4>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  
                  {/* Phone Numbers */}
                  <div className="flex items-center gap-3 bg-[#002147] text-white px-6 py-4 rounded-lg hover:bg-[#003366] transition-colors">
                    <span className="text-2xl">📞</span>
                    <div className="text-left">
                      <p className="text-xs text-gray-300 mb-1">Call Us</p>
                      <p className="text-sm md:text-base font-semibold">+234 805 816 3438</p>
                      <p className="text-sm md:text-base font-semibold">+234 816 353 3315</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3 bg-[#d4af37] text-[#002147] px-6 py-4 rounded-lg hover:bg-[#c49d2f] transition-colors">
                    <span className="text-2xl">📧</span>
                    <div className="text-left">
                      <p className="text-xs opacity-80 mb-1">Email Us</p>
                      <p className="text-sm md:text-base font-semibold">oaulawreports@gmail.com</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Important Note */}
              <div className="mt-8 bg-blue-50 border-l-4 border-[#002147] p-4 md:p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">ℹ️</span>
                  <div>
                    <p className="font-bold text-[#002147] mb-2">Important:</p>
                    <p className="text-sm md:text-base text-gray-700">
                      After making payment, please send proof of payment along with your registration details to our email or WhatsApp for account activation.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>

    </div>
  );
}