import express from 'express';
import Transaction from '../models/Transaction.js';
import Wallet from '../models/Wallet.js';
import { protect } from '../middleware/auth.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// @route   GET /api/transactions
// @desc    Get user transactions
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const wallet = await Wallet.findOne({ user: req.user._id });
    if (!wallet) {
      return res.json({
        success: true,
        transactions: [],
        pagination: {
          page,
          limit,
          total: 0,
          pages: 0,
        },
      });
    }

    const transactions = await Transaction.find({ wallet: wallet._id })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Transaction.countDocuments({ wallet: wallet._id });

    res.json({
      success: true,
      transactions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get transactions error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error',
    });
  }
});

// @route   GET /api/transactions/:id
// @desc    Get single transaction
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user._id });
    if (!wallet) {
      return res.status(404).json({
        success: false,
        message: 'Wallet not found',
      });
    }

    const transaction = await Transaction.findOne({
      _id: req.params.id,
      wallet: wallet._id,
    });

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: 'Transaction not found',
      });
    }

    res.json({
      success: true,
      transaction,
    });
  } catch (error) {
    console.error('Get transaction error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error',
    });
  }
});

// @route   POST /api/transactions
// @desc    Create new transaction
// @access  Private
router.post(
  '/',
  protect,
  [
    body('type').isIn(['credit', 'debit']).withMessage('Type must be credit or debit'),
    body('amount').isFloat({ min: 0.01 }).withMessage('Amount must be greater than 0'),
    body('description').optional().trim(),
    body('category').optional().isIn(['payment', 'transfer', 'deposit', 'withdrawal', 'refund', 'fee', 'payroll']),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: errors.array(),
        });
      }

      const wallet = await Wallet.findOne({ user: req.user._id });
      if (!wallet) {
        return res.status(404).json({
          success: false,
          message: 'Wallet not found',
        });
      }

      const { type, amount, description, category } = req.body;

      // Check balance for debit transactions
      if (type === 'debit' && wallet.balance < amount) {
        return res.status(400).json({
          success: false,
          message: 'Insufficient balance',
        });
      }

      // Create transaction
      const transaction = await Transaction.create({
        user: req.user._id,
        wallet: wallet._id,
        type,
        amount,
        description,
        category: category || 'payment',
        status: 'pending',
      });

      // Update wallet balance
      if (type === 'credit') {
        wallet.balance += amount;
      } else {
        wallet.balance -= amount;
      }

      // Update transaction status
      transaction.status = 'completed';
      await transaction.save();
      await wallet.save();

      res.status(201).json({
        success: true,
        message: 'Transaction created successfully',
        transaction,
      });
    } catch (error) {
      console.error('Create transaction error:', error);
      res.status(500).json({
        success: false,
        message: error.message || 'Server error',
      });
    }
  }
);

export default router;

