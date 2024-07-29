const express = require('express');
const router = express.Router();
const { register, login, getUser } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/user', getUser);

module.exports = router;