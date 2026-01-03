import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
// import api from '../utils/api'; // Backend API calls disabled

const Reports = () => {
  const [dateRange, setDateRange] = useState('month');
  const [reports, setReports] = useState({
    revenue: 0,
    transactions: 0,
    successRate: 0,
    averageTransaction: 0,
    refunds: 0,
    fees: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReports();
  }, [dateRange]);

  const fetchReports = async () => {
    setLoading(true);
    // Backend API calls disabled - using static data
    setReports({
      revenue: 125000,
      transactions: 1250,
      successRate: 98.5,
      averageTransaction: 100,
      refunds: 2500,
      fees: 3750
    });
    setLoading(false);
  };

  const exportReport = (format) => {
    const data = {
      dateRange,
      ...reports,
      generatedAt: new Date().toISOString()
    };
    
    if (format === 'csv') {
      const csv = [
        ['Metric', 'Value'].join(','),
        ['Revenue', reports.revenue].join(','),
        ['Transactions', reports.transactions].join(','),
        ['Success Rate', reports.successRate + '%'].join(','),
        ['Average Transaction', reports.averageTransaction].join(','),
        ['Refunds', reports.refunds].join(','),
        ['Fees', reports.fees].join(',')
      ].join('\n');
      
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `report-${dateRange}-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
    } else {
      const json = JSON.stringify(data, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `report-${dateRange}-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
              <p className="text-gray-600">View detailed analytics and insights</p>
            </div>
            <div className="flex gap-3">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
              <button
                onClick={() => exportReport('csv')}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Export CSV
              </button>
              <button
                onClick={() => exportReport('json')}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Export JSON
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : (
            <>
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
                  <p className="text-indigo-200 text-sm mb-2">Total Revenue</p>
                  <h2 className="text-4xl font-bold">₹{reports.revenue.toLocaleString()}</h2>
                  <p className="text-indigo-200 text-xs mt-2">+12% from last period</p>
                </Card>

                <Card>
                  <p className="text-gray-600 text-sm mb-2">Total Transactions</p>
                  <h2 className="text-4xl font-bold text-gray-900">{reports.transactions.toLocaleString()}</h2>
                  <p className="text-gray-500 text-xs mt-2">Average: ₹{reports.averageTransaction}</p>
                </Card>

                <Card>
                  <p className="text-gray-600 text-sm mb-2">Success Rate</p>
                  <h2 className="text-4xl font-bold text-gray-900">{reports.successRate}%</h2>
                  <p className="text-green-600 text-xs mt-2">Excellent performance</p>
                </Card>
              </div>

              {/* Additional Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <p className="text-gray-600 text-sm mb-2">Average Transaction</p>
                  <h2 className="text-3xl font-bold text-gray-900">₹{reports.averageTransaction}</h2>
                </Card>

                <Card>
                  <p className="text-gray-600 text-sm mb-2">Total Refunds</p>
                  <h2 className="text-3xl font-bold text-gray-900">₹{reports.refunds.toLocaleString()}</h2>
                  <p className="text-gray-500 text-xs mt-2">{(reports.refunds / reports.revenue * 100).toFixed(2)}% of revenue</p>
                </Card>

                <Card>
                  <p className="text-gray-600 text-sm mb-2">Total Fees</p>
                  <h2 className="text-3xl font-bold text-gray-900">₹{reports.fees.toLocaleString()}</h2>
                  <p className="text-gray-500 text-xs mt-2">{(reports.fees / reports.revenue * 100).toFixed(2)}% of revenue</p>
                </Card>
              </div>

              {/* Chart Placeholder */}
              <Card>
                <h3 className="text-xl font-bold mb-4">Revenue Trend</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📈</div>
                    <p>Chart visualization would appear here</p>
                    <p className="text-sm">Integration with charting library (Chart.js, Recharts, etc.)</p>
                  </div>
                </div>
              </Card>

              {/* Transaction Breakdown */}
              <Card className="mt-6">
                <h3 className="text-xl font-bold mb-4">Transaction Breakdown</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">By Payment Method</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>UPI</span>
                        <span className="font-semibold">65%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cards</span>
                        <span className="font-semibold">25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Net Banking</span>
                        <span className="font-semibold">10%</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">By Status</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Completed</span>
                        <span className="font-semibold text-green-600">{reports.successRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pending</span>
                        <span className="font-semibold text-yellow-600">1%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Failed</span>
                        <span className="font-semibold text-red-600">{(100 - reports.successRate - 1).toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reports;

