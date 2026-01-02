import { useState } from 'react';

const PaymentOptionsSection = () => {
  const [activeTab, setActiveTab] = useState('UPI');

  const tabs = ['UPI', 'Cards', 'BHPL Suite', 'Global Collections'];

  const tabContent = {
    UPI: {
      heading: 'UPI',
      description: "Stay ahead of the UPI revolution by achieving 20% higher success rates with Cashie's 60+ direct bank integrations.",
      features: [
        "Flash UPI: Provide 5 times faster checkout. No need for UPI apps - no redirection required.",
        "UPI Intent: Deliver a 10-second purchase experience by seamlessly opening the UPI app on customer's mobile phone.",
        "Credit Card on UPI: Enable easy access to credit with just the customer's UPI PIN (Available for RuPay credit cards only)."
      ],
      image: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767252729/1702405223824_sih2lr.gif"
    },
    Cards: {
      heading: 'Cards',
      description: "Accept all major credit and debit cards with seamless integration and high success rates.",
      features: [
        "Support for all major card networks including Visa, Mastercard, RuPay, and Amex.",
        "One-click checkout for returning customers with secure tokenization.",
        "Advanced fraud detection and 3D Secure authentication for enhanced security."
      ],
      image: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767172943/Untitled_1920_x_900_px_800_x_500_px_400_x_300_px_liocg0.svg"
    },
    'BHPL Suite': {
      heading: 'BHPL Suite',
      description: "Comprehensive banking and payment solutions for businesses of all sizes.",
      features: [
        "Multi-bank account management and reconciliation.",
        "Automated payment processing and settlement.",
        "Real-time transaction monitoring and reporting."
      ],
      image: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767178324/Untitled_1920_x_900_px_800_x_500_px_400_x_300_px_1_am1wup.svg"
    },
    'Global Collections': {
      heading: 'Global Collections',
      description: "Accept payments from customers worldwide with multi-currency support.",
      features: [
        "Support for 100+ currencies and international payment methods.",
        "Seamless cross-border transactions with competitive exchange rates.",
        "Compliance with international payment standards and regulations."
      ],
      image: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767172943/Untitled_1920_x_900_px_800_x_500_px_400_x_300_px_liocg0.svg"
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <section className="pt-12 md:pt-16 lg:pt-20 pb-0 bg-white">
      <div className="w-full px-6 md:px-8 lg:px-16">
        {/* Main Heading Section */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4 leading-[1.1] tracking-tight">
            Unmatched checkout experience that drives business growth.
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-semibold text-xs md:text-sm transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-1 lg:order-1">
            <div className="relative overflow-hidden h-[250px] md:h-[320px] lg:h-[400px] flex items-center justify-center">
              <img
                src={currentContent.image}
                alt={`${currentContent.heading} Payment Interface`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-2 lg:order-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4 leading-[1.2] tracking-tight">
              {currentContent.heading}
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-[1.6] md:leading-[1.7] mb-5 md:mb-6">
              {currentContent.description}
            </p>

            {/* Features List */}
            <ul className="space-y-2.5 md:space-y-3 mb-5 md:mb-6">
              {currentContent.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-4 h-4 mt-0.5 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-slate-700 font-medium leading-[1.5]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Learn More Button */}
            <button className="px-5 py-2.5 md:px-6 md:py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-200 text-xs md:text-sm mb-5 md:mb-6">
              Learn More →
            </button>

            {/* Payment Platform Logos */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <div className="text-xs text-slate-500 font-medium">Supported by:</div>
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <div className="bg-slate-100 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-slate-700 font-semibold text-xs">PhonePe</div>
                <div className="bg-slate-100 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-slate-700 font-semibold text-xs">Paytm</div>
                <div className="bg-slate-100 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-slate-700 font-semibold text-xs">Google Pay</div>
                <div className="bg-slate-100 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-slate-700 font-semibold text-xs">Amazon Pay</div>
                <div className="bg-slate-100 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-slate-700 font-semibold text-xs">UPI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptionsSection;

