# Cashie Backend API

Backend server for Cashie FinTech application built with Node.js, Express, and MongoDB.

## Features

- User authentication with JWT (access + refresh tokens)
- User model with KYC status tracking
- Wallet management
- Transaction processing
- Settlement handling
- Partner registration
- Role-based access control (user, admin, partner)
- Secure API endpoints with validation

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the backend directory (copy from `env.example`):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cashie
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_REFRESH_SECRET=your-super-secret-refresh-jwt-key-change-this-in-production
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
NODE_ENV=development
```

3. Make sure MongoDB is running on your system

4. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh access token
- `GET /api/auth/me` - Get current user (Protected)

### Wallet
- `GET /api/wallet` - Get user wallet (Protected)

### Transactions
- `GET /api/transactions` - Get user transactions (Protected)
- `GET /api/transactions/:id` - Get single transaction (Protected)
- `POST /api/transactions` - Create new transaction (Protected)

### Partners
- `POST /api/partners/register` - Register as partner (Protected)
- `GET /api/partners/my-partner` - Get current user's partner info (Protected)
- `GET /api/partners` - Get all partners (Admin only)

## Models

- **User**: User accounts with KYC status
- **Wallet**: User wallet with balance tracking
- **Transaction**: Financial transactions
- **Settlement**: Settlement records
- **Partner**: Partner registrations

## Security

- JWT-based authentication
- Password hashing with bcrypt
- Input validation with express-validator
- Role-based access control
- Secure error handling

