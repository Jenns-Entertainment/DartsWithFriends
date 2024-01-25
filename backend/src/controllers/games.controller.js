const games = require('../services/games.service');

async function create(req, res, next) {
    try {
        res.json(await games.create(req.body));
    } catch (err) {
        console.error(`Error while creating game`, err.message);
        next(err);
    }
}

async function get(req, res, next) {
    try {
        res.json(await games.get_by_id(req.query.id));

    } catch (err) {
        console.error(`Error while getting game`, err.message);
        next(err);
    }
}

module.exports = {
    create,
    get
};