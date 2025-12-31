const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create your account in minutes. Complete KYC verification for instant activation.',
    },
    {
      number: '02',
      title: 'Get Started',
      description: 'Access your dashboard and explore all available payment services and features.',
    },
    {
      number: '03',
      title: 'Start Processing',
      description: 'Begin accepting payments, processing transactions, and serving your customers.',
    },
    {
      number: '04',
      title: 'Grow Your Business',
      description: 'Scale effortlessly with our platform and dedicated support team by your side.',
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              Get started in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="text-6xl font-bold text-indigo-100 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-slate-200 transform translate-x-4">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-indigo-600 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

