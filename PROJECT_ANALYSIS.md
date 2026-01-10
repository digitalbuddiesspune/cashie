# Cashie Project Analysis

## Project Overview

**Cashie** is a comprehensive digital payment platform that provides businesses with tools to manage payments, transactions, invoices, and financial operations. It's a full-stack application with a modern React frontend and a Node.js/Express backend.

---

## Architecture

### Technology Stack

#### Frontend
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 6.28.0
- **Styling**: Tailwind CSS 3.4.19
- **HTTP Client**: Axios 1.7.9
- **Language**: JavaScript (ES6+)

#### Backend
- **Runtime**: Node.js (ES Modules)
- **Framework**: Express 4.18.2
- **Database**: MongoDB with Mongoose 8.0.3
- **Authentication**: JWT (jsonwebtoken 9.0.2)
- **Password Hashing**: bcryptjs 2.4.3
- **Validation**: express-validator 7.0.1
- **Other**: CORS, dotenv, crypto

#### Deployment
- **Platform**: Render (configured via `render.yaml`)
- **Frontend**: Static site deployment
- **Backend**: Not configured in render.yaml (likely separate service)

---

## Project Structure

```
cashie/
├── backend/
│   ├── middleware/
│   │   └── auth.js          # JWT authentication middleware
│   ├── models/              # MongoDB schemas
│   │   ├── User.js
│   │   ├── Wallet.js
│   │   ├── Transaction.js
│   │   ├── PaymentLink.js
│   │   └── Invoice.js
│   ├── routes/              # API route handlers
│   │   ├── auth.js
│   │   ├── wallet.js
│   │   ├── transactions.js
│   │   ├── paymentLinks.js
│   │   ├── invoices.js
│   │   ├── stats.js
│   │   ├── settings.js
│   │   └── partners.js
│   ├── utils/
│   │   └── generateId.js
│   ├── server.js            # Express server entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── context/         # React Context (AuthContext)
│   │   ├── pages/           # Page components
│   │   ├── sections/        # Landing page sections
│   │   ├── utils/           # Utilities (API client)
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── public/
│   └── package.json
│
└── render.yaml              # Render deployment config
```

---

## Core Features

### 1. Authentication & Authorization
- **JWT-based authentication** with access and refresh tokens
- User registration and login
- Token refresh mechanism
- Protected routes (middleware-based)
- User roles: `user`, `partner`, `admin`
- KYC status tracking: `not_started`, `pending`, `verified`

### 2. Wallet Management
- User wallet with balance and pending amounts
- Add money to wallet
- Withdraw money
- Transfer money via UPI
- Currency support (default: INR)
- Automatic wallet creation on user registration

### 3. Transactions
- Transaction history tracking
- Transaction types: `credit`, `debit`
- Transaction status: `pending`, `completed`, `failed`, `refunded`
- Payment methods: UPI, Card, Net Banking, Wallet, Bank Transfer
- Transaction metadata support
- Indexed for performance

### 4. Payment Links
- Generate shareable payment links
- Customer information (name, email)
- Link expiration support
- Status tracking: `pending`, `paid`, `expired`, `cancelled`
- Unique link IDs
- Integration with transactions

### 5. Invoice Management
- Create and manage invoices
- Multiple line items per invoice
- Tax calculation support
- Invoice status: `draft`, `pending`, `paid`, `overdue`, `cancelled`
- Customer details (name, email, phone)
- Due date tracking
- Invoice number generation

### 6. Settings & Configuration
- API key generation and management
- Webhook URL configuration
- Profile management
- Password change functionality

### 7. Partner Program
- Partner registration
- Role-based access (partner role)
- Partner-specific features

### 8. Analytics & Reports
- Dashboard statistics
- Transaction reports
- Revenue tracking (daily, monthly)
- Success rate metrics

---

## Database Schema

### User Model
- **Fields**: name, email, password (hashed), phone, company
- **Status**: kycStatus, role, isActive
- **Security**: refreshToken, apiKey, webhookUrl
- **Auto-hash**: Password hashing on save
- **Methods**: comparePassword, toJSON (excludes sensitive data)

### Wallet Model
- **Fields**: user (ref), balance, pending, currency
- **Constraints**: balance ≥ 0, pending ≥ 0
- **Indexes**: Unique user index

### Transaction Model
- **Fields**: user, transactionId (unique), amount, type, status, paymentMethod
- **Metadata**: description, referenceId, metadata (Mixed)
- **Indexes**: User+createdAt, transactionId (unique), status

### PaymentLink Model
- **Fields**: user, linkId (unique), amount, description
- **Customer**: customerName, customerEmail
- **Timing**: expiresAt, paidAt
- **Relations**: transaction (ref)
- **Indexes**: User+createdAt, linkId (unique), status

### Invoice Model
- **Fields**: user, invoiceNumber (unique), customer info, items (array)
- **Financial**: subtotal, tax, total
- **Status**: draft, pending, paid, overdue, cancelled
- **Timing**: dueDate, paidAt
- **Relations**: transaction (ref)
- **Indexes**: User+createdAt, invoiceNumber (unique), status

---

## API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - Register new user
- `POST /login` - User login
- `POST /refresh` - Refresh access token
- `GET /me` - Get current user (Protected)
- `POST /logout` - Logout (Protected)

### Wallet (`/api/wallet`)
- `GET /` - Get wallet balance (Protected)
- `POST /add` - Add money (Protected)
- `POST /withdraw` - Withdraw money (Protected)
- `POST /transfer` - Transfer via UPI (Protected)

### Transactions (`/api/transactions`)
- `GET /` - Get all transactions (Protected)
- `GET /:id` - Get single transaction (Protected)

### Payment Links (`/api/payment-links`)
- `GET /` - Get all payment links (Protected)
- `POST /` - Create payment link (Protected)
- `GET /:linkId` - Get payment link (Protected)
- `POST /:linkId/pay` - Mark as paid (Protected)

### Invoices (`/api/invoices`)
- `GET /` - Get all invoices (Protected)
- `POST /` - Create invoice (Protected)
- `GET /:id` - Get single invoice (Protected)
- `POST /:id/send` - Send invoice (Protected)

### Stats (`/api/stats`)
- `GET /` - Get dashboard stats (Protected)

### Settings (`/api/settings`)
- `GET /api-key` - Get API key (Protected)
- `POST /api-key` - Generate new API key (Protected)
- `GET /webhook` - Get webhook URL (Protected)
- `PUT /webhook` - Update webhook URL (Protected)
- `PUT /profile` - Update profile (Protected)
- `PUT /password` - Change password (Protected)

### Partners (`/api/partners`)
- `POST /register` - Register as partner (Protected)

---

## Frontend Pages & Routes

### Public Pages
- `/` - Home (Landing page with multiple sections)
- `/payments` - Payments page
- `/banking` - Banking solutions
- `/payroll` - Payroll management
- `/pricing` - Pricing information
- `/identity-risk` - Identity & risk management
- `/developers` - Developer resources
- `/partner-with-us` - Partner program info
- `/support` - Support page

### Application Pages (Currently Unprotected)
- `/dashboard` - User dashboard
- `/transactions` - Transaction history
- `/wallet` - Wallet management
- `/payment-links` - Payment links management
- `/qr-code` - QR code functionality
- `/reports` - Reports & analytics
- `/settings` - User settings
- `/invoices` - Invoice management
- `/partner-register` - Partner registration

**Note**: Login and Signup routes are commented out in `App.jsx`, and protected routes are disabled. All routes are currently accessible without authentication.

---

## Frontend Components

### Core Components
- `Navbar` - Navigation bar
- `Footer` - Footer component
- `Button` - Reusable button
- `Card` - Card container
- `Input` - Form input
- `ErrorBoundary` - Error handling
- `ProtectedRoute` - Route protection (exists but not used)
- `PageTransition` - Page transition animations
- `ScrollToTop` - Scroll to top functionality

### Context
- `AuthContext` - Authentication state management
  - User state
  - Login/Register/Logout functions
  - Token management
  - Auto-refresh on mount

---

## Security Features

### Backend Security
- ✅ Password hashing with bcrypt (12 rounds)
- ✅ JWT authentication with access & refresh tokens
- ✅ Token expiration (7d access, 30d refresh)
- ✅ Protected routes via middleware
- ✅ Input validation with express-validator
- ✅ Password excluded from JSON responses
- ✅ User status checking (isActive)
- ⚠️ Default JWT secrets in code (should use environment variables)

### Frontend Security
- ✅ Token storage in localStorage
- ✅ Automatic token refresh on 401
- ✅ Axios interceptors for auth headers
- ✅ Token cleanup on logout/error
- ⚠️ Protected routes disabled (currently all routes are public)

---

## Configuration & Environment Variables

### Backend (.env required)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cashie
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-token-key
JWT_EXPIRE=7d
JWT_REFRESH_EXPIRE=30d
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_BASE_URL=http://localhost:7002/api
```

**Note**: Default API URL in code is `http://localhost:7002/api`, but backend README mentions port 5000. There's a port mismatch that should be addressed.

---

## Deployment

### Render Configuration
- **Frontend**: Static site deployment
- **Build Command**: `cd frontend && npm install && npm run build`
- **Static Path**: `frontend/dist`
- **Routing**: All routes rewrite to `/index.html` (SPA routing)

### Backend Deployment
- Not configured in `render.yaml`
- Likely deployed as separate service
- Requires MongoDB connection (MongoDB Atlas recommended)

---

## Key Observations & Issues

### ✅ Strengths
1. **Modern Tech Stack**: React 19, Vite, Tailwind CSS
2. **Comprehensive Features**: Wallet, transactions, invoices, payment links
3. **Good Structure**: Clear separation of concerns
4. **Database Design**: Well-indexed schemas
5. **Security Basics**: JWT auth, password hashing, validation

### ⚠️ Issues & Concerns

1. **Authentication Disabled**: 
   - Login/Signup routes commented out
   - Protected routes disabled
   - All pages accessible without auth

2. **Port Mismatch**:
   - Frontend API URL defaults to port 7002
   - Backend runs on port 5000
   - Configuration inconsistency

3. **Missing Environment Files**:
   - No `.env.example` files found
   - Backend README mentions `.env.example` but file doesn't exist

4. **Security Concerns**:
   - Default JWT secrets in code (fallback values)
   - Tokens stored in localStorage (XSS vulnerability)
   - No HTTPS enforcement mentioned

5. **Error Handling**:
   - Basic error handling present
   - Could be more comprehensive

6. **Testing**:
   - No test files found
   - package.json test script is placeholder

7. **API Integration**:
   - Some frontend pages have API calls commented out
   - Dashboard uses default/empty data

8. **Documentation**:
   - Backend README is comprehensive
   - Frontend README is just Vite template default
   - No API documentation (Swagger/OpenAPI)

9. **CORS Configuration**:
   - CORS enabled but no specific origin configuration visible
   - Should restrict origins in production

10. **Database Indexes**:
    - Good indexing strategy
    - Could add compound indexes for common queries

---

## Recommendations

### Immediate Actions
1. **Enable Authentication**: Uncomment and properly configure protected routes
2. **Fix Port Configuration**: Align frontend API URL with backend port
3. **Create .env.example Files**: Template files for environment variables
4. **Add Backend to render.yaml**: Configure backend service deployment

### Security Improvements
1. Use httpOnly cookies for refresh tokens (instead of localStorage)
2. Implement CSRF protection
3. Add rate limiting on authentication endpoints
4. Remove default secrets from code
5. Add input sanitization
6. Implement proper error messages (avoid info leakage)

### Code Quality
1. Add comprehensive error handling
2. Implement logging (Winston/Pino)
3. Add request validation middleware
4. Create API documentation (Swagger)
5. Add unit and integration tests
6. Set up CI/CD pipeline

### Features
1. Email service integration (invoice sending, notifications)
2. Payment gateway integration (Stripe, Razorpay, etc.)
3. File upload for invoice attachments
4. Real-time notifications (WebSockets)
5. Audit logging
6. Admin dashboard

### Frontend Improvements
1. Add loading states consistently
2. Improve error handling UI
3. Add form validation
4. Implement proper state management (if needed)
5. Add loading skeletons
6. Improve accessibility

---

## Development Workflow

### Backend Setup
```bash
cd backend
npm install
# Create .env file with required variables
npm run dev  # Development with nodemon
npm start    # Production
```

### Frontend Setup
```bash
cd frontend
npm install
# Create .env file with VITE_API_BASE_URL
npm run dev   # Development server
npm run build # Production build
npm run preview # Preview production build
```

---

## Summary

Cashie is a well-structured payment platform with a solid foundation. The backend architecture is clean with good database design, and the frontend uses modern React patterns. However, authentication is currently disabled, and there are some configuration inconsistencies that need to be addressed before production deployment. The core features are in place, but proper security, testing, and documentation would significantly improve the project's production readiness.

**Current State**: Development/MVP stage
**Production Readiness**: Needs security hardening, authentication enablement, and testing

