import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Payroll = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const employees = [
    { id: 1, name: 'John Doe', role: 'Developer', salary: 50000, status: 'active' },
    { id: 2, name: 'Jane Smith', role: 'Designer', salary: 45000, status: 'active' },
    { id: 3, name: 'Bob Johnson', role: 'Manager', salary: 75000, status: 'active' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Automated Payroll
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your payroll process with automated calculations and direct deposits
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <p className="text-sm text-gray-600 mb-1">Total Employees</p>
              <p className="text-3xl font-bold text-gray-900">{employees.length}</p>
            </Card>
            <Card>
              <p className="text-sm text-gray-600 mb-1">Monthly Payroll</p>
              <p className="text-3xl font-bold text-gray-900">₹1,70,000</p>
            </Card>
            <Card>
              <p className="text-sm text-gray-600 mb-1">This Month</p>
              <p className="text-3xl font-bold text-green-600">Paid</p>
            </Card>
            <Card>
              <p className="text-sm text-gray-600 mb-1">Next Payroll</p>
              <p className="text-3xl font-bold text-gray-900">Dec 1</p>
            </Card>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('employees')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'employees'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Employees
              </button>
              <button
                onClick={() => setActiveTab('processing')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'processing'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Processing
              </button>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="text-indigo-600 text-4xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold mb-4">Automated Processing</h3>
                <p className="text-gray-600 mb-4">
                  Set up automated payroll runs. Calculate taxes, deductions, and net pay automatically.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Automatic tax calculations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Direct deposit to bank accounts
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Digital pay stub generation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Scheduled payroll runs
                  </li>
                </ul>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="text-indigo-600 text-4xl mb-4">📋</div>
                <h3 className="text-2xl font-bold mb-4">Compliance & Reporting</h3>
                <p className="text-gray-600 mb-4">
                  Stay compliant with tax regulations. Generate reports for accounting and audits.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Automatic tax form generation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Real-time compliance tracking
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Detailed financial reports
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Audit trail and history
                  </li>
                </ul>
              </Card>
            </div>
          )}

          {/* Employees Tab */}
          {activeTab === 'employees' && (
            <Card>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Employee List</h3>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  + Add Employee
                </button>
              </div>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                          <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">Role</th>
                          <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">Salary</th>
                          <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                          <th className="text-right py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {employees.map((employee) => (
                          <tr key={employee.id} className="hover:bg-gray-50">
                            <td className="py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{employee.name}</td>
                            <td className="py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm text-gray-600">{employee.role}</td>
                            <td className="py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm font-semibold">₹{employee.salary.toLocaleString()}</td>
                            <td className="py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                {employee.status}
                              </span>
                            </td>
                            <td className="py-3 px-3 sm:px-4 whitespace-nowrap text-right text-xs sm:text-sm">
                              <button className="text-indigo-600 hover:text-indigo-700 font-medium">Edit</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Processing Tab */}
          {activeTab === 'processing' && (
            <Card>
              <h3 className="text-xl font-bold mb-4">Payroll Processing</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">Next Payroll Run</h4>
                    <span className="text-sm text-gray-600">Dec 1, 2024</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Scheduled for automatic processing</p>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                    Process Now
                  </button>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">Last Payroll Run</h4>
                    <span className="text-sm text-gray-600">Nov 1, 2024</span>
                  </div>
                  <p className="text-sm text-gray-600">Status: Completed</p>
                  <p className="text-sm text-gray-600">Total Amount: ₹1,70,000</p>
                </div>
              </div>
            </Card>
          )}

          {/* CTA */}
          <Card className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Automate Your Payroll Today</h2>
            <p className="text-indigo-100 mb-6">
              Save time and reduce errors with our automated payroll system
            </p>
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payroll;


