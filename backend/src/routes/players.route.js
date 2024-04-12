const express = require('express');
const router = express.Router();
const playerController = require('../controllers/player.controller');

/* POST programming language */
router.get('/', playerController.get);
router.get('/current', playerController.get_current_player);
router.put('/:id', playerController.update);
router.delete('/:id', playerController.remove);

module.exports = router;