import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Banking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Complete Banking Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manage your finances with our comprehensive banking platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover>
              <div className="text-indigo-600 text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-3">Business Accounts</h3>
              <p className="text-gray-600">
                Open business accounts with competitive rates and full banking services.
              </p>
            </Card>

            <Card hover>
              <div className="text-indigo-600 text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Real-time Analytics</h3>
              <p className="text-gray-600">
                Track your finances with detailed analytics and reporting tools.
              </p>
            </Card>

            <Card hover>
              <div className="text-indigo-600 text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-3">Secure & Insured</h3>
              <p className="text-gray-600">
                Your funds are protected with bank-level security and insurance.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Banking;

