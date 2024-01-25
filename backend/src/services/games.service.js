const db = require('./db.service');

async function create(game){
    const result = await db.query(
        `INSERT INTO game 
    (fk_game_type_id,date,amount_sets,amount_legs,fk_winner_id) 
    VALUES 
    (?, ?, ?, ?, ?)`,
        [
            game.game_type_id, game.date, game.amount_sets,
            game.amount_legs, player.winner_id
        ]
    );


    let message = 'Error in creating game';

    if (result.affectedRows) {
        message = 'Game created successfully';
    }

    return {message};
}

async function get_by_id(id){
    const result = await db.query(
        `SELECT game.pk_game_id, game.fk_game_type_id, game.date,
       game.amount_sets, game.amount_legs, game.fk_winner_id FROM game
         WHERE game.pk_game_id=?`,
        [
            id
        ]
    );

    let answer = 'Could not find game';

    if (result.length > 0){
        answer = result[0]
    }

    return {answer};
}

module.exports = {
    create,
    get_by_id
}