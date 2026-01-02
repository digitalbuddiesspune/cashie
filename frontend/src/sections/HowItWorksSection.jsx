const HowItWorksSection = () => {
  const steps = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      number: '01',
      title: 'Sign Up',
      description: 'Create your account in minutes. Complete KYC verification for instant activation.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      number: '02',
      title: 'Get Started',
      description: 'Access your dashboard and explore all available payment services and features.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      number: '03',
      title: 'Start Processing',
      description: 'Begin accepting payments, processing transactions, and serving your customers.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      number: '04',
      title: 'Grow Your Business',
      description: 'Scale effortlessly with our platform and dedicated support team by your side.',
      color: 'from-pink-500 to-red-500',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-indigo-50/20 to-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100/10 rounded-full blur-3xl -ml-48 -mt-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/10 rounded-full blur-3xl -mr-48 -mb-48"></div>
      
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block px-4 py-2 bg-indigo-100 rounded-full text-sm font-semibold text-indigo-700 mb-4">
              ⚡ Quick Setup
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              How It Works
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Get started in four simple steps. From signup to processing payments, we've made it effortless.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="relative">
            {/* Connecting Line - Desktop Only */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-indigo-200 via-purple-200 to-pink-200">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 to-pink-500 transform -translate-y-1/2 animate-pulse"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl border border-slate-200 hover:border-indigo-300 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      {/* Number Badge */}
                      <div className="flex items-center justify-between mb-4 md:mb-6">
                        <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${step.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {step.icon}
                        </div>
                        <div className="text-4xl md:text-5xl font-bold text-slate-100 group-hover:text-slate-200 transition-colors">
                          {step.number}
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 leading-tight">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Connector - Desktop Only */}
                  {index < steps.length - 1 && (
                    <>
                      {/* Mobile Arrow - Bottom */}
                      <div className="lg:hidden flex justify-center my-4">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Desktop Arrow - Right */}
                      <div className="hidden lg:block absolute top-24 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg animate-pulse`}>
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

