import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Payroll = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Automated Payroll
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your payroll process with automated calculations and direct deposits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card hover>
              <h3 className="text-2xl font-bold mb-4">Automated Processing</h3>
              <p className="text-gray-600 mb-4">
                Set up automated payroll runs. Calculate taxes, deductions, and net pay automatically.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Tax calculations</li>
                <li>✓ Direct deposit</li>
                <li>✓ Pay stub generation</li>
              </ul>
            </Card>

            <Card hover>
              <h3 className="text-2xl font-bold mb-4">Compliance & Reporting</h3>
              <p className="text-gray-600 mb-4">
                Stay compliant with tax regulations. Generate reports for accounting and audits.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Tax form generation</li>
                <li>✓ Compliance tracking</li>
                <li>✓ Detailed reports</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payroll;


