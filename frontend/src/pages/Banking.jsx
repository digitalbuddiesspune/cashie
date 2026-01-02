import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Banking = () => {
  const [activeTab, setActiveTab] = useState('accounts');

  const bankingFeatures = [
    {
      icon: '💼',
      title: 'Business Accounts',
      description: 'Open business accounts with competitive rates and full banking services.',
      features: ['Zero balance accounts', 'Multi-currency support', 'Priority customer support']
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Track your finances with detailed analytics and reporting tools.',
      features: ['Transaction insights', 'Revenue forecasting', 'Custom reports']
    },
    {
      icon: '🔒',
      title: 'Secure & Insured',
      description: 'Your funds are protected with bank-level security and insurance.',
      features: ['256-bit encryption', 'FDIC insurance', 'Fraud protection']
    },
    {
      icon: '💳',
      title: 'Virtual Cards',
      description: 'Create virtual cards for online transactions with spending limits.',
      features: ['Instant card generation', 'Spending controls', 'Transaction alerts']
    },
    {
      icon: '🌍',
      title: 'Multi-currency',
      description: 'Hold and transact in multiple currencies with competitive rates.',
      features: ['20+ currencies', 'Real-time conversion', 'Low fees']
    },
    {
      icon: '⚡',
      title: 'Instant Settlements',
      description: 'Get your money faster with instant settlement options.',
      features: ['Same-day transfers', 'Automated reconciliation', 'Flexible schedules']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Banking Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manage your finances with our comprehensive banking platform designed for modern businesses
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setActiveTab('accounts')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'accounts'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Accounts
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'services'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'analytics'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Analytics
              </button>
            </div>
          </div>

          {/* Accounts Tab */}
          {activeTab === 'accounts' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {bankingFeatures.slice(0, 3).map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="text-indigo-600 text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {bankingFeatures.slice(3).map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="text-indigo-600 text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-2xl font-bold mb-4">Financial Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Total Balance</p>
                    <p className="text-2xl font-bold text-gray-900">₹1,25,000</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Monthly Income</p>
                    <p className="text-2xl font-bold text-gray-900">₹45,000</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Pending</p>
                    <p className="text-2xl font-bold text-gray-900">₹12,500</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Transactions</p>
                    <p className="text-2xl font-bold text-gray-900">1,234</p>
                  </div>
                </div>
              </Card>
              <Card>
                <h3 className="text-2xl font-bold mb-4">Transaction Trends</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📈</div>
                    <p>Transaction chart visualization</p>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* CTA */}
          <Card className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-indigo-100 mb-6">
              Open your business account today and start managing your finances better
            </p>
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Open Account
            </button>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Banking;

