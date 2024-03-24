const express = require("express");
const session = require('express-session')
require('dotenv').config({ path: '../.env' })
const PORT = process.env.BACKEND_PORT || 3000;
const playersRouter = require('./src/routes/players.route');
const gamesRouter = require('./src/routes/games.route');
const authRouter = require('./src/routes/auth.route');

const app = express ();
app.use(express.json());

/*
    FIXME: This uses the default in Memory store, this leaks memory and can only be used for developing,
    for any productive use another session store has to be integrated
 */
app.use(session({
    // FIXME: This is not an acceptable secret
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

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

