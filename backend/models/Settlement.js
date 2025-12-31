import mongoose from 'mongoose';

const settlementSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    wallet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Wallet',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      default: 'USD',
      uppercase: true,
    },
    settlementType: {
      type: String,
      enum: ['bank_transfer', 'wallet_topup', 'payout'],
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'completed', 'failed', 'cancelled'],
      default: 'pending',
    },
    bankDetails: {
      accountNumber: String,
      accountName: String,
      bankName: String,
      routingNumber: String,
      swiftCode: String,
    },
    reference: {
      type: String,
      unique: true,
      sparse: true,
    },
    processedAt: Date,
    failureReason: String,
  },
  {
    timestamps: true,
  }
);

// Indexes for faster queries
settlementSchema.index({ user: 1, createdAt: -1 });
settlementSchema.index({ status: 1 });
settlementSchema.index({ reference: 1 });

const Settlement = mongoose.model('Settlement', settlementSchema);

export default Settlement;

