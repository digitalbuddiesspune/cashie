import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const QRCode = () => {
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    upiId: ''
  });
  const [qrData, setQrData] = useState(null);

  const generateQRCode = () => {
    if (!formData.amount || !formData.upiId) {
      alert('Please enter amount and UPI ID');
      return;
    }

    // Generate UPI payment string
    const upiString = `upi://pay?pa=${formData.upiId}&am=${formData.amount}&cu=INR&tn=${encodeURIComponent(formData.description || 'Payment')}`;
    
    // Use QR code API (QRServer for demo)
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiString)}`;
    
    setQrData({
      url: qrUrl,
      upiString: upiString,
      amount: formData.amount,
      description: formData.description
    });
  };

  const downloadQR = () => {
    if (!qrData) return;
    const link = document.createElement('a');
    link.href = qrData.url;
    link.download = `qr-code-${Date.now()}.png`;
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">QR Code Generator</h1>
            <p className="text-gray-600">Generate QR codes for UPI payments</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form */}
            <Card>
              <h2 className="text-xl font-bold mb-4">Payment Details</h2>
              <form onSubmit={(e) => { e.preventDefault(); generateQRCode(); }} className="space-y-4">
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
                    UPI ID *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.upiId}
                    onChange={(e) => setFormData({...formData, upiId: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                    placeholder="yourname@upi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                    rows="3"
                    placeholder="Payment description (optional)"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Generate QR Code
                </button>
              </form>
            </Card>

            {/* QR Code Display */}
            <Card>
              <h2 className="text-xl font-bold mb-4">QR Code</h2>
              {qrData ? (
                <div className="text-center">
                  <div className="bg-white p-6 rounded-lg border-2 border-gray-200 inline-block mb-4">
                    <img
                      src={qrData.url}
                      alt="QR Code"
                      className="w-64 h-64 mx-auto"
                    />
                  </div>
                  <div className="space-y-2 mb-4 text-left">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Amount</p>
                      <p className="font-semibold">₹{qrData.amount}</p>
                    </div>
                    {qrData.description && (
                      <div className="p-3 bg-gray-100 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Description</p>
                        <p className="font-semibold">{qrData.description}</p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={downloadQR}
                    className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                  >
                    Download QR Code
                  </button>
                </div>
              ) : (
                <div className="text-center py-16 text-gray-400">
                  <div className="text-6xl mb-4">📱</div>
                  <p>Fill the form to generate QR code</p>
                </div>
              )}
            </Card>
          </div>

          {/* Instructions */}
          <Card className="mt-6">
            <h3 className="text-lg font-bold mb-3">How to Use</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Enter the payment amount and your UPI ID</li>
              <li>Optionally add a description for the payment</li>
              <li>Click "Generate QR Code" to create the QR code</li>
              <li>Share the QR code with customers or print it for your store</li>
              <li>Customers can scan the QR code with any UPI app to make payments</li>
            </ol>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QRCode;

