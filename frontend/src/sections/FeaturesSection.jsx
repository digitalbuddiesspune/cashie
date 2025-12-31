const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Comprehensive Payment Solutions
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage payments, grow your business, and serve your customers better.
          </p>
        </div>

        {/* Feature 1 */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              One Platform, Infinite Possibilities
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Access multiple financial services through one secure platform — recharge, transfer, pay bills, or book travel with ease. Streamline your operations and reduce complexity.
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 mt-1">✓</span>
                <span>Mobile Recharge & DTH</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 mt-1">✓</span>
                <span>Bill Payments (BBPS)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 mt-1">✓</span>
                <span>AEPS & Banking Services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 mt-1">✓</span>
                <span>Travel Bookings</span>
              </li>
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
            <img 
              src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767172943/Untitled_1920_x_900_px_800_x_500_px_400_x_300_px_liocg0.svg" 
              alt="Payment Solutions Banner" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Feature 2 - Reversed */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="lg:order-2">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Advanced Security & Compliance
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Bank-grade encryption, 2FA, real-time fraud prevention to keep your transactions secure. PCI DSS compliant with regular security audits.
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 mt-1">✓</span>
                <span>256-bit SSL Encryption</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 mt-1">✓</span>
                <span>Two-Factor Authentication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 mt-1">✓</span>
                <span>Real-time Fraud Detection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 mt-1">✓</span>
                <span>PCI DSS Compliant</span>
              </li>
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] lg:order-1">
            <img 
              src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767172943/Untitled_1920_x_900_px_800_x_500_px_400_x_300_px_liocg0.svg" 
              alt="Security & Compliance Banner" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Lightning-Fast Transactions
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Near-instant payments and confirmations with 99.9% uptime guarantee. Process transactions in seconds, not minutes.
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 mt-1">✓</span>
                <span>Instant Payment Processing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 mt-1">✓</span>
                <span>99.9% Uptime SLA</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 mt-1">✓</span>
                <span>Real-time Notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 mt-1">✓</span>
                <span>24/7 System Monitoring</span>
              </li>
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
            <img 
              src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767172943/Untitled_1920_x_900_px_800_x_500_px_400_x_300_px_liocg0.svg" 
              alt="Fast Transactions Banner" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


