import express from 'express';
import { body, validationResult } from 'express-validator';
import { authenticate } from '../middleware/auth.js';
import Invoice from '../models/Invoice.js';
import { generateInvoiceNumber } from '../utils/generateId.js';

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// Get all invoices
router.get('/', async (req, res) => {
  try {
    const invoices = await Invoice.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .populate('transaction');

    res.json({ invoices });
  } catch (error) {
    console.error('Get invoices error:', error);
    res.status(500).json({ message: 'Failed to fetch invoices' });
  }
});

// Create invoice
router.post('/', [
  body('customerName').notEmpty().withMessage('Customer name is required'),
  body('customerEmail').isEmail().withMessage('Please provide a valid email'),
  body('items').isArray({ min: 1 }).withMessage('At least one item is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const { customerName, customerEmail, customerPhone, items, dueDate, notes } = req.body;

    // Calculate totals
    const subtotal = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + tax;

    const invoice = await Invoice.create({
      user: req.user._id,
      invoiceNumber: generateInvoiceNumber(),
      customerName,
      customerEmail,
      customerPhone,
      items,
      subtotal,
      tax,
      total,
      dueDate: dueDate ? new Date(dueDate) : null,
      notes
    });

    res.status(201).json({
      message: 'Invoice created successfully',
      invoice
    });
  } catch (error) {
    console.error('Create invoice error:', error);
    res.status(500).json({ message: 'Failed to create invoice' });
  }
});

// Get single invoice
router.get('/:id', async (req, res) => {
  try {
    const invoice = await Invoice.findOne({
      _id: req.params.id,
      user: req.user._id
    }).populate('transaction');

    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    res.json({ invoice });
  } catch (error) {
    console.error('Get invoice error:', error);
    res.status(500).json({ message: 'Failed to fetch invoice' });
  }
});

// Send invoice
router.post('/:id/send', async (req, res) => {
  try {
    const invoice = await Invoice.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    // Here you would integrate with email service
    // For now, we'll just return success
    res.json({
      message: 'Invoice sent successfully',
      invoice
    });
  } catch (error) {
    console.error('Send invoice error:', error);
    res.status(500).json({ message: 'Failed to send invoice' });
  }
});

export default router;

