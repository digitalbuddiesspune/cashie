const SecuritySection = () => {
  const features = [
    {
      number: "01",
      title: "Bank-Grade Encryption",
      description: "256-bit SSL encryption ensures all data transmission is secure and protected."
    },
    {
      number: "02",
      title: "PCI DSS Compliant",
      description: "Certified compliance with Payment Card Industry Data Security Standards."
    },
    {
      number: "03",
      title: "Fraud Prevention",
      description: "Real-time monitoring and AI-powered fraud detection to prevent unauthorized transactions."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight max-w-4xl">
            Your Security is Our Priority
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Enterprise-grade security measures to protect your business and customers
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="relative">
          {/* Top horizontal line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-black"></div>
          
          {/* Grid with borders */}
          <div className="grid md:grid-cols-3 relative">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative py-8 px-6 md:px-8"
              >
                {/* Vertical divider - not on last column */}
                {index < features.length - 1 && (
                  <div className="absolute top-0 bottom-0 right-0 w-px bg-black"></div>
                )}
                
                {/* Number */}
                <div className="text-6xl md:text-7xl font-bold text-black leading-none mb-4">
                  {feature.number}
                </div>
                
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-black mb-3 leading-tight">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-16 pt-8 border-t border-black">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">
                Regular Security Audits
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                We conduct regular security audits and penetration testing to identify and fix vulnerabilities before they become threats.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">
                Data Privacy
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Your data is encrypted at rest and in transit. We follow strict data privacy policies and never share your information with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
