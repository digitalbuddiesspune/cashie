import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Payments = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Payments Made Simple
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Send and receive payments instantly with our secure payment platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card hover>
              <h3 className="text-2xl font-bold mb-4">Send Money</h3>
              <p className="text-gray-600 mb-4">
                Transfer funds instantly to anyone, anywhere. Low fees and fast processing.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Instant transfers</li>
                <li>✓ Multiple currencies</li>
                <li>✓ Secure encryption</li>
              </ul>
            </Card>

            <Card hover>
              <h3 className="text-2xl font-bold mb-4">Receive Payments</h3>
              <p className="text-gray-600 mb-4">
                Accept payments from customers with ease. Multiple payment methods supported.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Credit & Debit cards</li>
                <li>✓ Bank transfers</li>
                <li>✓ Digital wallets</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payments;


