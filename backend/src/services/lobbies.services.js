const db = require('./db.service'); //DB Service Import
const express = require('express'); //Express Import

const app = express();              //Create Express App

// Endpoint to get lobby data
app.get('/api/lobbydata/:gameId', (request, response) => {
    const gameId = request.params.gameId;
    const sql = `
        SELECT                                      
            g.pk_game_id as gameId
            ,gt.pk_game_type_id as gameTypeId
            ,gt.description as gameTypeDescription
            ,g.date as date
            ,g.amount_sets as amountSets
            ,g.amount_legs as amountLegs
        FROM game g
        LEFT JOIN game_type gt ON g.fk_game_type_id = gt.pk_game_type_id
        WHERE g.pk_game_id = ?`;
    db.query(sql, [gameId], (error, results) => {
        if (error) {
            response.status(500).json({message: 'Internal Server Error'});
            throw error;
        }
        response.json(results);
    });
});
