const players = require('../services/players.service');

async function create(req, res, next) {
    try {
        res.json(await players.create(req.body));
    } catch (err) {
        console.error(`Error while creating player`, err.message);
        next(err);
    }
}

module.exports = {
    create
};