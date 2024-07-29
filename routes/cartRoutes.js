const express = require('express');
const router = express.Router();
const { addToCart, getCart, placeOrder, getOrders } = require('../controllers/cartController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.post('/', authMiddleware, addToCart);
router.get('/', authMiddleware, getCart);
router.post('/orders', authMiddleware, placeOrder);
router.get('/orders', authMiddleware, getOrders);

module.exports = router;