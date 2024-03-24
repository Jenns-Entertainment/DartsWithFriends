const express = require("express");
require('dotenv').config({ path: '../.env' })
const PORT = process.env.BACKEND_PORT || 3000;
const playersRouter = require('./src/routes/players.route');
const gamesRouter = require('./src/routes/games.route');
const authRouter = require('./src/routes/auth.route');

const app = express ();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({'message': 'ok'});
})

app.use('/players', playersRouter);
app.use('/games', gamesRouter);
app.use('/auth', authRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});

    return;
});

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

