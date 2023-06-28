const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('<h1>Welcome to the Home Page!</h1>')
});

app.listen(3001, function () {
    console.log('Listening on port 3001');
});