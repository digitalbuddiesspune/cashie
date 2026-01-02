import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import api from '../utils/api';

const Wallet = () => {
  const [wallet, setWallet] = useState({ balance: 0, pending: 0 });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('add');
  const [formData, setFormData] = useState({
    amount: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: '',
    upiId: '',
    transferAmount: ''
  });

  useEffect(() => {
    fetchWallet();
  }, []);

  const fetchWallet = async () => {
    try {
      const response = await api.get('/wallet');
      setWallet(response.data.wallet || { balance: 0, pending: 0 });
    } catch (error) {
      console.error('Error fetching wallet:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddMoney = async (e) => {
    e.preventDefault();
    try {
      await api.post('/wallet/add', { amount: parseFloat(formData.amount) });
      alert('Money added successfully!');
      setFormData({...formData, amount: ''});
      fetchWallet();
    } catch (error) {
      alert('Error adding money: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleWithdraw = async (e) => {
    e.preventDefault();
    try {
      await api.post('/wallet/withdraw', {
        amount: parseFloat(formData.transferAmount),
        accountNumber: formData.accountNumber,
        ifscCode: formData.ifscCode,
        accountHolderName: formData.accountHolderName
      });
      alert('Withdrawal request submitted!');
      setFormData({...formData, transferAmount: '', accountNumber: '', ifscCode: '', accountHolderName: ''});
      fetchWallet();
    } catch (error) {
      alert('Error processing withdrawal: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleTransfer = async (e) => {
    e.preventDefault();
    try {
      await api.post('/wallet/transfer', {
        amount: parseFloat(formData.transferAmount),
        upiId: formData.upiId
      });
      alert('Transfer successful!');
      setFormData({...formData, transferAmount: '', upiId: ''});
      fetchWallet();
    } catch (error) {
      alert('Error processing transfer: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Wallet</h1>
            <p className="text-gray-600">Manage your wallet balance and transactions</p>
          </div>

          {/* Wallet Balance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-indigo-200 text-sm mb-2">Available Balance</p>
                  <h2 className="text-4xl font-bold">
                    ₹{wallet.balance.toFixed(2)}
                  </h2>
                  <p className="text-indigo-200 text-xs mt-2">Ready to use</p>
                </div>
                <div className="text-5xl">💳</div>
              </div>
            </Card>

            <Card>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-600 text-sm mb-2">Pending Settlement</p>
                  <h2 className="text-4xl font-bold text-gray-900">
                    ₹{wallet.pending.toFixed(2)}
                  </h2>
                  <p className="text-gray-500 text-xs mt-2">Settles in 1-2 business days</p>
                </div>
                <div className="text-5xl">⏳</div>
              </div>
            </Card>
          </div>

          {/* Tabs */}
          <Card>
            <div className="border-b border-gray-200 mb-6">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveTab('add')}
                  className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                    activeTab === 'add'
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Add Money
                </button>
                <button
                  onClick={() => setActiveTab('withdraw')}
                  className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                    activeTab === 'withdraw'
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Withdraw
                </button>
                <button
                  onClick={() => setActiveTab('transfer')}
                  className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                    activeTab === 'transfer'
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Transfer
                </button>
              </div>
            </div>

            {/* Add Money Form */}
            {activeTab === 'add' && (
              <form onSubmit={handleAddMoney} className="max-w-md">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount (₹)
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
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Add Money
                </button>
              </form>
            )}

            {/* Withdraw Form */}
            {activeTab === 'withdraw' && (
              <form onSubmit={handleWithdraw} className="max-w-md space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount (₹)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="1"
                    max={wallet.balance}
                    required
                    value={formData.transferAmount}
                    onChange={(e) => setFormData({...formData, transferAmount: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                    placeholder="Enter amount"
                  />
                  <p className="text-xs text-gray-500 mt-1">Available: ₹{wallet.balance.toFixed(2)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Number
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.accountNumber}
                    onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                    placeholder="Enter account number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.ifscCode}
                    onChange={(e) => setFormData({...formData, ifscCode: e.target.value.toUpperCase()})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                    placeholder="Enter IFSC code"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.accountHolderName}
                    onChange={(e) => setFormData({...formData, accountHolderName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                    placeholder="Enter account holder name"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Request Withdrawal
                </button>
              </form>
            )}

            {/* Transfer Form */}
            {activeTab === 'transfer' && (
              <form onSubmit={handleTransfer} className="max-w-md space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount (₹)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="1"
                    max={wallet.balance}
                    required
                    value={formData.transferAmount}
                    onChange={(e) => setFormData({...formData, transferAmount: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                    placeholder="Enter amount"
                  />
                  <p className="text-xs text-gray-500 mt-1">Available: ₹{wallet.balance.toFixed(2)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    UPI ID or Phone Number
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.upiId}
                    onChange={(e) => setFormData({...formData, upiId: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                    placeholder="example@upi or 9876543210"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Transfer Money
                </button>
              </form>
            )}
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wallet;

