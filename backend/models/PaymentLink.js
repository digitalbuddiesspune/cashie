import mongoose from 'mongoose';

const paymentLinkSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  linkId: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 1
  },
  description: {
    type: String,
    trim: true
  },
  customerName: {
    type: String,
    trim: true
  },
  customerEmail: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'paid', 'expired', 'cancelled'],
    default: 'pending'
  },
  expiresAt: {
    type: Date
  },
  paidAt: {
    type: Date
  },
  transaction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction'
  }
}, {
  timestamps: true
});

paymentLinkSchema.index({ user: 1, createdAt: -1 });
paymentLinkSchema.index({ linkId: 1 }, { unique: true });
paymentLinkSchema.index({ status: 1 });

const PaymentLink = mongoose.model('PaymentLink', paymentLinkSchema);

export default PaymentLink;

