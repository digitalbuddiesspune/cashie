const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Cashie made managing my retail store much easier. The AEPS and recharge services are instant, reliable, and easy to use! The platform has significantly improved our transaction efficiency.",
      name: "Ravi Kumar",
      role: "Retail Partner",
      location: "Uttar Pradesh",
      initials: "RK"
    },
    {
      quote: "Excellent support team and fast payments — Cashie helped us scale our business! The seamless integration and 24/7 support make it our preferred payment partner.",
      name: "Maya Traders",
      role: "Business Owner",
      location: "Delhi",
      initials: "MT"
    },
    {
      quote: "Fast settlements and transparent pricing - exactly what we needed for our growing business. Cashie's platform is intuitive and the customer service is outstanding.",
      name: "Rajesh Patel",
      role: "Retail Partner",
      location: "Gujarat",
      initials: "RP"
    },
    {
      quote: "The seamless integration and 24/7 support make Cashie our preferred payment partner. We've seen a 40% increase in transaction volume since switching.",
      name: "Priya Sharma",
      role: "Store Manager",
      location: "Mumbai",
      initials: "PS"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="w-full px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Partners Say
          </h2>
          <p className="text-xl text-slate-600">
            Trusted by businesses across India
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-slate-200">
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                  <span className="text-slate-700 font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


