import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767158109/Blue_Modern_Initial_A_Architecture_Logo_Design_100_x_40_px_1_im9cga.svg" 
                alt="Cashie Logo" 
                className="h-10 md:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="px-3 py-1.5 text-slate-700 hover:text-indigo-600 transition-all duration-200 font-medium rounded-lg hover:bg-slate-50 text-sm"
            >
              Home
            </Link>
            <Link 
              to="/payments" 
              className="px-3 py-1.5 text-slate-700 hover:text-indigo-600 transition-all duration-200 font-medium rounded-lg hover:bg-slate-50 text-sm"
            >
              Solutions
            </Link>
            <Link 
              to="/pricing" 
              className="px-3 py-1.5 text-slate-700 hover:text-indigo-600 transition-all duration-200 font-medium rounded-lg hover:bg-slate-50 text-sm"
            >
              Pricing
            </Link>
            <Link 
              to="/banking" 
              className="px-3 py-1.5 text-slate-700 hover:text-indigo-600 transition-all duration-200 font-medium rounded-lg hover:bg-slate-50 text-sm"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons / User Menu - Right */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-3 py-1.5 text-slate-700 hover:text-indigo-600 transition-all duration-200 font-medium rounded-lg hover:bg-slate-50 text-sm"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-5 py-2 text-slate-700 hover:text-indigo-600 transition-all duration-200 font-medium rounded-lg hover:bg-slate-50 border border-slate-200 hover:border-indigo-200 text-sm"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {user && (
              <Link
                to="/dashboard"
                className="px-3 py-1.5 text-indigo-600 font-medium text-sm rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Dashboard
              </Link>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all duration-200 font-medium rounded-lg"
              >
                Home
              </Link>
              <Link
                to="/payments"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all duration-200 font-medium rounded-lg"
              >
                Solutions
              </Link>
              <Link
                to="/pricing"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all duration-200 font-medium rounded-lg"
              >
                Pricing
              </Link>
              <Link
                to="/banking"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all duration-200 font-medium rounded-lg"
              >
                Contact
              </Link>
              {!user && (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all duration-200 font-medium rounded-lg mt-2 border border-slate-200"
                >
                  Login
                </Link>
              )}
              {user && (
                <div className="pt-4 border-t border-slate-200 mt-2">
                  <div className="px-4 py-3 mb-2 bg-slate-50 rounded-lg">
                    <p className="font-semibold text-slate-900">{user.name || 'User'}</p>
                    <p className="text-sm text-slate-500 mt-0.5">{user.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all duration-200 shadow-sm"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
