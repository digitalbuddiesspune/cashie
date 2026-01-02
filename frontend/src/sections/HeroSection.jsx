import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-20 bg-white overflow-hidden">
      {/* Desktop View - Left Text and Right Banner */}
      <div className="hidden lg:block w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-16">
            {/* Main Headline - Same Line */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 leading-tight mb-4 md:mb-5">
              Experience the future of <span className="text-indigo-600">digital payments</span>
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-5 md:mb-6 leading-relaxed">
              Transform your business with cutting-edge financial technology. Seamless transactions, secure payments, and powerful tools to accelerate your growth.
            </p>

            {/* Two Info Cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Green Card */}
              <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">Instant Settlements</p>
                  <p className="text-xs sm:text-sm text-slate-600">₹110 minimum</p>
                </div>
              </div>

              {/* Orange Card */}
              <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">Fast Processing</p>
                  <p className="text-xs sm:text-sm text-slate-600">₹100 minimum</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Banner Image */}
          <div className="lg:pr-0">
            <div className="relative overflow-hidden w-full">
              <img 
                src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767358209/Artboard_1_4x-1000_abujqq.jpg" 
                alt="Hero Banner" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Left Content (kept as is) */}
      <div className="lg:hidden w-full px-8">
        <div className="relative z-10">
          {/* Main Headline - Two Lines */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Experience the future of
            <span className="block text-indigo-600">digital payments</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
            Transform your business with cutting-edge financial technology. Seamless transactions, secure payments, and powerful tools to accelerate your growth.
          </p>

          {/* Two Info Cards at Bottom */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {/* Green Card */}
            <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">Instant Settlements</p>
                <p className="text-xs text-slate-600">₹110 minimum</p>
              </div>
            </div>

            {/* Orange Card */}
            <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">Fast Processing</p>
                <p className="text-xs text-slate-600">₹100 minimum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
