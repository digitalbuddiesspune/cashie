import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

const Developers = () => {
  const [activeTab, setActiveTab] = useState('API');
  const [codeLanguage, setCodeLanguage] = useState('javascript');
  const [apiEndpoint, setApiEndpoint] = useState('/api/v1/payments');
  const [apiMethod, setApiMethod] = useState('POST');
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const codeExamples = {
    javascript: `// Initialize Cashie SDK
import { Cashie } from '@cashie/sdk';

const cashie = new Cashie({
  apiKey: 'your_api_key',
  environment: 'sandbox' // or 'production'
});

// Create a payment
const payment = await cashie.payments.create({
  amount: 1000,
  currency: 'INR',
  customer: {
    email: 'customer@example.com',
    phone: '+919876543210'
  }
});

// Handle payment response
console.log(payment.id);`,
    python: `# Initialize Cashie SDK
from cashie import Cashie

cashie = Cashie(
    api_key='your_api_key',
    environment='sandbox'  # or 'production'
)

# Create a payment
payment = cashie.payments.create(
    amount=1000,
    currency='INR',
    customer={
        'email': 'customer@example.com',
        'phone': '+919876543210'
    }
)

# Handle payment response
print(payment.id)`,
    php: `<?php
// Initialize Cashie SDK
require_once 'vendor/autoload.php';

use Cashie\\Cashie;

$cashie = new Cashie([
    'api_key' => 'your_api_key',
    'environment' => 'sandbox' // or 'production'
]);

// Create a payment
$payment = $cashie->payments->create([
    'amount' => 1000,
    'currency' => 'INR',
    'customer' => [
        'email' => 'customer@example.com',
        'phone' => '+919876543210'
    ]
]);

// Handle payment response
echo $payment->id;
?>`
  };

  const testAPI = async () => {
    setIsLoading(true);
    setApiResponse(null);
    // Simulate API call
    setTimeout(() => {
      setApiResponse({
        status: 200,
        data: {
          id: 'pay_' + Math.random().toString(36).substr(2, 9),
          status: 'created',
          amount: 1000,
          currency: 'INR',
          created_at: new Date().toISOString()
        }
      });
      setIsLoading(false);
    }, 1500);
  };

  const resources = [
    {
      id: 'API',
      name: 'API Documentation',
      description: 'Complete API reference with examples',
      content: [
        'RESTful API endpoints',
        'Request/response formats',
        'Authentication methods',
        'Error handling',
        'Rate limits',
        'Webhooks'
      ]
    },
    {
      id: 'SDK',
      name: 'SDKs & Libraries',
      description: 'Official SDKs for popular languages',
      content: [
        'JavaScript/Node.js SDK',
        'Python SDK',
        'PHP SDK',
        'Java SDK',
        'Ruby SDK',
        'Go SDK'
      ]
    },
    {
      id: 'Integration',
      name: 'Integration Guides',
      description: 'Step-by-step integration tutorials',
      content: [
        'Payment integration',
        'Webhook setup',
        'Mobile app integration',
        'E-commerce plugins',
        'Testing guide',
        'Production deployment'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-white text-center lg:text-left">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                  👨‍💻 Built for Developers
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Developer Resources
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                  Everything you need to integrate Cashie payments into your application. Powerful APIs, comprehensive SDKs, and detailed documentation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <a href="#docs" className="w-full sm:w-auto inline-block">
                    <Button variant="secondary" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white text-slate-900 hover:bg-slate-100 font-semibold shadow-lg">
                      View Documentation
                    </Button>
                  </a>
                  <a href="https://github.com/cashie" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-block">
                    <Button variant="outline" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-white text-white hover:bg-white/10 font-semibold">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.737 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </Button>
                  </a>
                </div>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>RESTful API</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>6+ SDKs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Webhooks</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/20">
                  <div className="bg-slate-900 rounded-xl p-4 lg:p-6 font-mono text-xs sm:text-sm">
                    <div className="flex items-center gap-2 mb-3 lg:mb-4">
                      <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-green-400 text-xs sm:text-sm">$ npm install @cashie/sdk</div>
                    <div className="text-slate-400 mt-2 text-xs sm:text-sm">// Initialize SDK</div>
                    <div className="text-blue-400 mt-1 text-xs sm:text-sm">{'const cashie = new Cashie({'}</div>
                    <div className="text-yellow-300 ml-4 text-xs sm:text-sm">apiKey: 'your_key'</div>
                    <div className="text-blue-400 text-xs sm:text-sm">{'});'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start with Code Editor */}
      <section className="py-20">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Quick Start
              </h2>
              <p className="text-lg text-slate-600">
                Get started in minutes with our simple integration
              </p>
            </div>
            
            {/* Language Selector */}
            <div className="flex justify-center gap-3 mb-8">
              {['javascript', 'python', 'php'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCodeLanguage(lang)}
                  className={`px-6 py-3 rounded-xl font-semibold capitalize transition-all transform hover:scale-105 ${
                    codeLanguage === lang
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:shadow-md'
                  }`}
                >
                  {lang === 'javascript' ? '⚡ JavaScript' : lang === 'python' ? '🐍 Python' : '🐘 PHP'}
                </button>
              ))}
            </div>

            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 mb-6">
              {/* Code Editor Header */}
              <div className="bg-slate-800 px-6 py-3 flex justify-between items-center border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-sm text-slate-400 uppercase tracking-wide font-semibold">{codeLanguage}</span>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(codeExamples[codeLanguage]);
                    alert('Code copied to clipboard!');
                  }}
                  className="px-4 py-1.5 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-semibold flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </button>
              </div>
              <div className="p-6 md:p-8 overflow-x-auto">
                <pre className="text-sm md:text-base text-slate-100 font-mono leading-relaxed">
                  <code className="text-slate-100">{codeExamples[codeLanguage]}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Testing Tool */}
      <section className="py-20 bg-slate-50">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                API Testing Tool
              </h2>
              <p className="text-lg text-slate-600">
                Test API endpoints directly from your browser
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <select
                    value={apiMethod}
                    onChange={(e) => setApiMethod(e.target.value)}
                    className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                  >
                    <option>GET</option>
                    <option>POST</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                  </select>
                  <input
                    type="text"
                    value={apiEndpoint}
                    onChange={(e) => setApiEndpoint(e.target.value)}
                    className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                    placeholder="/api/v1/payments"
                  />
                  <Button
                    onClick={testAPI}
                    variant="primary"
                    disabled={isLoading}
                    className="px-6 py-2"
                  >
                    {isLoading ? 'Testing...' : 'Test API'}
                  </Button>
                </div>
                {apiResponse && (
                  <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                    <div className="text-sm text-green-400 mb-2">Status: {apiResponse.status}</div>
                    <pre className="text-sm text-slate-100 font-mono">
                      <code>{JSON.stringify(apiResponse.data, null, 2)}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Tabs */}
      <section id="docs" className="py-20 bg-slate-50">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Developer Resources
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {resources.map((resource) => (
                <button
                  key={resource.id}
                  onClick={() => setActiveTab(resource.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeTab === resource.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {resource.name}
                </button>
              ))}
            </div>

            {/* Resource Content */}
            {resources.map((resource) => (
              activeTab === resource.id && (
                <div key={resource.id} className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {resource.name}
                  </h3>
                  <p className="text-lg text-slate-600 mb-8">
                    {resource.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {resource.content.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 mt-1 bg-indigo-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-base text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Developer Features
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'RESTful API', desc: 'Clean, intuitive API design', icon: '🔌' },
                { title: 'Webhooks', desc: 'Real-time event notifications', icon: '🔔' },
                { id: 'Sandbox', title: 'Sandbox Mode', desc: 'Test without real transactions', icon: '🧪' },
                { title: 'Code Examples', desc: 'Ready-to-use code snippets', icon: '💻' },
                { title: 'SDKs', desc: 'Official libraries for all languages', icon: '📚' },
                { title: 'Support', desc: 'Dedicated developer support', icon: '💬' }
              ].map((feature, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow">
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
              Ready to Build?
            </h2>
            <p className="text-lg text-indigo-100 mb-8">
              Get your API keys and start integrating today
            </p>
            <Link to="/signup">
              <Button variant="secondary" className="px-8 py-3 text-lg bg-white text-indigo-600 hover:bg-slate-100">
                Get API Keys
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Developers;
