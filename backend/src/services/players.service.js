const db = require('./db.service');

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
        `SELECT player.pk_player_id,player.email,player.nickname,player.password FROM player
         WHERE player.email=?`,
        [
            email
        ]
    );

    let answer = 'Could not find player';

    if (result.length > 0){
        answer = result[0]
    }

    return {answer};
}

async function get_by_id(id){
    const result = await db.query(
        `SELECT player.pk_player_id,player.email,player.nickname,player.password FROM player
         WHERE player.pk_player_id=?`,
        [
            id
        ]
    );

    let answer = 'Could not find player';

    if (result.length > 0){
        answer = result[0]
    }

    return {answer};
}

module.exports = {
    create,
    get_by_email,
    get_by_id
}