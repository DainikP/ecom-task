const processPayment = require('../utils/paymentGateway');

exports.processPayment = async (req, res) => {
  const paymentDetails = req.body;
  try {
    const result = await processPayment(paymentDetails);
    if (!result.success) return res.status(400).json({ error: 'Payment failed' });

    res.status(200).json({ message: 'Payment successful', transactionId: result.transactionId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};