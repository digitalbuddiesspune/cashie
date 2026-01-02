import express from 'express';
import { body, validationResult } from 'express-validator';
import { authenticate } from '../middleware/auth.js';
import PaymentLink from '../models/PaymentLink.js';
import Transaction from '../models/Transaction.js';
import Wallet from '../models/Wallet.js';
import { generateLinkId, generateTransactionId } from '../utils/generateId.js';

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// Get all payment links
router.get('/', async (req, res) => {
  try {
    const links = await PaymentLink.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .populate('transaction');

    res.json({ links });
  } catch (error) {
    console.error('Get payment links error:', error);
    res.status(500).json({ message: 'Failed to fetch payment links' });
  }
});

// Create payment link
router.post('/', [
  body('amount').isFloat({ min: 1 }).withMessage('Amount must be at least 1'),
  body('description').optional().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const { amount, description, customerName, customerEmail, expiryDays = 30 } = req.body;

    const linkId = generateLinkId();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + parseInt(expiryDays));

    const paymentLink = await PaymentLink.create({
      user: req.user._id,
      linkId,
      amount: parseFloat(amount),
      description,
      customerName,
      customerEmail,
      expiresAt
    });

    const url = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/pay/${linkId}`;

    res.status(201).json({
      message: 'Payment link created successfully',
      link: {
        ...paymentLink.toObject(),
        url
      }
    });
  } catch (error) {
    console.error('Create payment link error:', error);
    res.status(500).json({ message: 'Failed to create payment link' });
  }
});

// Get payment link by ID
router.get('/:linkId', async (req, res) => {
  try {
    const paymentLink = await PaymentLink.findOne({
      linkId: req.params.linkId,
      user: req.user._id
    }).populate('transaction');

    if (!paymentLink) {
      return res.status(404).json({ message: 'Payment link not found' });
    }

    res.json({ link: paymentLink });
  } catch (error) {
    console.error('Get payment link error:', error);
    res.status(500).json({ message: 'Failed to fetch payment link' });
  }
});

// Mark payment link as paid (webhook or manual)
router.post('/:linkId/pay', async (req, res) => {
  try {
    const paymentLink = await PaymentLink.findOne({
      linkId: req.params.linkId,
      user: req.user._id
    });

    if (!paymentLink) {
      return res.status(404).json({ message: 'Payment link not found' });
    }

    if (paymentLink.status === 'paid') {
      return res.status(400).json({ message: 'Payment link already paid' });
    }

    if (paymentLink.expiresAt && new Date() > paymentLink.expiresAt) {
      paymentLink.status = 'expired';
      await paymentLink.save();
      return res.status(400).json({ message: 'Payment link has expired' });
    }

    // Create transaction
    const transaction = await Transaction.create({
      user: req.user._id,
      transactionId: generateTransactionId(),
      amount: paymentLink.amount,
      type: 'credit',
      status: 'completed',
      paymentMethod: 'UPI',
      description: paymentLink.description || 'Payment via payment link',
      metadata: {
        paymentLinkId: paymentLink.linkId,
        customerName: paymentLink.customerName,
        customerEmail: paymentLink.customerEmail
      }
    });

    // Update wallet
    let wallet = await Wallet.findOne({ user: req.user._id });
    if (!wallet) {
      wallet = await Wallet.create({ user: req.user._id });
    }
    wallet.balance += paymentLink.amount;
    await wallet.save();

    // Update payment link
    paymentLink.status = 'paid';
    paymentLink.paidAt = new Date();
    paymentLink.transaction = transaction._id;
    await paymentLink.save();

    res.json({
      message: 'Payment successful',
      link: paymentLink,
      transaction
    });
  } catch (error) {
    console.error('Pay payment link error:', error);
    res.status(500).json({ message: 'Failed to process payment' });
  }
});

export default router;

