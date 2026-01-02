const FeaturesSection = () => {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20 pb-0 bg-white">
      <div className="w-full px-6 md:px-8 lg:px-16">
        {/* Main Heading Section */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-3 md:mb-4 leading-[1.1] tracking-tight">
            Comprehensive Payment Solutions
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-[1.6] md:leading-[1.7]">
            Everything you need to manage payments, grow your business, and serve your customers better.
          </p>
        </div>

        {/* Feature 1 */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 md:mb-20">
          <div className="order-1 lg:order-1">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4 leading-[1.2] tracking-tight">
              One Platform, Infinite Possibilities
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-[1.6] md:leading-[1.7] mb-5 md:mb-6">
              Access multiple financial services through one secure platform — recharge, transfer, pay bills, or book travel with ease. Streamline your operations and reduce complexity.
            </p>
            <ul className="space-y-2.5 md:space-y-3">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-4 h-4 mt-0.5 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm md:text-base text-slate-700 font-medium leading-[1.5]">Mobile Recharge & DTH</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-4 h-4 mt-0.5 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm md:text-base text-slate-700 font-medium leading-[1.5]">Bill Payments (BBPS)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-4 h-4 mt-0.5 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm md:text-base text-slate-700 font-medium leading-[1.5]">AEPS & Banking Services</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-4 h-4 mt-0.5 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm md:text-base text-slate-700 font-medium leading-[1.5]">Travel Bookings</span>
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden h-[250px] md:h-[320px] lg:h-[380px] order-2 lg:order-2 flex items-center justify-center bg-slate-50 rounded-lg">
            <img 
              src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767172943/Untitled_1920_x_900_px_800_x_500_px_400_x_300_px_liocg0.svg" 
              alt="Payment Solutions Banner" 
              className="w-full h-full object-contain p-4"
            />
          </div>
        </div>

        {/* Feature 2 - Reversed */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 md:mb-20">
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4 leading-[1.2] tracking-tight">
              Advanced Security & Compliance
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-[1.6] md:leading-[1.7] mb-5 md:mb-6">
              Bank-grade encryption, 2FA, real-time fraud prevention to keep your transactions secure. PCI DSS compliant with regular security audits.
            </p>
            <ul className="space-y-2.5 md:space-y-3">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-4 h-4 mt-0.5 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm md:text-base text-slate-700 font-medium leading-[1.5]">256-bit SSL Encryption</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-4 h-4 mt-0.5 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm md:text-base text-slate-700 font-medium leading-[1.5]">Two-Factor Authentication</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-4 h-4 mt-0.5 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm md:text-base text-slate-700 font-medium leading-[1.5]">Real-time Fraud Detection</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-4 h-4 mt-0.5 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm md:text-base text-slate-700 font-medium leading-[1.5]">PCI DSS Compliant</span>
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden h-[250px] md:h-[320px] lg:h-[380px] order-2 lg:order-1 flex items-center justify-center bg-slate-50 rounded-lg">
            <img 
              src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767178324/Untitled_1920_x_900_px_800_x_500_px_400_x_300_px_1_am1wup.svg" 
              alt="Security & Compliance Banner" 
              className="w-full h-full object-contain p-4"
            />
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-1 lg:order-1">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4 leading-[1.2] tracking-tight">
              Lightning-Fast Transactions
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-[1.6] md:leading-[1.7] mb-5 md:mb-6">
              Near-instant payments and confirmations with 99.9% uptime guarantee. Process transactions in seconds, not minutes.
            </p>
            <ul className="space-y-2.5 md:space-y-3">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-4 h-4 mt-0.5 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm md:text-base text-slate-700 font-medium leading-[1.5]">Instant Payment Processing</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-4 h-4 mt-0.5 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm md:text-base text-slate-700 font-medium leading-[1.5]">99.9% Uptime SLA</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-4 h-4 mt-0.5 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm md:text-base text-slate-700 font-medium leading-[1.5]">Real-time Notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-4 h-4 mt-0.5 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm md:text-base text-slate-700 font-medium leading-[1.5]">24/7 System Monitoring</span>
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden h-[220px] md:h-[280px] lg:h-[340px] order-2 lg:order-2 flex items-center justify-center bg-slate-50 rounded-lg">
            <img 
              src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767252729/1702405223824_sih2lr.gif" 
              alt="Fast Transactions Banner" 
              className="w-full h-full object-contain p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


