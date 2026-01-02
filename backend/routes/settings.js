import express from 'express';
import { body, validationResult } from 'express-validator';
import { authenticate } from '../middleware/auth.js';
import User from '../models/User.js';
import { generateApiKey } from '../utils/generateId.js';

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// Get API key
router.get('/api-key', async (req, res) => {
  try {
    // In a real app, you'd store API keys in a separate collection
    // For now, we'll generate one on the fly
    const apiKey = req.user.apiKey || generateApiKey();
    
    if (!req.user.apiKey) {
      req.user.apiKey = apiKey;
      await req.user.save();
    }

    res.json({ apiKey });
  } catch (error) {
    console.error('Get API key error:', error);
    res.status(500).json({ message: 'Failed to fetch API key' });
  }
});

// Generate new API key
router.post('/api-key', async (req, res) => {
  try {
    const apiKey = generateApiKey();
    req.user.apiKey = apiKey;
    await req.user.save();

    res.json({ apiKey, message: 'New API key generated' });
  } catch (error) {
    console.error('Generate API key error:', error);
    res.status(500).json({ message: 'Failed to generate API key' });
  }
});

// Get webhook URL
router.get('/webhook', async (req, res) => {
  try {
    res.json({ webhookUrl: req.user.webhookUrl || '' });
  } catch (error) {
    console.error('Get webhook error:', error);
    res.status(500).json({ message: 'Failed to fetch webhook URL' });
  }
});

// Update webhook URL
router.put('/webhook', [
  body('webhookUrl').optional().isURL().withMessage('Please provide a valid URL')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    req.user.webhookUrl = req.body.webhookUrl || '';
    await req.user.save();

    res.json({ 
      message: 'Webhook URL updated successfully',
      webhookUrl: req.user.webhookUrl 
    });
  } catch (error) {
    console.error('Update webhook error:', error);
    res.status(500).json({ message: 'Failed to update webhook URL' });
  }
});

// Update profile
router.put('/profile', [
  body('name').optional().trim().notEmpty(),
  body('email').optional().isEmail(),
  body('phone').optional().trim(),
  body('company').optional().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const { name, email, phone, company } = req.body;

    if (name) req.user.name = name;
    if (email) {
      // Check if email is already taken
      const existingUser = await User.findOne({ email, _id: { $ne: req.user._id } });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
      }
      req.user.email = email;
    }
    if (phone !== undefined) req.user.phone = phone;
    if (company !== undefined) req.user.company = company;

    await req.user.save();

    res.json({
      message: 'Profile updated successfully',
      user: req.user.toJSON()
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Failed to update profile' });
  }
});

// Change password
router.put('/password', [
  body('currentPassword').notEmpty().withMessage('Current password is required'),
  body('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const { currentPassword, newPassword } = req.body;

    // Verify current password
    const isPasswordValid = await req.user.comparePassword(currentPassword);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    // Update password
    req.user.password = newPassword;
    await req.user.save();

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ message: 'Failed to change password' });
  }
});

export default router;

