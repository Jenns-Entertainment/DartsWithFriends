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

module.exports = {
    create
}