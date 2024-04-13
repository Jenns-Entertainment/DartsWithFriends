const players = require('../services/players.service');

async function get(req, res, next) {
    try {
        if(req.query.id !== undefined){
            res.json(await players.get_by_id(req.query.id));
        }
        else if (req.query.email !== undefined){
            res.json(await players.get_by_email(req.query.email));
        }
        else{
            throw new Error('No Parameter provided in request');
        }

    } catch (err) {
        console.error(`Error while getting player`, err.message);
        next(err);
    }
}

async function get_current_player(req, res, next) {
    let player = req.session.player;
    if(player !== undefined){
        res.json(player);
    }
    else {
        res.sendStatus(401)
    }
}

async function update(req, res, next) {
    try {
        res.json(await players.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating player`, err.message);
        next(err);
    }
}

async function remove(req, res, next) {
    try {
        res.json(await players.remove(req.params.id));
    } catch (err) {
        console.error(`Error while removing player`, err.message);
        next(err);
    }
}

module.exports = {
    get,
    update,
    remove,
    get_current_player
};