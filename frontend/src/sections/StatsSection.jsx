const StatsSection = () => {
  const stats = [
    {
      value: "₹2.5Cr+",
      label: "Monthly Transaction Volume",
      color: "#FF1493" // Vibrant Pink/Fuchsia
    },
    {
      value: "50,000+",
      label: "Daily Transactions",
      color: "#4169E1" // Royal Blue
    },
    {
      value: "2,500+",
      label: "Active Retail Partners",
      color: "#20B2AA" // Teal/Blue-Green
    },
    {
      value: "99.97%",
      label: "System Uptime",
      color: "#FF6600" // Bright Orange
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="w-full px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Trusted by Businesses Across India
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Numbers that speak for our reliability and growth
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-none"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="text-base md:text-lg text-slate-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;


