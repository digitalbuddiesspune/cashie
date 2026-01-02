# Cashie Backend API

Backend API for Cashie Digital Payment Platform built with Node.js, Express, and MongoDB.

## Features

- 🔐 JWT Authentication (Access & Refresh Tokens)
- 💳 Wallet Management
- 💰 Transaction Processing
- 🔗 Payment Links
- 📄 Invoice Management
- 📊 Reports & Analytics
- ⚙️ Settings (API Keys, Webhooks)
- 🤝 Partner Registration

## Setup

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cashie
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-token-key
JWT_EXPIRE=7d
JWT_REFRESH_EXPIRE=30d
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

4. Start MongoDB (if running locally):
```bash
# Windows
mongod

# Mac/Linux
sudo systemctl start mongod
```

5. Run the server:
```bash
# Development
npm run dev

# Production
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh access token
- `GET /api/auth/me` - Get current user (Protected)
- `POST /api/auth/logout` - Logout user (Protected)

### Wallet
- `GET /api/wallet` - Get wallet balance (Protected)
- `POST /api/wallet/add` - Add money to wallet (Protected)
- `POST /api/wallet/withdraw` - Withdraw money (Protected)
- `POST /api/wallet/transfer` - Transfer money via UPI (Protected)

### Transactions
- `GET /api/transactions` - Get all transactions (Protected)
- `GET /api/transactions/:id` - Get single transaction (Protected)

### Payment Links
- `GET /api/payment-links` - Get all payment links (Protected)
- `POST /api/payment-links` - Create payment link (Protected)
- `GET /api/payment-links/:linkId` - Get payment link (Protected)
- `POST /api/payment-links/:linkId/pay` - Mark as paid (Protected)

### Invoices
- `GET /api/invoices` - Get all invoices (Protected)
- `POST /api/invoices` - Create invoice (Protected)
- `GET /api/invoices/:id` - Get single invoice (Protected)
- `POST /api/invoices/:id/send` - Send invoice (Protected)

### Stats & Reports
- `GET /api/stats` - Get dashboard stats (Protected)

### Settings
- `GET /api/settings/api-key` - Get API key (Protected)
- `POST /api/settings/api-key` - Generate new API key (Protected)
- `GET /api/settings/webhook` - Get webhook URL (Protected)
- `PUT /api/settings/webhook` - Update webhook URL (Protected)
- `PUT /api/settings/profile` - Update profile (Protected)
- `PUT /api/settings/password` - Change password (Protected)

### Partners
- `POST /api/partners/register` - Register as partner (Protected)

## Database Models

### User
- name, email, password, phone, company
- kycStatus, role, isActive
- refreshToken

### Wallet
- user, balance, pending, currency

### Transaction
- user, transactionId, amount, type, status
- paymentMethod, description, referenceId, metadata

### PaymentLink
- user, linkId, amount, description
- customerName, customerEmail, status, expiresAt

### Invoice
- user, invoiceNumber, customerName, customerEmail
- items, subtotal, tax, total, dueDate, status

## Authentication

All protected routes require a Bearer token in the Authorization header:
```
Authorization: Bearer <access_token>
```

## Error Handling

All errors return JSON in the following format:
```json
{
  "message": "Error message"
}
```

## Development

- Uses ES6 modules
- MongoDB with Mongoose ODM
- Express.js for routing
- JWT for authentication
- bcryptjs for password hashing
- express-validator for input validation

## License

ISC

