import express from 'express';
import { authenticate } from '../middleware/auth.js';
import Transaction from '../models/Transaction.js';
import Wallet from '../models/Wallet.js';

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// Get dashboard stats
router.get('/', async (req, res) => {
  try {
    const { range = 'month' } = req.query;

    // Calculate date range
    const now = new Date();
    let startDate;
    
    switch (range) {
      case 'today':
        startDate = new Date(now.setHours(0, 0, 0, 0));
        break;
      case 'week':
        startDate = new Date(now.setDate(now.getDate() - 7));
        break;
      case 'month':
        startDate = new Date(now.setMonth(now.getMonth() - 1));
        break;
      case 'quarter':
        startDate = new Date(now.setMonth(now.getMonth() - 3));
        break;
      case 'year':
        startDate = new Date(now.setFullYear(now.getFullYear() - 1));
        break;
      default:
        startDate = new Date(now.setMonth(now.getMonth() - 1));
    }

    // Get transactions
    const transactions = await Transaction.find({
      user: req.user._id,
      createdAt: { $gte: startDate },
      status: 'completed'
    });

    // Calculate stats
    const revenue = transactions
      .filter(t => t.type === 'credit')
      .reduce((sum, t) => sum + t.amount, 0);

    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayRevenue = transactions
      .filter(t => t.type === 'credit' && t.createdAt >= todayStart)
      .reduce((sum, t) => sum + t.amount, 0);

    const totalTransactions = transactions.length;
    const successfulTransactions = transactions.filter(t => t.status === 'completed').length;
    const successRate = totalTransactions > 0 
      ? (successfulTransactions / totalTransactions) * 100 
      : 0;

    const averageTransaction = transactions.length > 0
      ? revenue / transactions.filter(t => t.type === 'credit').length
      : 0;

    // Get wallet
    const wallet = await Wallet.findOne({ user: req.user._id });

    res.json({
      stats: {
        todayRevenue,
        monthlyRevenue: revenue,
        totalTransactions,
        successRate: successRate.toFixed(2),
        averageTransaction: averageTransaction.toFixed(2),
        walletBalance: wallet?.balance || 0,
        pendingSettlement: wallet?.pending || 0
      }
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ message: 'Failed to fetch stats' });
  }
});

export default router;

