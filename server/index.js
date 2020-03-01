const express = require('express');
const app = express();
const firestore = require('./apis/database/firebase/index');

var server = app.listen(process.env.PORT, function() {
    console.log('Express server has started on port : ' + process.env.PORT);
});

app.get('/', (req, res) => {
    res.send('server');
    console.log('server');
});

app.get('/firestore/:num', (req, res) => {
    firestore.testInput(req.params.num);
    res.send(`firestore : ${req.params.num}`);
});
