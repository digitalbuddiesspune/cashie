import express from 'express';
import Wallet from '../models/Wallet.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/wallet
// @desc    Get user wallet
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user._id });

    if (!wallet) {
      // Create wallet if it doesn't exist
      const newWallet = await Wallet.create({
        user: req.user._id,
        balance: 0,
        pending: 0,
      });
      return res.json({
        success: true,
        wallet: newWallet,
      });
    }

    res.json({
      success: true,
      wallet,
    });
  } catch (error) {
    console.error('Get wallet error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Server error',
    });
  }
});

export default router;

