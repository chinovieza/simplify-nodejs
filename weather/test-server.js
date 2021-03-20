const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("Hello Homepage");
});

app.get('/api/forcast', function(req, res) {
    res.send("Weather forcast result");
});

app.get('/api/coordinate', function(req, res) {
    res.send("Weather forcast from coordinate");
});

app.get('/api/city', function(req, res) {
    res.send("Weather forcast from city");
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});