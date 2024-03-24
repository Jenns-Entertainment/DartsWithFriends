const players = require('../services/players.service');
const argon2 = require('argon2');

async function register(req, res, next) {
    try {
        let new_player = {}
        new_player.email = req.body.email
        new_player.nickname = req.body.nickname
        new_player.password = await argon2.hash(req.body.password);

        res.json(await players.create(new_player));
    } catch (err) {
        console.error(`Error while creating player`, err.message);
        next(err);
    }
}

async function login(req, res, next) {
    const player = await players.verify(req.body.email,req.body.password)
    if (player != null){
        req.session.player = player;
        res.sendStatus(200);
    }
    else {
        res.sendStatus(404)
    }
}

module.exports = {
    login,
    register
};