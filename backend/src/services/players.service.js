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

async function get(email){
    const result = await db.query(
        `SELECT email,nickname,password FROM player
         WHERE email=?`,
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

module.exports = {
    create,
    get
}