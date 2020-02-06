const express = require('express');
const app = express();

var server = app.listen(process.env.PORT, function() {
    console.log('Express server has started on port : ' + process.env.PORT);
});

app.get('/', (req, res) => {
    res.send('server');
    console.log('server');
});
