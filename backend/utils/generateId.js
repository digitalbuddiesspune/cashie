import crypto from 'crypto';

export const generateTransactionId = () => {
  return 'TXN' + crypto.randomBytes(8).toString('hex').toUpperCase();
};

export const generateLinkId = () => {
  return 'LINK' + crypto.randomBytes(6).toString('hex').toUpperCase();
};

export const generateInvoiceNumber = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const random = crypto.randomBytes(4).toString('hex').toUpperCase();
  return `INV-${year}${month}-${random}`;
};

export const generateApiKey = () => {
  return 'sk_' + crypto.randomBytes(32).toString('hex');
};

