import express from 'express';
import { body, validationResult } from 'express-validator';
import { authenticate } from '../middleware/auth.js';
import Wallet from '../models/Wallet.js';
import Transaction from '../models/Transaction.js';
import { generateTransactionId } from '../utils/generateId.js';

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// Get wallet
router.get('/', async (req, res) => {
  try {
    let wallet = await Wallet.findOne({ user: req.user._id });

    if (!wallet) {
      wallet = await Wallet.create({ user: req.user._id });
    }

    res.json({ wallet });
  } catch (error) {
    console.error('Get wallet error:', error);
    res.status(500).json({ message: 'Failed to fetch wallet' });
  }
});

// Add money
router.post('/add', [
  body('amount').isFloat({ min: 1 }).withMessage('Amount must be at least 1')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const { amount } = req.body;
    let wallet = await Wallet.findOne({ user: req.user._id });

    if (!wallet) {
      wallet = await Wallet.create({ user: req.user._id });
    }

    // Update balance
    wallet.balance += parseFloat(amount);
    await wallet.save();

    // Create transaction
    const transaction = await Transaction.create({
      user: req.user._id,
      transactionId: generateTransactionId(),
      amount: parseFloat(amount),
      type: 'credit',
      status: 'completed',
      paymentMethod: 'Bank Transfer',
      description: 'Money added to wallet'
    });

    res.json({
      message: 'Money added successfully',
      wallet,
      transaction
    });
  } catch (error) {
    console.error('Add money error:', error);
    res.status(500).json({ message: 'Failed to add money' });
  }
});

// Withdraw money
router.post('/withdraw', [
  body('amount').isFloat({ min: 1 }).withMessage('Amount must be at least 1'),
  body('accountNumber').notEmpty().withMessage('Account number is required'),
  body('ifscCode').notEmpty().withMessage('IFSC code is required'),
  body('accountHolderName').notEmpty().withMessage('Account holder name is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const { amount, accountNumber, ifscCode, accountHolderName } = req.body;
    let wallet = await Wallet.findOne({ user: req.user._id });

    if (!wallet) {
      return res.status(404).json({ message: 'Wallet not found' });
    }

    if (wallet.balance < parseFloat(amount)) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    // Update balance
    wallet.balance -= parseFloat(amount);
    await wallet.save();

    // Create transaction
    const transaction = await Transaction.create({
      user: req.user._id,
      transactionId: generateTransactionId(),
      amount: parseFloat(amount),
      type: 'debit',
      status: 'pending',
      paymentMethod: 'Bank Transfer',
      description: `Withdrawal to ${accountHolderName}`,
      metadata: { accountNumber, ifscCode, accountHolderName }
    });

    res.json({
      message: 'Withdrawal request submitted',
      wallet,
      transaction
    });
  } catch (error) {
    console.error('Withdraw error:', error);
    res.status(500).json({ message: 'Failed to process withdrawal' });
  }
});

// Transfer money
router.post('/transfer', [
  body('amount').isFloat({ min: 1 }).withMessage('Amount must be at least 1'),
  body('upiId').notEmpty().withMessage('UPI ID is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const { amount, upiId } = req.body;
    let wallet = await Wallet.findOne({ user: req.user._id });

    if (!wallet) {
      return res.status(404).json({ message: 'Wallet not found' });
    }

    if (wallet.balance < parseFloat(amount)) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    // Update balance
    wallet.balance -= parseFloat(amount);
    await wallet.save();

    // Create transaction
    const transaction = await Transaction.create({
      user: req.user._id,
      transactionId: generateTransactionId(),
      amount: parseFloat(amount),
      type: 'debit',
      status: 'completed',
      paymentMethod: 'UPI',
      description: `Transfer to ${upiId}`,
      metadata: { upiId }
    });

    res.json({
      message: 'Transfer successful',
      wallet,
      transaction
    });
  } catch (error) {
    console.error('Transfer error:', error);
    res.status(500).json({ message: 'Failed to process transfer' });
  }
});

export default router;

