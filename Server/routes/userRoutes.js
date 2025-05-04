const express = require('express');

const authController = require('../controlers/authController.js');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.protect, authController.logout);
router.get('/me', authController.protect, authController.getMe, authController.getSingleUser);

module.exports = router;