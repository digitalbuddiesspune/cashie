import express from 'express';
import Partner from '../models/Partner.js';
import { protect, authorize } from '../middleware/auth.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// @route   POST /api/partners/register
// @desc    Register as a partner
// @access  Private
router.post(
  '/register',
  protect,
  [
    body('companyName').trim().notEmpty().withMessage('Company name is required'),
    body('businessType').trim().notEmpty().withMessage('Business type is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('phone').trim().notEmpty().withMessage('Phone number is required'),
    body('address').trim().notEmpty().withMessage('Address is required'),
    body('city').trim().notEmpty().withMessage('City is required'),
    body('state').trim().notEmpty().withMessage('State is required'),
    body('zipCode').trim().notEmpty().withMessage('Zip code is required'),
    body('taxId').trim().notEmpty().withMessage('Tax ID is required'),
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

      // Check if user already has a partner registration
      const existingPartner = await Partner.findOne({ user: req.user._id });
      if (existingPartner) {
        return res.status(400).json({
          success: false,
          message: 'You already have a partner registration',
        });
      }

      const partner = await Partner.create({
        user: req.user._id,
        ...req.body,
        address: {
          street: req.body.address,
          city: req.body.city,
          state: req.body.state,
          zipCode: req.body.zipCode,
        },
      });

      res.status(201).json({
        success: true,
        message: 'Partner registration submitted successfully',
        partner,
      });
    } catch (error) {
      console.error('Partner registration error:', error);
      res.status(500).json({
        success: false,
        message: error.message || 'Server error',
      });
    }
  }
);

// @route   GET /api/partners/my-partner
// @desc    Get current user's partner info
// @access  Private
router.get('/my-partner', protect, async (req, res) => {
  try {
    const partner = await Partner.findOne({ user: req.user._id });

    if (!partner) {
      return res.status(404).json({
        success: false,
        message: 'Partner registration not found',
      });
    }

    res.json({
      success: true,
      partner,
    });
  } catch (error) {
    console.error('Get partner error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error',
    });
  }
});

// @route   GET /api/partners
// @desc    Get all partners (Admin only)
// @access  Private/Admin
router.get('/', protect, authorize('admin'), async (req, res) => {
  try {
    const partners = await Partner.find()
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      partners,
    });
  } catch (error) {
    console.error('Get partners error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error',
    });
  }
});

export default router;

