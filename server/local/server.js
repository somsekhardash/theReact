const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, '../../dist') ));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(5001, () => console.log('Example app listening on port 5001!'));