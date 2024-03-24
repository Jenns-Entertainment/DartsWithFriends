const db = require('./db.service');
const Player = require('../data/player.data');
const crypto = require("crypto");


async function create(player){
    const result = await db.query(
        `INSERT INTO player 
    (email,nickname,password) 
    VALUES 
    (?, ?, ?)`,
        [
            player.email, player.nickname,
            player.password
        ]
    );


    let message = 'Error in creating player';

    if (result.affectedRows) {
        message = 'Player created successfully';
    }

    return {message};
}

async function get_by_email(email){
    const result = await db.query(
        `SELECT player.pk_player_id,player.email,player.nickname FROM player
         WHERE player.email=?`,
        [
            email
        ]
    );

    if (result.length === 0){
        return null
    }

    let player = new Player(result[0])

    return {player}
}

async function get_by_id(id){
    const result = await db.query(
        `SELECT player.pk_player_id,player.email,player.nickname FROM player
         WHERE player.pk_player_id=?`,
        [
            id
        ]
    );

    if (result.length === 0){
        return {message: 'Could not find player'}
    }

    let player = new Player(result[0])

    return {player}
}

async function update(id, player){
    const result = await db.query(
        `UPDATE player 
    SET player.email=?, player.nickname=?, password=?
    WHERE pk_player_id=?`,
        [
            player.email, player.nickname, player.password,
            id
        ]
    );

    let message = 'Error in updating player';

    if (result.affectedRows) {
        message = 'Player updated successfully';
    }

    return {message};
}

async function remove(id){

    let mail = crypto.randomBytes(10).toString('hex') + "@deleted.de";

    // TODO: Pass new password through hash function
    let password = crypto.randomBytes(20).toString('hex');

    const result = await db.query(
        `UPDATE player
         SET player.email=?, player.nickname='player_deleted', password=?
         WHERE pk_player_id=?`,
        [mail, password, id]
    );

    let message = 'Error in deleting player';

    if (result.affectedRows) {
        message = 'Player deleted successfully';
    }

    return {message};
}

module.exports = {
    create,
    get_by_email,
    get_by_id,
    update,
    remove
}