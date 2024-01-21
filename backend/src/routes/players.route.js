const express = require('express');
const router = express.Router();
const playerController = require('../controllers/player.controller');

/* POST programming language */
router.post('/', playerController.create);
router.get('/', playerController.get);

module.exports = router;