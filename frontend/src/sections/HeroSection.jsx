import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
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
            
            {/* CTA Button */}
            <Link to="/signup">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 mb-12">
                Create Account
              </button>
            </Link>

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

          {/* Right Section - Person with UI Elements */}
          <div className="relative hidden lg:block h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Person Image - Above the line - Moved Left */}
                <div className="absolute right-8 bottom-0 flex items-end justify-center z-10">
                  <div className="relative">
                    <img 
                      src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767164364/unnamed_z1xoxx.jpg" 
                      alt="Woman with credit card and smartphone" 
                      className="w-80 h-96 object-contain object-bottom"
                      style={{ maxHeight: '600px' }}
                    />
                  </div>
                </div>

                {/* Curved Line Graph - Behind person image at bottom */}
                <div className="absolute bottom-20 left-0 right-0 h-32 opacity-60 z-0">
                  <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EF4444" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 80 Q 100 40, 200 60 T 400 50"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      fill="none"
                    />
                    {/* Data points */}
                    <circle cx="50" cy="75" r="6" fill="#3B82F6" />
                    <circle cx="200" cy="60" r="6" fill="#EF4444" />
                    <circle cx="350" cy="50" r="6" fill="#10B981" />
                  </svg>
                </div>

                {/* Mobile App Screen 1 - Below left hand - Moved Down Further */}
                <div className="absolute left-8 bottom-4 w-48 bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-20">
                  <div className="mb-3">
                    <div className="relative w-32 h-32 mx-auto">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="8" />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="8"
                          strokeDasharray={`${2 * Math.PI * 45 * 0.82} ${2 * Math.PI * 45}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-slate-900">82%</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-900">892</p>
                    <p className="text-sm text-slate-600">58 days</p>
                  </div>
                </div>

                {/* Mobile App Screen 2 - Top Right - Moved Left */}
                <div className="absolute top-8 right-8 w-52 bg-white rounded-xl shadow-xl border border-slate-200 p-5 z-20">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1 text-center">Make progress</h3>
                  <p className="text-sm text-slate-600 text-center mb-4">with tracking plan</p>
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition-colors">
                    Buy plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
