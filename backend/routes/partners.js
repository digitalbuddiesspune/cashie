import express from 'express';
import { body, validationResult } from 'express-validator';
import { authenticate } from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// Register as partner
router.post('/register', [
  body('companyName').notEmpty().withMessage('Company name is required'),
  body('businessType').notEmpty().withMessage('Business type is required'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('phone').notEmpty().withMessage('Phone number is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const {
      companyName,
      businessType,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      taxId,
      website,
      description
    } = req.body;

    // Update user role to partner
    req.user.role = 'partner';
    req.user.company = companyName;
    req.user.phone = phone;
    await req.user.save();

    // In a real app, you'd create a separate Partner model
    // For now, we'll just return success

    res.status(201).json({
      message: 'Partner registration submitted successfully',
      user: req.user.toJSON()
    });
  } catch (error) {
    console.error('Partner registration error:', error);
    res.status(500).json({ message: 'Partner registration failed' });
  }
});

export default router;

