import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

const Support = () => {
  const [activeCategory, setActiveCategory] = useState('General');
  const [searchQuery, setSearchQuery] = useState('');
  const [ticketForm, setTicketForm] = useState({
    email: '',
    subject: '',
    priority: 'medium',
    category: 'technical',
    message: ''
  });
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [liveChatOpen, setLiveChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');

  const faqCategories = {
    General: [
      { q: 'How do I create an account?', a: 'Click on Sign Up, fill in your details, verify your email, and complete KYC verification.' },
      { q: 'What payment methods are supported?', a: 'We support UPI, Credit/Debit Cards, Net Banking, and Digital Wallets.' },
      { q: 'How long does it take to process payments?', a: 'Most payments are processed instantly, typically within 2 seconds.' },
      { q: 'Are there any setup fees?', a: 'No, there are no setup fees. You only pay transaction fees.' }
    ],
    Payments: [
      { q: 'What are the transaction fees?', a: 'Transaction fees vary by payment method. Check our Pricing page for details.' },
      { q: 'When do I receive settlements?', a: 'Settlements are processed daily. Funds are transferred to your bank account within 24-48 hours.' },
      { q: 'How do I track my transactions?', a: 'You can view all transactions in your Dashboard under the Transactions section.' },
      { q: 'What if a payment fails?', a: 'Failed payments are automatically refunded. Check your dashboard for transaction status.' }
    ],
    Technical: [
      { q: 'How do I integrate the API?', a: 'Check our Developers page for API documentation and integration guides.' },
      { q: 'Do you provide webhooks?', a: 'Yes, we provide webhooks for real-time payment notifications.' },
      { q: 'Is there a sandbox environment?', a: 'Yes, you can test integrations using our sandbox environment.' },
      { q: 'What SDKs are available?', a: 'We provide SDKs for JavaScript, Python, PHP, Java, Ruby, and Go.' }
    ],
    Account: [
      { q: 'How do I update my profile?', a: 'Go to Dashboard > Settings > Profile to update your information.' },
      { q: 'How do I change my password?', a: 'Go to Dashboard > Settings > Security to change your password.' },
      { q: 'How do I add a bank account?', a: 'Go to Dashboard > Settings > Bank Accounts to add your bank details.' },
      { q: 'Can I have multiple accounts?', a: 'Yes, you can create multiple accounts for different businesses.' }
    ]
  };

  const contactMethods = [
    {
      type: 'Email Support',
      value: 'support@cashie.com',
      icon: '📧',
      desc: 'Get help via email'
    },
    {
      type: 'Phone Support',
      value: '+91 1800-123-4567',
      icon: '📞',
      desc: 'Call us 24/7'
    },
    {
      type: 'Live Chat',
      value: 'Available Now',
      icon: '💬',
      desc: 'Chat with our team'
    },
    {
      type: 'Documentation',
      value: 'View Docs',
      icon: '📚',
      desc: 'Self-service help'
    }
  ];

  const filteredFAQs = faqCategories[activeCategory].filter(faq =>
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 text-white">
              💬 24/7 Support Available
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Support Center
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-50 mb-6 sm:mb-8 leading-relaxed">
              Get help and support for your Cashie account. Our team is here to assist you 24/7.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help..."
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-10 sm:pl-12 border-2 border-white/30 bg-white/10 backdrop-blur-sm rounded-xl focus:ring-2 focus:ring-white focus:border-white text-base sm:text-lg text-white placeholder-white/70"
                />
                <svg className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-slate-50">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">{method.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-1">{method.type}</h3>
                  <p className="text-sm text-indigo-600 mb-1">{method.value}</p>
                  <p className="text-xs text-slate-600">{method.desc}</p>
                </div>
              ))}
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
                Frequently Asked Questions
              </h2>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {Object.keys(faqCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <details key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
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

      {/* Contact Form with Advanced Features */}
      <section className="py-20 bg-slate-50">
        <div className="w-full px-6 md:px-8 lg:px-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Create Support Ticket
              </h2>
              <p className="text-lg text-slate-600">
                Submit a detailed ticket and track its progress
              </p>
            </div>
            {!ticketSubmitted ? (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setTicketSubmitted(true);
                  setTimeout(() => setTicketSubmitted(false), 5000);
                }} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={ticketForm.email}
                      onChange={(e) => setTicketForm({...ticketForm, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Priority *
                      </label>
                      <select
                        value={ticketForm.priority}
                        onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Category *
                      </label>
                      <select
                        value={ticketForm.category}
                        onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                      >
                        <option value="technical">Technical</option>
                        <option value="billing">Billing</option>
                        <option value="account">Account</option>
                        <option value="general">General</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={ticketForm.subject}
                      onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      placeholder="What can we help you with?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      value={ticketForm.message}
                      onChange={(e) => setTicketForm({...ticketForm, message: e.target.value})}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      placeholder="Describe your issue or question..."
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-full py-3 text-lg">
                    Submit Ticket
                  </Button>
                </form>
              </div>
            ) : (
              <div className="bg-green-50 rounded-2xl p-8 shadow-lg border border-green-200 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Ticket Created Successfully!</h3>
                <p className="text-green-700 mb-4">Ticket ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                <p className="text-sm text-green-600">We'll get back to you within 24 hours</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Live Chat Widget */}
      {liveChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50">
          <div className="bg-indigo-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Live Chat Support</h3>
              <p className="text-xs text-indigo-100">Typically replies in under 2 minutes</p>
            </div>
            <button
              onClick={() => setLiveChatOpen(false)}
              className="text-white hover:text-slate-200"
            >
              ✕
            </button>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {chatMessages.length === 0 ? (
              <div className="text-center text-slate-500 py-8">
                <p>Start a conversation with our support team</p>
              </div>
            ) : (
              chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-900'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="p-4 border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && chatInput.trim()) {
                  setChatMessages([...chatMessages, { sender: 'user', text: chatInput }]);
                  setChatInput('');
                  setTimeout(() => {
                    setChatMessages(prev => [...prev, {
                      sender: 'support',
                      text: 'Thank you for your message. Our team will assist you shortly.'
                    }]);
                  }, 1000);
                }
              }}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
            />
            <Button
              onClick={() => {
                if (chatInput.trim()) {
                  setChatMessages([...chatMessages, { sender: 'user', text: chatInput }]);
                  setChatInput('');
                  setTimeout(() => {
                    setChatMessages(prev => [...prev, {
                      sender: 'support',
                      text: 'Thank you for your message. Our team will assist you shortly.'
                    }]);
                  }, 1000);
                }
              }}
              variant="primary"
              className="px-4 py-2"
            >
              Send
            </Button>
          </div>
        </div>
      )}

      {/* Live Chat Button */}
      <button
        onClick={() => setLiveChatOpen(!liveChatOpen)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white w-14 h-14 rounded-full shadow-lg hover:bg-indigo-700 transition-colors flex items-center justify-center z-40"
      >
        {liveChatOpen ? '✕' : '💬'}
      </button>

      <Footer />
    </div>
  );
};

export default Support;
