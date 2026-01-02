import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [roiData, setRoiData] = useState({
    monthlyVolume: 1000000,
    commissionRate: 0.5,
    months: 12
  });
  const [activePartnerType, setActivePartnerType] = useState('Payment Aggregator');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      title: 'Revenue Sharing',
      desc: 'Earn competitive commissions on every transaction',
      icon: '💰'
    },
    {
      title: 'Marketing Support',
      desc: 'Co-marketing opportunities and materials',
      icon: '📢'
    },
    {
      title: 'Technical Support',
      desc: 'Dedicated technical support team',
      icon: '🔧'
    },
    {
      title: 'Training & Resources',
      desc: 'Comprehensive training and documentation',
      icon: '📚'
    },
    {
      title: 'Priority Support',
      desc: '24/7 priority support for partners',
      icon: '⭐'
    },
    {
      title: 'Growth Opportunities',
      desc: 'Scale your business with our platform',
      icon: '📈'
    }
  ];

  const partnerTypes = [
    {
      type: 'Payment Aggregator',
      desc: 'Integrate Cashie into your payment platform'
    },
    {
      type: 'Technology Partner',
      desc: 'Build solutions using our APIs'
    },
    {
      type: 'Reseller',
      desc: 'Resell Cashie services to your customers'
    },
    {
      type: 'Referral Partner',
      desc: 'Refer customers and earn commissions'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-500 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-white text-center lg:text-left">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                  🤝 Partnership Program
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Partner with Cashie
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-orange-50 mb-6 sm:mb-8 leading-relaxed">
                  Join our partner program and grow your business with Cashie's payment solutions. Earn competitive commissions, get marketing support, and scale together.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link to="/signup" className="w-full sm:w-auto">
                    <Button variant="secondary" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white text-orange-600 hover:bg-slate-100 font-semibold shadow-lg">
                      Become a Partner
                    </Button>
                  </Link>
                  <a href="#benefits" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-white text-white hover:bg-white/10 font-semibold">
                      Learn More
                    </Button>
                  </a>
                </div>
                <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                    <div className="text-xl sm:text-2xl font-bold mb-1">10%+</div>
                    <div className="text-xs text-orange-100">Commission</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                    <div className="text-xl sm:text-2xl font-bold mb-1">500+</div>
                    <div className="text-xs text-orange-100">Partners</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                    <div className="text-xl sm:text-2xl font-bold mb-1">24/7</div>
                    <div className="text-xs text-orange-100">Support</div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    {['Aggregator', 'Tech', 'Reseller', 'Referral'].map((item, i) => (
                      <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-center">
                        <div className="text-3xl lg:text-4xl mb-2 lg:mb-3">{['💳', '🔧', '📦', '🤝'][i]}</div>
                        <div className="text-white font-semibold text-xs lg:text-sm">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Partner Benefits
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-slate-50">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Partnership ROI Calculator
              </h2>
              <p className="text-lg text-slate-600">
                Calculate your potential earnings as a Cashie partner
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Monthly Transaction Volume (₹)
                    </label>
                    <input
                      type="number"
                      value={roiData.monthlyVolume}
                      onChange={(e) => setRoiData({...roiData, monthlyVolume: Number(e.target.value)})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Commission Rate (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={roiData.commissionRate}
                      onChange={(e) => setRoiData({...roiData, commissionRate: Number(e.target.value)})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Duration (months)
                    </label>
                    <input
                      type="number"
                      value={roiData.months}
                      onChange={(e) => setRoiData({...roiData, months: Number(e.target.value)})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>
                </div>
                <div className="bg-indigo-50 rounded-xl p-6 flex flex-col justify-center">
                  <div className="text-sm text-slate-600 mb-2">Monthly Earnings</div>
                  <div className="text-4xl font-bold text-indigo-600 mb-4">
                    ₹{((roiData.monthlyVolume * roiData.commissionRate) / 100).toLocaleString('en-IN')}
                  </div>
                  <div className="text-sm text-slate-600 mb-2">Annual Earnings</div>
                  <div className="text-3xl font-bold text-slate-900 mb-4">
                    ₹{((roiData.monthlyVolume * roiData.commissionRate * roiData.months) / 100).toLocaleString('en-IN')}
                  </div>
                  <div className="pt-4 border-t border-indigo-200">
                    <div className="text-xs text-slate-600">
                      Based on {roiData.months} months at {roiData.commissionRate}% commission
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Partner Types
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {partnerTypes.map((partner, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{partner.type}</h3>
                  <p className="text-slate-600">{partner.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Become a Partner
              </h2>
              <p className="text-lg text-slate-600">
                Fill out the form below and our team will get in touch with you
              </p>
            </div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="Tell us about your business and partnership interest..."
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full py-3 text-lg">
                  Submit Partnership Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerWithUs;
