import mongoose from 'mongoose';

const walletSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    balance: {
      type: Number,
      default: 0,
      min: 0,
    },
    pending: {
      type: Number,
      default: 0,
      min: 0,
    },
    currency: {
      type: String,
      default: 'USD',
      uppercase: true,
    },
    status: {
      type: String,
      enum: ['active', 'suspended', 'closed'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
walletSchema.index({ user: 1 });

const Wallet = mongoose.model('Wallet', walletSchema);

export default Wallet;

