import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Cashie</h3>
            <p className="text-gray-400 mb-4">
              Pioneering payment solutions for your business growth.
            </p>
          </div>

          {/* Payments */}
          <div>
            <h4 className="font-semibold mb-4">Payments</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/payments" className="hover:text-white transition">
                  Payment Gateway
                </Link>
              </li>
              <li>
                <Link to="/payments" className="hover:text-white transition">
                  Payment Links
                </Link>
              </li>
              <li>
                <Link to="/payments" className="hover:text-white transition">
                  Payment Pages
                </Link>
              </li>
              <li>
                <Link to="/payments" className="hover:text-white transition">
                  QR Codes
                </Link>
              </li>
              <li>
                <Link to="/payments" className="hover:text-white transition">
                  Instant Settlements
                </Link>
              </li>
              <li>
                <Link to="/payments" className="hover:text-white transition">
                  Smart Collect
                </Link>
              </li>
            </ul>
          </div>

          {/* Banking */}
          <div>
            <h4 className="font-semibold mb-4">Banking</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/banking" className="hover:text-white transition">
                  Vendor Payments
                </Link>
              </li>
              <li>
                <Link to="/banking" className="hover:text-white transition">
                  Payouts & Payout Links
                </Link>
              </li>
              <li>
                <Link to="/banking" className="hover:text-white transition">
                  API Banking
                </Link>
              </li>
              <li>
                <Link to="/banking" className="hover:text-white transition">
                  Current Account
                </Link>
              </li>
              <li>
                <Link to="/banking" className="hover:text-white transition">
                  Tax Payments
                </Link>
              </li>
              <li>
                <Link to="/banking" className="hover:text-white transition">
                  Escrow
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Policies */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 mb-6">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/partner-register" className="hover:text-white transition">
                  Partner
                </Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>

            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  User Agreement Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="font-semibold mb-4">Reach Us</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="mb-1">Cashie</p>
                <p className="text-sm">
                  ABCD Coworkings,<br />
                  Ville Parle,<br />
                  Mumbai - 01, India
                </p>
              </div>
              <div>
                <p className="mb-1">Phone:</p>
                <a href="tel:+9198980909" className="hover:text-white transition">
                  +91 98980909**
                </a>
              </div>
              <div>
                <p className="mb-1">Email:</p>
                <a href="mailto:info@cashie.com" className="hover:text-white transition">
                  info@cashie.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright © Cashie. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
