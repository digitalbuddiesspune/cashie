import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';
// import api from '../utils/api'; // Backend API calls disabled
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [wallet, setWallet] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    todayRevenue: 0,
    monthlyRevenue: 0,
    totalTransactions: 0,
    successRate: 0
  });

  useEffect(() => {
    // Backend API calls commented out - using default values
    // fetchDashboardData();
    
    // Set default values directly without API calls
    setWallet({ balance: 0, pending: 0 });
    setTransactions([]);
    setStats({
      todayRevenue: 0,
      monthlyRevenue: 0,
      totalTransactions: 0,
      successRate: 0
    });
    setLoading(false);
  }, []);

  // Backend API calls commented out
  // const fetchDashboardData = async () => {
  //   try {
  //     const [walletRes, transactionsRes, statsRes] = await Promise.all([
  //       api.get('/wallet').catch(() => ({ data: { wallet: { balance: 0, pending: 0 } } })),
  //       api.get('/transactions').catch(() => ({ data: { transactions: [] } })),
  //       api.get('/stats').catch(() => ({ data: { stats: {} } })),
  //     ]);
  //     const walletData = walletRes?.data?.wallet || { balance: 0, pending: 0 };
  //     setWallet({
  //       balance: Number(walletData.balance) || 0,
  //       pending: Number(walletData.pending) || 0
  //     });
  //     setTransactions(transactionsRes?.data?.transactions || []);
  //     setStats({
  //       todayRevenue: Number(statsRes?.data?.stats?.todayRevenue) || 0,
  //       monthlyRevenue: Number(statsRes?.data?.stats?.monthlyRevenue) || 0,
  //       totalTransactions: Number(statsRes?.data?.stats?.totalTransactions) || 0,
  //       successRate: Number(statsRes?.data?.stats?.successRate) || 0
  //     });
  //   } catch (error) {
  //     console.error('Error fetching dashboard data:', error);
  //     // Set defaults on error
  //     setWallet({ balance: 0, pending: 0 });
  //     setTransactions([]);
  //     setStats({
  //       todayRevenue: 0,
  //       monthlyRevenue: 0,
  //       totalTransactions: 0,
  //       successRate: 0
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <div className="text-xl text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  // Login check commented out - dashboard accessible without login
  // if (!user) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
  //       <div className="text-center">
  //         <h1 className="text-2xl font-bold text-gray-900 mb-4">Please log in</h1>
  //         <p className="text-gray-600">You need to be logged in to view the dashboard.</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-4 sm:py-6 lg:py-8 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              Welcome{user?.name ? ` back, ${user.name}` : ''}!
            </h1>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
              Manage your finances and track your transactions
            </p>
          </div>

          {/* Wallet Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
            <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div className="flex-1 min-w-0 w-full sm:w-auto">
                  <p className="text-indigo-200 text-xs mb-1">Total Balance</p>
                  <h2 className="text-lg sm:text-xl lg:text-3xl font-bold break-words">
                    ₹{Number(wallet?.balance || 0).toFixed(2)}
                  </h2>
                  <p className="text-indigo-200 text-xs mt-1 hidden sm:block">Available for withdrawal</p>
                </div>
                <div className="text-xl sm:text-2xl lg:text-4xl mt-1 sm:mt-0 sm:ml-2 flex-shrink-0">💳</div>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div className="flex-1 min-w-0 w-full sm:w-auto">
                  <p className="text-gray-600 text-xs mb-1">Pending Settlement</p>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 break-words">
                    ₹{Number(wallet?.pending || 0).toFixed(2)}
                  </h2>
                  <p className="text-gray-500 text-xs mt-1 hidden sm:block">Settles in 1-2 days</p>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl mt-1 sm:mt-0 sm:ml-2 flex-shrink-0">⏳</div>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div className="flex-1 min-w-0 w-full sm:w-auto">
                  <p className="text-gray-600 text-xs mb-1">Today's Revenue</p>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 break-words">
                    ₹{Number(stats.todayRevenue || 0).toFixed(2)}
                  </h2>
                  <p className="text-green-600 text-xs mt-1 hidden sm:block">+12% from yesterday</p>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl mt-1 sm:mt-0 sm:ml-2 flex-shrink-0">📈</div>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div className="flex-1 min-w-0 w-full sm:w-auto">
                  <p className="text-gray-600 text-xs mb-1">Success Rate</p>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 break-words">
                    {Number(stats.successRate || 0).toFixed(1)}%
                  </h2>
                  <p className="text-gray-500 text-xs mt-1 hidden sm:block">Transaction success</p>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl mt-1 sm:mt-0 sm:ml-2 flex-shrink-0">✓</div>
              </div>
            </Card>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
            <Card>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="flex-1 min-w-0 w-full sm:w-auto">
                  <p className="text-gray-600 text-xs mb-1">Monthly Revenue</p>
                  <h2 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 break-words">
                    ₹{Number(stats.monthlyRevenue || 0).toFixed(2)}
                  </h2>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl mt-1 sm:mt-0 sm:ml-2 flex-shrink-0">💰</div>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="flex-1 min-w-0 w-full sm:w-auto">
                  <p className="text-gray-600 text-xs mb-1">Total Transactions</p>
                  <h2 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 break-words">
                    {(stats.totalTransactions || 0).toLocaleString()}
                  </h2>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl mt-1 sm:mt-0 sm:ml-2 flex-shrink-0">🔄</div>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="flex-1 min-w-0 w-full sm:w-auto">
                  <p className="text-gray-600 text-xs mb-1">KYC Status</p>
                  <h2 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 break-words">
                    {user?.kycStatus === 'verified' ? (
                      <span className="text-green-600">Verified ✓</span>
                    ) : user?.kycStatus === 'pending' ? (
                      <span className="text-yellow-600">Pending</span>
                    ) : (
                      <span className="text-gray-500">Not Started</span>
                    )}
                  </h2>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl mt-1 sm:mt-0 sm:ml-2 flex-shrink-0">
                  {user?.kycStatus === 'verified' ? '✓' : '📋'}
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="mb-4 sm:mb-6 lg:mb-8">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
              <Link to="/wallet">
                <Button variant="outline" className="w-full flex flex-col items-center py-2 sm:py-3">
                  <span className="text-xl sm:text-2xl mb-1">💳</span>
                  <span className="text-xs sm:text-sm">Wallet</span>
                </Button>
              </Link>
              <Link to="/transactions">
                <Button variant="outline" className="w-full flex flex-col items-center py-2 sm:py-3">
                  <span className="text-xl sm:text-2xl mb-1">📊</span>
                  <span className="text-xs sm:text-sm">Transactions</span>
                </Button>
              </Link>
              <Link to="/payment-links">
                <Button variant="outline" className="w-full flex flex-col items-center py-2 sm:py-3">
                  <span className="text-xl sm:text-2xl mb-1">🔗</span>
                  <span className="text-xs sm:text-sm">Payment Links</span>
                </Button>
              </Link>
              <Link to="/qr-code">
                <Button variant="outline" className="w-full flex flex-col items-center py-2 sm:py-3">
                  <span className="text-xl sm:text-2xl mb-1">📱</span>
                  <span className="text-xs sm:text-sm">QR Code</span>
                </Button>
              </Link>
              <Link to="/invoices">
                <Button variant="outline" className="w-full flex flex-col items-center py-2 sm:py-3">
                  <span className="text-xl sm:text-2xl mb-1">📄</span>
                  <span className="text-xs sm:text-sm">Invoices</span>
                </Button>
              </Link>
              <Link to="/reports">
                <Button variant="outline" className="w-full flex flex-col items-center py-2 sm:py-3">
                  <span className="text-xl sm:text-2xl mb-1">📈</span>
                  <span className="text-xs sm:text-sm">Reports</span>
                </Button>
              </Link>
            </div>
          </Card>

          {/* Recent Transactions */}
          <Card>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2 sm:gap-0">
              <h3 className="text-lg sm:text-xl font-bold">Recent Transactions</h3>
              <Link to="/transactions">
                <Button variant="outline" className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                  View All
                </Button>
              </Link>
            </div>

            {transactions.length === 0 ? (
              <div className="text-center py-6 sm:py-8 text-gray-500 text-sm sm:text-base">
                No transactions yet. Start by making your first payment!
              </div>
            ) : (
              <div className="overflow-x-auto -mx-3 sm:-mx-4 lg:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Description
                          </th>
                          <th className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">
                            Type
                          </th>
                          <th className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {transactions.slice(0, 10).map((transaction, index) => (
                      <tr key={transaction?._id || transaction?.id || `transaction-${index}`} className="hover:bg-gray-50">
                        <td className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 whitespace-nowrap text-xs text-gray-600">
                          {transaction?.createdAt ? new Date(transaction.createdAt).toLocaleDateString() : 'N/A'}
                        </td>
                        <td className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-xs text-gray-900">
                          <div className="truncate max-w-[120px] sm:max-w-[200px] md:max-w-none">
                            {transaction?.description || 'Transaction'}
                          </div>
                        </td>
                        <td className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 whitespace-nowrap text-xs hidden md:table-cell">
                          <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
                            transaction?.type === 'credit'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {transaction?.type || 'N/A'}
                          </span>
                        </td>
                        <td className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 whitespace-nowrap text-xs text-right font-semibold">
                          <span className={transaction?.type === 'credit' ? 'text-green-600' : 'text-red-600'}>
                            {transaction?.type === 'credit' ? '+' : '-'}₹{Number(transaction?.amount || 0).toFixed(2)}
                          </span>
                        </td>
                        <td className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 whitespace-nowrap text-xs">
                          <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
                            transaction?.status === 'completed'
                              ? 'bg-green-100 text-green-800'
                              : transaction?.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {transaction?.status || 'N/A'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                    </table>
                  </div>
                </div>
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

