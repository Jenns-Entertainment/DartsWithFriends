const players = require('../services/players.service');

async function create(req, res, next) {
    try {
        res.json(await players.create(req.body));
    } catch (err) {
        console.error(`Error while creating player`, err.message);
        next(err);
    }
}

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
    create,
    get,
    update,
    remove
};