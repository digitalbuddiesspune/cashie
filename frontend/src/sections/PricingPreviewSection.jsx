const PricingPreviewSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Simple, fair pricing that grows with your business
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">No Setup Fees</h3>
              <p className="text-slate-600 text-sm">Get started without any upfront costs</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tiered Pricing</h3>
              <p className="text-slate-600 text-sm">Pay only for what you use</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Volume Discounts</h3>
              <p className="text-slate-600 text-sm">Better rates as you grow</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <p className="text-lg text-slate-700 mb-4">
              Want to know more about our pricing?
            </p>
            <a 
              href="/pricing" 
              className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
            >
              View Detailed Pricing →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreviewSection;

