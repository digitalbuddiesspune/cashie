import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
// import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PartnerRegistration from './pages/PartnerRegistration';
import Payments from './pages/Payments';
import Banking from './pages/Banking';
import Payroll from './pages/Payroll';
import Pricing from './pages/Pricing';
import IdentityRisk from './pages/IdentityRisk';
import Developers from './pages/Developers';
import PartnerWithUs from './pages/PartnerWithUs';
import Support from './pages/Support';
import Transactions from './pages/Transactions';
import Wallet from './pages/Wallet';
import PaymentLinks from './pages/PaymentLinks';
import QRCode from './pages/QRCode';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Invoices from './pages/Invoices';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <ScrollToTopOnRouteChange />
          <ScrollToTop />
          <div className="page-transition">
            <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/payments" element={<Payments />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/identity-risk" element={<IdentityRisk />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/support" element={<Support />} />
          {/* Protected routes commented out - now accessible without authentication */}
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/payment-links" element={<PaymentLinks />} />
          <Route path="/qr-code" element={<QRCode />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/partner-register" element={<PartnerRegistration />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
