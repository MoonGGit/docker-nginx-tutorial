const express = require('express');
const app = express();

const port = 3000;

var server = app.listen(port, function() {
    console.log('Express server has started on port : ' + port);
});

app.get('/', (req, res) => {
    res.send('client');
    console.log('client');
});
