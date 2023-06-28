const express = require('express');
const app = express();

const path = require('path')
// require game database
const gamesDb = require('./data/games-db');

// set
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/home', function (req, res) {
    res.render('home')
})


app.get('/', function (req, res) {
    res.redirect('/games')
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

