import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

const Payments = () => {
  const [activeTab, setActiveTab] = useState('UPI');
  const [calculatorAmount, setCalculatorAmount] = useState(1000);
  const [selectedMethod, setSelectedMethod] = useState('UPI');
  const [transactionStatus, setTransactionStatus] = useState(null);
  const [compareMethods, setCompareMethods] = useState(['UPI', 'Cards']);

  const paymentMethods = [
    {
      id: 'UPI',
      name: 'UPI',
      description: 'Unified Payments Interface for instant bank transfers',
      features: [
        'Flash UPI - 5x faster checkout',
        'UPI Intent - Seamless app integration',
        'Credit Card on UPI - RuPay support',
        '60+ direct bank integrations'
      ],
      icon: '💳'
    },
    {
      id: 'Cards',
      name: 'Credit & Debit Cards',
      description: 'Accept all major card networks securely',
      features: [
        'Visa, Mastercard, RuPay, Amex',
        'One-click checkout',
        '3D Secure authentication',
        'Tokenization for security'
      ],
      icon: '💳'
    },
    {
      id: 'Wallets',
      name: 'Digital Wallets',
      description: 'Support for popular wallet services',
      features: [
        'PhonePe, Paytm, Google Pay',
        'Amazon Pay integration',
        'Instant settlements',
        'Low transaction fees'
      ],
      icon: '📱'
    },
    {
      id: 'Netbanking',
      name: 'Net Banking',
      description: 'Direct bank transfers from major banks',
      features: [
        '50+ bank integrations',
        'Real-time processing',
        'Secure authentication',
        'Instant confirmations'
      ],
      icon: '🏦'
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Success Rate' },
    { value: '<2s', label: 'Average Processing' },
    { value: '60+', label: 'Bank Integrations' },
    { value: '24/7', label: 'Support Available' }
  ];

  // Fee calculator
  const feeRates = {
    UPI: { rate: 0.5, min: 2 },
    Cards: { rate: 1.5, min: 5 },
    Wallets: { rate: 0.75, min: 2 },
    Netbanking: { rate: 1.0, min: 3 }
  };

  const calculateFee = (amount, method) => {
    const fee = (amount * feeRates[method].rate) / 100;
    return Math.max(fee, feeRates[method].min);
  };

  // Transaction simulator
  const simulateTransaction = () => {
    setTransactionStatus('processing');
    setTimeout(() => {
      setTransactionStatus('success');
      setTimeout(() => {
        setTransactionStatus(null);
      }, 3000);
    }, 2000);
  };

  // Real-time stats animation
  const [animatedStats, setAnimatedStats] = useState(stats);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(prev => prev.map(stat => ({
        ...stat,
        value: stat.value === '99.9%' ? '99.9%' : stat.value
      })));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-white text-center lg:text-left">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                  🚀 Trusted by 10,000+ Businesses
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Payment Solutions for Every Business
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 sm:mb-8 leading-relaxed">
                  Accept payments seamlessly with multiple payment methods. Fast, secure, and reliable payment processing powered by cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link to="/signup" className="w-full sm:w-auto">
                    <Button variant="secondary" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white text-indigo-600 hover:bg-slate-100 font-semibold shadow-lg">
                      Get Started Free
                    </Button>
                  </Link>
                  <Link to="/pricing" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-white text-white hover:bg-white/10 font-semibold">
                      View Pricing
                    </Button>
                  </Link>
                </div>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-indigo-100">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No Setup Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Instant Activation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
              
              {/* Right - Visual */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20">
                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                      {['UPI', 'Cards', 'Wallets', 'Net Banking'].map((method, i) => (
                        <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl p-3 lg:p-4 text-center">
                          <div className="text-2xl lg:text-3xl mb-2">{paymentMethods[i]?.icon || '💳'}</div>
                          <div className="text-white font-semibold text-xs lg:text-sm">{method}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 hover:shadow-lg transition-all">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-semibold text-slate-700">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Tabs */}
      <section className="py-20 md:py-28">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Payment Methods
              </h2>
              <p className="text-lg text-slate-600">
                Choose from multiple payment options to suit your customers
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setActiveTab(method.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 transform hover:scale-105 ${
                    activeTab === method.id
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:shadow-md'
                  }`}
                >
                  <span className="mr-1 sm:mr-2">{method.icon}</span>
                  <span className="hidden xs:inline">{method.name}</span>
                  <span className="xs:hidden">{method.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {paymentMethods.map((method) => (
              activeTab === method.id && (
                <div key={method.id} className="bg-gradient-to-br from-white to-indigo-50/30 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-indigo-100 overflow-hidden relative">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/20 rounded-full blur-3xl -mr-32 -mt-32 hidden md:block"></div>
                  
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center relative z-10">
                    <div className="order-2 md:order-1">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl md:rounded-2xl mb-4 sm:mb-6 text-2xl sm:text-3xl shadow-lg">
                        {method.icon}
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                        {method.name}
                      </h3>
                      <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                        {method.description}
                      </p>
                      <ul className="space-y-3 sm:space-y-4">
                        {method.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3 sm:gap-4 group">
                            <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm sm:text-base md:text-lg text-slate-700 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 sm:mt-8">
                        <Link to="/signup" className="block w-full sm:w-auto">
                          <Button variant="primary" className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base">
                            Get Started with {method.name}
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-6 sm:p-8 text-center border border-indigo-200 shadow-inner order-1 md:order-2">
                      <div className="text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-4 transform hover:scale-110 transition-transform">{method.icon}</div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 mt-3 sm:mt-4">
                        <div className="text-xs sm:text-sm text-slate-600 mb-1">Transaction Fee</div>
                        <div className="text-xl sm:text-2xl font-bold text-indigo-600">{feeRates[method.id]?.rate || 0}%</div>
                        <div className="text-xs text-slate-500 mt-1">Min: ₹{feeRates[method.id]?.min || 0}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Fee Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-white">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-indigo-100 rounded-full text-sm font-semibold text-indigo-700 mb-4">
                💰 Fee Calculator
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Calculate Your Transaction Fees
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Get instant estimates for transaction fees across different payment methods. Transparent pricing with no hidden charges.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border border-indigo-100 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full blur-3xl -mr-48 -mt-48 hidden md:block"></div>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 relative z-10">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 sm:mb-3 uppercase tracking-wide">
                      Transaction Amount (₹)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={calculatorAmount}
                        onChange={(e) => setCalculatorAmount(Math.max(1, Number(e.target.value)))}
                        min="1"
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-lg sm:text-xl font-bold transition-all"
                      />
                      <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-sm sm:text-base">₹</div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {[100, 1000, 5000, 10000].map((amt) => (
                        <button
                          key={amt}
                          onClick={() => setCalculatorAmount(amt)}
                          className="px-2 sm:px-3 py-1 text-xs font-semibold bg-slate-100 hover:bg-indigo-100 text-slate-700 rounded-lg transition-colors"
                        >
                          ₹{amt.toLocaleString()}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 sm:mb-3 uppercase tracking-wide">
                      Payment Method
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {Object.keys(feeRates).map((method) => {
                        const methodData = paymentMethods.find(m => m.id === method);
                        return (
                          <button
                            key={method}
                            onClick={() => setSelectedMethod(method)}
                            className={`p-3 sm:p-4 rounded-xl border-2 transition-all ${
                              selectedMethod === method
                                ? 'border-indigo-600 bg-indigo-50 shadow-md'
                                : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                            }`}
                          >
                            <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{methodData?.icon || '💳'}</div>
                            <div className="text-xs sm:text-sm font-semibold text-slate-700">{method}</div>
                            <div className="text-xs text-slate-500 mt-1">{feeRates[method].rate}%</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-center shadow-xl">
                  <div className="text-xs sm:text-sm font-semibold text-indigo-100 mb-2 uppercase tracking-wide">Transaction Fee</div>
                  <div className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4">
                    ₹{calculateFee(calculatorAmount, selectedMethod).toFixed(2)}
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                    <div className="text-xs sm:text-sm text-indigo-100 mb-1">Fee Rate</div>
                    <div className="text-xl sm:text-2xl font-bold">{feeRates[selectedMethod].rate}%</div>
                    <div className="text-xs text-indigo-200 mt-1">Minimum: ₹{feeRates[selectedMethod].min}</div>
                  </div>
                  <div className="pt-4 sm:pt-6 border-t border-white/20">
                    <div className="text-xs sm:text-sm font-semibold text-indigo-100 mb-2 uppercase tracking-wide">You Receive</div>
                    <div className="text-2xl sm:text-3xl font-bold">
                      ₹{(calculatorAmount - calculateFee(calculatorAmount, selectedMethod)).toFixed(2)}
                    </div>
                    <div className="text-xs text-indigo-200 mt-2">
                      {((calculatorAmount - calculateFee(calculatorAmount, selectedMethod)) / calculatorAmount * 100).toFixed(2)}% of transaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Simulator */}
      <section className="py-20 bg-slate-50">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Test Transaction Flow
              </h2>
              <p className="text-lg text-slate-600">
                Experience our payment processing in real-time
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
              <div className="max-w-md mx-auto">
                {!transactionStatus && (
                  <div className="text-center">
                    <div className="text-6xl mb-6">💳</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Ready to Process
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Click below to simulate a payment transaction
                    </p>
                    <Button
                      onClick={simulateTransaction}
                      variant="primary"
                      className="px-8 py-3 text-lg"
                    >
                      Simulate Payment
                    </Button>
                  </div>
                )}
                {transactionStatus === 'processing' && (
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-indigo-600 border-t-transparent mb-6"></div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Processing...
                    </h3>
                    <p className="text-slate-600">
                      Verifying payment details
                    </p>
                  </div>
                )}
                {transactionStatus === 'success' && (
                  <div className="text-center">
                    <div className="text-6xl mb-6">✅</div>
                    <h3 className="text-2xl font-bold text-green-600 mb-2">
                      Payment Successful!
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Transaction completed in 1.8 seconds
                    </p>
                    <div className="bg-green-50 rounded-lg p-4 text-sm text-green-700">
                      Transaction ID: TXN{Math.random().toString(36).substr(2, 9).toUpperCase()}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Method Comparison */}
      <section className="py-20">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Compare Payment Methods
              </h2>
              <p className="text-lg text-slate-600">
                Select methods to compare features side by side
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
              <div className="flex flex-wrap gap-3 mb-6">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => {
                      if (compareMethods.includes(method.id)) {
                        setCompareMethods(compareMethods.filter(m => m !== method.id));
                      } else if (compareMethods.length < 3) {
                        setCompareMethods([...compareMethods, method.id]);
                      }
                    }}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      compareMethods.includes(method.id)
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {method.name} {compareMethods.includes(method.id) && '✓'}
                  </button>
                ))}
              </div>
              {compareMethods.length > 0 && (
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                          <tr>
                            <th className="text-left py-3 px-3 sm:px-4 font-semibold text-xs sm:text-sm text-slate-900 uppercase tracking-wider">Feature</th>
                            {compareMethods.map((methodId) => {
                              const method = paymentMethods.find(m => m.id === methodId);
                              return (
                                <th key={methodId} className="text-center py-3 px-3 sm:px-4 font-semibold text-xs sm:text-sm text-slate-900 uppercase tracking-wider">
                                  {method?.name}
                                </th>
                              );
                            })}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                          {[
                            { feature: 'Processing Time', values: { UPI: '<1s', Cards: '<2s', Wallets: '<1s', Netbanking: '<3s' } },
                            { feature: 'Success Rate', values: { UPI: '99.5%', Cards: '98.8%', Wallets: '99.2%', Netbanking: '97.5%' } },
                            { feature: 'Transaction Fee', values: { UPI: '0.5%', Cards: '1.5%', Wallets: '0.75%', Netbanking: '1.0%' } },
                            { feature: 'Settlement Time', values: { UPI: 'Instant', Cards: 'T+1', Wallets: 'Instant', Netbanking: 'T+1' } }
                          ].map((row, index) => (
                            <tr key={index} className="hover:bg-slate-50">
                              <td className="py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm font-medium text-slate-700">{row.feature}</td>
                              {compareMethods.map((methodId) => (
                                <td key={methodId} className="py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm text-center text-slate-600">
                                  {row.values[methodId] || '-'}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Cashie Payments?
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Fast Processing', desc: 'Process payments in under 2 seconds', icon: '⚡' },
                { title: 'Secure', desc: 'Bank-grade encryption and PCI DSS compliant', icon: '🔒' },
                { title: 'Easy Integration', desc: 'Simple APIs and comprehensive documentation', icon: '🔧' },
                { title: '24/7 Support', desc: 'Round-the-clock customer support', icon: '💬' },
                { title: 'Low Fees', desc: 'Competitive pricing with transparent fees', icon: '💰' },
                { title: 'Analytics', desc: 'Real-time insights and reporting', icon: '📊' }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-indigo-100 mb-8">
              Start accepting payments today with our easy setup process
            </p>
            <Link to="/signup">
              <Button variant="secondary" className="px-8 py-3 text-lg bg-white text-indigo-600 hover:bg-slate-100">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Payments;
