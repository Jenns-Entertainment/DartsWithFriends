const express = require('express');
const router = express.Router();
const playerController = require('../controllers/player.controller');

/* POST programming language */
router.post('/', playerController.register);
router.get('/', playerController.get);
router.get('/login', playerController.login);
router.put('/:id', playerController.update);
router.delete('/:id', playerController.remove);

module.exports = router;