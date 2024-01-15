const express = require('express');
const router = express.Router();
const programmingLanguagesController = require('../controllers/player.controller');

/* POST programming language */
router.post('/', programmingLanguagesController.create);

module.exports = router;