# Backend Server Setup Instructions

## Error: ERR_CONNECTION_REFUSED

This error means the backend server is not running. Follow these steps:

## Quick Start

### Option 1: Using npm (Recommended)

1. Open a new terminal/command prompt
2. Navigate to backend directory:
   ```bash
   cd backend
   ```

3. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

4. Create `.env` file (if not exists):
   Create a file named `.env` in the `backend` folder with:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/cashie
   JWT_SECRET=cashie-super-secret-jwt-key-change-in-production
   JWT_REFRESH_SECRET=cashie-super-secret-refresh-token-key-change-in-production
   JWT_EXPIRE=7d
   JWT_REFRESH_EXPIRE=30d
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

   Or for production:
   ```bash
   npm start
   ```

### Option 2: Check if MongoDB is Running

Make sure MongoDB is running:
- Windows: Check if MongoDB service is running
- Or start manually: `mongod`

## Verify Server is Running

After starting, you should see:
```
✅ MongoDB connected successfully
🚀 Server running on port 5000
📡 API available at http://localhost:5000/api
```

## Test the API

Open browser and go to:
```
http://localhost:5000/api/health
```

You should see:
```json
{
  "status": "OK",
  "message": "Cashie API is running"
}
```

## Troubleshooting

1. **Port 5000 already in use:**
   - Change PORT in `.env` file
   - Or kill the process using port 5000

2. **MongoDB connection error:**
   - Make sure MongoDB is installed and running
   - Check MongoDB URI in `.env` file

3. **Module not found errors:**
   - Run `npm install` in backend directory

## Running Both Frontend and Backend

You need TWO terminals:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Both should be running simultaneously!

