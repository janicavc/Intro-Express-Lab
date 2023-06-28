const express = require('express');

const path = require('path')
// require game database
const gamesDb = require('./data/games-db');
const app = express();

// set
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function (req, res) {
    res.send('<h1>Welcome to the Home Page!</h1>')
});


app.get('/games', function (req, res) {
    res.render('games/index', {
        games: gamesDb.getAll()
    });
});

// listen
app.listen(3001, function () {
    console.log('Listening on port 3001');
});

