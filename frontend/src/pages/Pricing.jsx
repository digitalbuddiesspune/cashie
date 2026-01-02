import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: '₹0',
      yearlyPrice: '₹0',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        'Up to ₹1,00,000/month transactions',
        'Basic payment processing',
        'UPI, Cards, Wallets',
        'Email support',
        'Standard security',
        'Basic analytics'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      monthlyPrice: '₹2,999',
      yearlyPrice: '₹2,499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to ₹10,00,000/month transactions',
        'Advanced payment processing',
        'All payment methods',
        'Priority support',
        'Enhanced security',
        'Advanced analytics',
        'API access',
        'Webhooks'
      ],
      buttonText: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited transactions',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 priority support',
        'Bank-level security',
        'Custom analytics',
        'Full API access',
        'SLA guarantee',
        'On-premise deployment option'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  const transactionFees = [
    { method: 'UPI', fee: '0.5%', min: '₹2' },
    { method: 'Credit/Debit Cards', fee: '1.5%', min: '₹5' },
    { method: 'Net Banking', fee: '1.0%', min: '₹3' },
    { method: 'Digital Wallets', fee: '0.75%', min: '₹2' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 text-white">
              💰 Transparent Pricing
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-purple-50 mb-6 sm:mb-8 leading-relaxed">
              Choose the plan that works best for your business. No hidden fees. Start free and scale as you grow.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-indigo-600' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    billingCycle === 'yearly' ? 'transform translate-x-7' : ''
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
                Yearly
                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Save 17%</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl p-8 border-2 transition-all ${
                    plan.popular
                      ? 'border-indigo-600 shadow-xl scale-105'
                      : 'border-slate-200 hover:shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-slate-900">
                        {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      {plan.monthlyPrice !== 'Custom' && (
                        <span className="text-slate-600 ml-1">{plan.period}</span>
                      )}
                    </div>
                    <p className="text-slate-600 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 mt-0.5 bg-indigo-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-base text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.name === 'Enterprise' ? (
                    <Link to="/partner-with-us">
                      <Button
                        variant={plan.popular ? 'primary' : 'outline'}
                        className="w-full py-3"
                      >
                        {plan.buttonText}
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/signup">
                      <Button
                        variant={plan.popular ? 'primary' : 'outline'}
                        className="w-full py-3"
                      >
                        {plan.buttonText}
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Fees */}
      <section className="py-20 bg-slate-50">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Transaction Fees
              </h2>
              <p className="text-lg text-slate-600">
                Transparent pricing with no hidden charges
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-slate-200">
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="text-left py-3 px-3 sm:px-4 font-semibold text-xs sm:text-sm text-slate-900 uppercase tracking-wider">Payment Method</th>
                          <th className="text-right py-3 px-3 sm:px-4 font-semibold text-xs sm:text-sm text-slate-900 uppercase tracking-wider">Fee</th>
                          <th className="text-right py-3 px-3 sm:px-4 font-semibold text-xs sm:text-sm text-slate-900 uppercase tracking-wider">Minimum</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200">
                        {transactionFees.map((fee, index) => (
                          <tr key={index} className="hover:bg-slate-50">
                            <td className="py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm text-slate-700">{fee.method}</td>
                            <td className="py-3 px-3 sm:px-4 whitespace-nowrap text-right text-xs sm:text-sm font-semibold text-slate-900">{fee.fee}</td>
                            <td className="py-3 px-3 sm:px-4 whitespace-nowrap text-right text-xs sm:text-sm text-slate-600">{fee.min}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Pricing FAQ
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: 'Are there any setup fees?',
                  a: 'No, there are no setup fees or hidden charges. You only pay for what you use.'
                },
                {
                  q: 'Can I change my plan later?',
                  a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
                },
                {
                  q: 'What happens if I exceed my transaction limit?',
                  a: 'You can upgrade to a higher plan or contact us for custom pricing based on your needs.'
                },
                {
                  q: 'Do you offer refunds?',
                  a: 'Yes, we offer a 30-day money-back guarantee for all paid plans.'
                }
              ].map((faq, index) => (
                <details key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <summary className="font-semibold text-slate-900 cursor-pointer">
                    {faq.q}
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
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
                Create Free Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
