import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

const IdentityRisk = () => {
  const [activeSolution, setActiveSolution] = useState('KYC');
  const [riskScore, setRiskScore] = useState(0);
  const [verificationData, setVerificationData] = useState({
    transactionAmount: 1000,
    customerAge: 30,
    accountAge: 12,
    previousTransactions: 5
  });

  const calculateRisk = (data) => {
    let score = 0;
    // Amount factor (higher amount = higher risk)
    if (data.transactionAmount > 100000) score += 40;
    else if (data.transactionAmount > 50000) score += 25;
    else if (data.transactionAmount > 10000) score += 15;
    else score += 5;

    // Age factor (younger = slightly higher risk)
    if (data.customerAge < 25) score += 10;
    else if (data.customerAge < 35) score += 5;

    // Account age factor (newer account = higher risk)
    if (data.accountAge < 3) score += 30;
    else if (data.accountAge < 6) score += 15;
    else if (data.accountAge < 12) score += 5;

    // Transaction history (fewer transactions = higher risk)
    if (data.previousTransactions === 0) score += 25;
    else if (data.previousTransactions < 3) score += 15;
    else if (data.previousTransactions < 10) score += 5;

    setRiskScore(Math.min(100, score));
  };

  useEffect(() => {
    calculateRisk(verificationData);
  }, []);

  const solutions = [
    {
      id: 'KYC',
      name: 'KYC Verification',
      description: 'Complete Know Your Customer verification with automated document checks',
      features: [
        'Aadhaar verification with OTP',
        'PAN card validation',
        'Bank account verification',
        'Address proof verification',
        'Real-time document scanning',
        'Compliance with RBI guidelines'
      ]
    },
    {
      id: 'Fraud',
      name: 'Fraud Detection',
      description: 'Advanced AI-powered fraud prevention and detection',
      features: [
        'Real-time transaction monitoring',
        'Machine learning algorithms',
        'Behavioral analysis',
        'Device fingerprinting',
        'Risk scoring system',
        'Automated fraud alerts'
      ]
    },
    {
      id: 'Compliance',
      name: 'Compliance & Risk',
      description: 'Stay compliant with regulatory requirements',
      features: [
        'AML (Anti-Money Laundering) checks',
        'Sanctions screening',
        'PEP (Politically Exposed Persons) screening',
        'Regulatory reporting',
        'Audit trails',
        'Data privacy compliance'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 overflow-hidden">
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
                  🔒 Enterprise-Grade Security
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Identity & Risk Solutions
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-emerald-50 mb-6 sm:mb-8 leading-relaxed">
                  Protect your business with comprehensive identity verification and AI-powered risk management solutions. Stay compliant, reduce fraud, and build trust.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link to="/signup" className="w-full sm:w-auto">
                    <Button variant="secondary" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white text-emerald-600 hover:bg-slate-100 font-semibold shadow-lg">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link to="/pricing" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-white text-white hover:bg-white/10 font-semibold">
                      View Pricing
                    </Button>
                  </Link>
                </div>
                <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                    <div className="text-xl sm:text-2xl font-bold mb-1">99.9%</div>
                    <div className="text-xs text-emerald-100">Accuracy Rate</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                    <div className="text-xl sm:text-2xl font-bold mb-1">&lt;2min</div>
                    <div className="text-xs text-emerald-100">Verification Time</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                    <div className="text-xl sm:text-2xl font-bold mb-1">100%</div>
                    <div className="text-xs text-emerald-100">Compliance</div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    {['KYC', 'Fraud', 'Compliance', 'Risk'].map((item, i) => (
                      <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-center">
                        <div className="text-3xl lg:text-4xl mb-2 lg:mb-3">{['🆔', '🛡️', '✅', '📊'][i]}</div>
                        <div className="text-white font-semibold text-sm lg:text-base">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-20">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Solutions
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {solutions.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveSolution(solution.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                    activeSolution === solution.id
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/50'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:shadow-md'
                  }`}
                >
                  {solution.name}
                </button>
              ))}
            </div>

            {/* Solution Content */}
            {solutions.map((solution) => (
              activeSolution === solution.id && (
                <div key={solution.id} className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-8 md:p-12 shadow-xl border border-emerald-100 overflow-hidden relative">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                        {solution.id === 'KYC' ? '🆔' : solution.id === 'Fraud' ? '🛡️' : '✅'}
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                          {solution.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      {solution.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4 group">
                          <div className="flex-shrink-0 w-6 h-6 mt-0.5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-base md:text-lg text-slate-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <Link to="/signup">
                        <Button variant="primary" className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                          Get Started with {solution.name}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Risk Calculator */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-white">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-sm font-semibold text-emerald-700 mb-4">
                📊 Risk Assessment
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Real-Time Risk Calculator
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Calculate transaction risk score based on multiple factors. Get instant insights to make informed decisions.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border border-emerald-100 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full blur-3xl -mr-48 -mt-48 hidden md:block"></div>
              <div className="grid md:grid-cols-2 gap-6 relative z-10">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 sm:mb-3 uppercase tracking-wide">
                      Transaction Amount (₹)
                    </label>
                    <input
                      type="number"
                      value={verificationData.transactionAmount}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setVerificationData({...verificationData, transactionAmount: val});
                        calculateRisk({...verificationData, transactionAmount: val});
                      }}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 text-base sm:text-lg font-semibold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 sm:mb-3 uppercase tracking-wide">
                      Customer Age
                    </label>
                    <input
                      type="number"
                      value={verificationData.customerAge}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setVerificationData({...verificationData, customerAge: val});
                        calculateRisk({...verificationData, customerAge: val});
                      }}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 text-base sm:text-lg font-semibold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 sm:mb-3 uppercase tracking-wide">
                      Account Age (months)
                    </label>
                    <input
                      type="number"
                      value={verificationData.accountAge}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setVerificationData({...verificationData, accountAge: val});
                        calculateRisk({...verificationData, accountAge: val});
                      }}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 text-base sm:text-lg font-semibold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 sm:mb-3 uppercase tracking-wide">
                      Previous Transactions
                    </label>
                    <input
                      type="number"
                      value={verificationData.previousTransactions}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setVerificationData({...verificationData, previousTransactions: val});
                        calculateRisk({...verificationData, previousTransactions: val});
                      }}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 text-base sm:text-lg font-semibold transition-all"
                    />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-center shadow-xl">
                  <div className="text-xs sm:text-sm font-semibold text-emerald-100 mb-2 uppercase tracking-wide">Risk Score</div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                    {riskScore}
                    <span className="text-2xl sm:text-3xl text-emerald-100">/100</span>
                  </div>
                  <div className="mb-4 sm:mb-6">
                    <div className="h-5 sm:h-6 bg-white/20 rounded-full overflow-hidden mb-2 sm:mb-3">
                      <div
                        className={`h-full transition-all duration-500 ${
                          riskScore < 30 ? 'bg-green-300' :
                          riskScore < 60 ? 'bg-yellow-300' : 'bg-red-300'
                        }`}
                        style={{ width: `${riskScore}%` }}
                      />
                    </div>
                    <div className={`text-base sm:text-lg font-bold ${
                      riskScore < 30 ? 'text-green-200' :
                      riskScore < 60 ? 'text-yellow-200' : 'text-red-200'
                    }`}>
                      {riskScore < 30 ? '✅ Low Risk' :
                       riskScore < 60 ? '⚠️ Medium Risk' :
                       '❌ High Risk'}
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                    <div className="text-xs sm:text-sm text-emerald-100 mb-1">Status</div>
                    <div className="text-sm sm:text-base font-semibold">
                      {riskScore < 30 ? 'Transaction Approved' :
                       riskScore < 60 ? 'Additional Verification Recommended' :
                       'Manual Review Required'}
                    </div>
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
                Key Benefits
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Fast Verification', desc: 'Complete KYC in under 2 minutes', icon: '⚡' },
                { title: '99.9% Accuracy', desc: 'AI-powered verification with high accuracy', icon: '🎯' },
                { title: 'Compliance Ready', desc: 'Meet all regulatory requirements', icon: '✅' },
                { title: 'Real-time Processing', desc: 'Instant verification results', icon: '🔄' },
                { title: 'Cost Effective', desc: 'Reduce manual verification costs', icon: '💰' },
                { title: 'Scalable', desc: 'Handle millions of verifications', icon: '📈' }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Secure Your Business Today
            </h2>
            <p className="text-lg md:text-xl text-emerald-50 mb-8">
              Start using our identity and risk solutions to protect your business. Join thousands of companies trusting our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="secondary" className="px-8 py-4 text-lg bg-white text-emerald-600 hover:bg-slate-100 font-semibold shadow-lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white/10 font-semibold">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IdentityRisk;
