import { Link } from 'react-router-dom';
import Button from '../components/Button';

const IntroSection = () => {
  // Chart data for area chart
  const areaChartData = [
    { month: 'Jan', value1: 2, value2: 3, value3: 4, value4: 5, value5: 6 },
    { month: 'Feb', value1: 3, value2: 4, value3: 7, value4: 8, value5: 8 },
    { month: 'Mar', value1: -1, value2: 1, value3: 3, value4: 3.5, value5: 4 },
    { month: 'Apr', value1: 1, value2: 2, value3: 4, value4: 5, value5: 5.5 },
    { month: 'May', value1: 2, value2: 3, value3: 5, value4: 6, value5: 7 },
    { month: 'Jun', value1: 3, value2: 4, value3: 6, value4: 7, value5: 8 },
  ];

  // Bar chart data
  const barChartData = [65, 75, 85, 70, 90, 80, 75];

  return (
    <section className="relative pt-8 pb-20 md:pt-12 md:pb-28 bg-white overflow-hidden">
      <div className="w-full px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Experience the future of
              <span className="block text-indigo-600">digital payments</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-xl">
              Transform your business with cutting-edge financial technology. Seamless transactions, secure payments, and powerful tools to accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button variant="primary" className="px-8 py-4 text-lg font-semibold">
                  Create Account
                </Button>
              </Link>
              <Link to="/partner-register">
                <Button variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 text-slate-700 hover:bg-slate-50">
                  Join as Partner
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - Dashboard Preview with Charts */}
          <div className="hidden lg:block">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 shadow-lg">
              {/* Chart Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                <h3 className="text-sm font-semibold text-slate-900">Performance Overview</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                </div>
              </div>

              {/* Area Chart */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-medium text-slate-700">Transaction Growth</p>
                  <div className="flex gap-3 text-xs">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                      <span className="text-slate-600">Q1</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      <span className="text-slate-600">Q2</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span className="text-slate-600">Q3</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      <span className="text-slate-600">Q4</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      <span className="text-slate-600">Q5</span>
                    </span>
                  </div>
                </div>
                
                {/* Chart Container */}
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <div className="h-32 relative flex items-end justify-between gap-1">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-500 pr-2">
                      <span>12%</span>
                      <span>8%</span>
                      <span>4%</span>
                      <span>0%</span>
                      <span>-4%</span>
                    </div>
                    
                    {/* Chart Area */}
                    <div className="flex-1 ml-8 h-full relative">
                      <svg className="w-full h-full" viewBox="0 0 300 160" preserveAspectRatio="none">
                        {/* Grid lines */}
                        <line x1="0" y1="40" x2="300" y2="40" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2,2" />
                        <line x1="0" y1="80" x2="300" y2="80" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2,2" />
                        <line x1="0" y1="120" x2="300" y2="120" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2,2" />
                        <line x1="0" y1="160" x2="300" y2="160" stroke="#cbd5e1" strokeWidth="1" />
                        
                        {/* Area chart paths */}
                        {areaChartData.map((data, index) => {
                          const x = (index / (areaChartData.length - 1)) * 300;
                          const y1 = 160 - ((data.value1 + 4) / 16) * 160;
                          const y2 = 160 - ((data.value2 + 4) / 16) * 160;
                          const y3 = 160 - ((data.value3 + 4) / 16) * 160;
                          const y4 = 160 - ((data.value4 + 4) / 16) * 160;
                          const y5 = 160 - ((data.value5 + 4) / 16) * 160;
                          
                          const nextX = index < areaChartData.length - 1 ? ((index + 1) / (areaChartData.length - 1)) * 300 : x;
                          const nextY1 = index < areaChartData.length - 1 ? 160 - ((areaChartData[index + 1].value1 + 4) / 16) * 160 : y1;
                          const nextY2 = index < areaChartData.length - 1 ? 160 - ((areaChartData[index + 1].value2 + 4) / 16) * 160 : y2;
                          const nextY3 = index < areaChartData.length - 1 ? 160 - ((areaChartData[index + 1].value3 + 4) / 16) * 160 : y3;
                          const nextY4 = index < areaChartData.length - 1 ? 160 - ((areaChartData[index + 1].value4 + 4) / 16) * 160 : y4;
                          const nextY5 = index < areaChartData.length - 1 ? 160 - ((areaChartData[index + 1].value5 + 4) / 16) * 160 : y5;
                          
                          return (
                            <g key={index}>
                              {/* Area fills */}
                              <path
                                d={`M ${x} ${y1} L ${nextX} ${nextY1} L ${nextX} 160 L ${x} 160 Z`}
                                fill="rgba(99, 102, 241, 0.2)"
                              />
                              <path
                                d={`M ${x} ${y2} L ${nextX} ${nextY2} L ${nextX} ${y1} L ${x} ${y1} Z`}
                                fill="rgba(139, 92, 246, 0.2)"
                              />
                              <path
                                d={`M ${x} ${y3} L ${nextX} ${nextY3} L ${nextX} ${y2} L ${x} ${y2} Z`}
                                fill="rgba(59, 130, 246, 0.2)"
                              />
                              <path
                                d={`M ${x} ${y4} L ${nextX} ${nextY4} L ${nextX} ${y3} L ${x} ${y3} Z`}
                                fill="rgba(249, 115, 22, 0.2)"
                              />
                              <path
                                d={`M ${x} ${y5} L ${nextX} ${nextY5} L ${nextX} ${y4} L ${x} ${y4} Z`}
                                fill="rgba(239, 68, 68, 0.2)"
                              />
                              
                              {/* Lines */}
                              <line x1={x} y1={y1} x2={nextX} y2={nextY1} stroke="#6366f1" strokeWidth="2" />
                              <line x1={x} y1={y2} x2={nextX} y2={nextY2} stroke="#8b5cf6" strokeWidth="2" />
                              <line x1={x} y1={y3} x2={nextX} y2={nextY3} stroke="#3b82f6" strokeWidth="2" />
                              <line x1={x} y1={y4} x2={nextX} y2={nextY4} stroke="#f97316" strokeWidth="2" />
                              <line x1={x} y1={y5} x2={nextX} y2={nextY5} stroke="#ef4444" strokeWidth="2" />
                              
                              {/* Data points */}
                              <circle cx={x} cy={y1} r="3" fill="#6366f1" />
                              <circle cx={x} cy={y2} r="3" fill="#8b5cf6" />
                              <circle cx={x} cy={y3} r="3" fill="#3b82f6" />
                              <circle cx={x} cy={y4} r="3" fill="#f97316" />
                              <circle cx={x} cy={y5} r="3" fill="#ef4444" />
                            </g>
                          );
                        })}
                      </svg>
                      
                      {/* X-axis labels */}
                      <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-slate-500 mt-1">
                        {areaChartData.map((data, index) => (
                          <span key={index}>{data.month}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="mb-3">
                <p className="text-xs font-medium text-slate-700 mb-2">Monthly Revenue</p>
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <div className="h-20 flex items-end justify-between gap-1">
                    {barChartData.map((height, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t hover:from-indigo-700 hover:to-indigo-500 transition-colors"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-slate-500 mt-1">W{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white rounded-lg p-2.5 border border-slate-200">
                  <p className="text-xs text-slate-500 mb-1">Transactions</p>
                  <p className="text-xl font-bold text-slate-900">10,234</p>
                  <p className="text-xs text-green-600 mt-0.5">+12.5%</p>
                </div>
                <div className="bg-white rounded-lg p-2.5 border border-slate-200">
                  <p className="text-xs text-slate-500 mb-1">Success Rate</p>
                  <p className="text-xl font-bold text-slate-900">99.2%</p>
                  <p className="text-xs text-green-600 mt-0.5">+0.3%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

