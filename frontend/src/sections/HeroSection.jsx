import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-20 bg-white overflow-hidden">
      {/* Laptop/Desktop View - Banner Image */}
      <div className="hidden lg:block w-full">
        <img 
          src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767178672/Artboard_1_4x-100_onhuoy.jpg" 
          alt="Hero Banner" 
          className="w-full h-auto object-cover"
        />
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
      </div>
    </section>
  );
};

export default HeroSection;
