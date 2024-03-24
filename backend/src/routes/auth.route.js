const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

/* POST programming language */
router.post('/', authController.register);
router.get('/login', authController.login);

module.exports = router;