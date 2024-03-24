const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

/* POST programming language */
router.post('/', authController.register);
router.post('/login', authController.login);
router.get('/session_content', authController.session_content);

module.exports = router;