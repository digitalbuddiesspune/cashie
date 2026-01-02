import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import api from '../utils/api';

const PaymentLinks = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    customerName: '',
    customerEmail: '',
    expiryDays: '30'
  });

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await api.get('/payment-links');
      setLinks(response.data.links || []);
    } catch (error) {
      console.error('Error fetching payment links:', error);
    }
  };

  const handleCreateLink = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post('/payment-links', formData);
      alert('Payment link created successfully!');
      setFormData({
        amount: '',
        description: '',
        customerName: '',
        customerEmail: '',
        expiryDays: '30'
      });
      setShowForm(false);
      fetchLinks();
    } catch (error) {
      alert('Error creating payment link: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Link copied to clipboard!');
  };

  const generateMockLink = () => {
    const linkId = Math.random().toString(36).substring(7);
    return `https://cashie.com/pay/${linkId}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Links</h1>
              <p className="text-gray-600">Create and manage shareable payment links</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              {showForm ? 'Cancel' : '+ Create Link'}
            </button>
          </div>

          {/* Create Link Form */}
          {showForm && (
            <Card className="mb-6">
              <h2 className="text-xl font-bold mb-4">Create Payment Link</h2>
              <form onSubmit={handleCreateLink} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amount (₹) *
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="1"
                      required
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                      placeholder="Enter amount"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry (Days)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.expiryDays}
                      onChange={(e) => setFormData({...formData, expiryDays: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                    rows="3"
                    placeholder="Payment description"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Customer Name
                    </label>
                    <input
                      type="text"
                      value={formData.customerName}
                      onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Customer Email
                    </label>
                    <input
                      type="email"
                      value={formData.customerEmail}
                      onChange={(e) => setFormData({...formData, customerEmail: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                      placeholder="Optional"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium disabled:opacity-50"
                >
                  {loading ? 'Creating...' : 'Create Link'}
                </button>
              </form>
            </Card>
          )}

          {/* Payment Links List */}
          <Card>
            <h2 className="text-xl font-bold mb-4">Your Payment Links</h2>
            {links.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No payment links created yet. Create your first link above!
              </div>
            ) : (
              <div className="space-y-4">
                {links.map((link) => (
                  <div key={link._id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-gray-900">₹{link.amount}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            link.status === 'paid'
                              ? 'bg-green-100 text-green-800'
                              : link.status === 'expired'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {link.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{link.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>Created: {new Date(link.createdAt).toLocaleDateString()}</span>
                          {link.expiresAt && (
                            <span>Expires: {new Date(link.expiresAt).toLocaleDateString()}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => copyToClipboard(link.url || generateMockLink())}
                          className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-colors text-sm font-medium"
                        >
                          Copy Link
                        </button>
                      </div>
                    </div>
                    <div className="mt-3 p-2 bg-gray-100 rounded text-xs font-mono text-gray-700 break-all">
                      {link.url || generateMockLink()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentLinks;

