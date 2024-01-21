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
        res.json(await players.get(req.query.email));
    } catch (err) {
        console.error(`Error while getting player`, err.message);
        next(err);
    }
}

module.exports = {
    create,
    get
};