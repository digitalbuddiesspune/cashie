import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [wallet, setWallet] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [walletRes, transactionsRes] = await Promise.all([
        api.get('/wallet'),
        api.get('/transactions'),
      ]);
      setWallet(walletRes.data.wallet);
      setTransactions(transactionsRes.data.transactions || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {user?.name || 'User'}!
            </h1>
            <p className="text-gray-600 mt-2">
              Manage your finances and track your transactions
            </p>
          </div>

          {/* Wallet Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-indigo-200 text-sm mb-2">Total Balance</p>
                  <h2 className="text-3xl font-bold">
                    ${wallet?.balance?.toFixed(2) || '0.00'}
                  </h2>
                </div>
                <div className="text-4xl">💳</div>
              </div>
            </Card>

            <Card>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-600 text-sm mb-2">Pending</p>
                  <h2 className="text-2xl font-bold text-gray-900">
                    ${wallet?.pending?.toFixed(2) || '0.00'}
                  </h2>
                </div>
                <div className="text-3xl">⏳</div>
              </div>
            </Card>

            <Card>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-600 text-sm mb-2">KYC Status</p>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {user?.kycStatus === 'verified' ? (
                      <span className="text-green-600">Verified</span>
                    ) : user?.kycStatus === 'pending' ? (
                      <span className="text-yellow-600">Pending</span>
                    ) : (
                      <span className="text-red-600">Not Started</span>
                    )}
                  </h2>
                </div>
                <div className="text-3xl">
                  {user?.kycStatus === 'verified' ? '✓' : '📋'}
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="mb-8">
            <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/partner-register">
                <Button variant="outline" className="w-full">
                  Become Partner
                </Button>
              </Link>
              <Button variant="outline" className="w-full">
                Send Money
              </Button>
              <Button variant="outline" className="w-full">
                Request Payment
              </Button>
              <Button variant="outline" className="w-full">
                View Reports
              </Button>
            </div>
          </Card>

          {/* Recent Transactions */}
          <Card>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Recent Transactions</h3>
              <Button variant="outline">View All</Button>
            </div>

            {transactions.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No transactions yet. Start by making your first payment!
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Description
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Type
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
                        Amount
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.slice(0, 10).map((transaction) => (
                      <tr key={transaction._id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {new Date(transaction.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-900">
                          {transaction.description || 'Transaction'}
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            transaction.type === 'credit'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {transaction.type}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-right font-semibold">
                          {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            transaction.status === 'completed'
                              ? 'bg-green-100 text-green-800'
                              : transaction.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;

