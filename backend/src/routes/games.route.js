const express = require('express');
const router = express.Router();
const gameController = require('../controllers/games.controller');

/* POST programming language */
router.post('/', gameController.create);
router.get('/', gameController.get);

module.exports = router;