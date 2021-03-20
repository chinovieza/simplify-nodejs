const express = require('express');
const fs = require('fs');
const cityApi = require('./api/city');
const coordinateApi = require('./api/coordinate');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.json());

app.get('/', function(req, res) {
    fs.readFile('./th-city.json', (err, data) => {
        const listObj = JSON.parse(data);
        if (err) {
            res.status(400).send("Error list nof found");
        } else {
            res.status(200).render('home', {lists: listObj});
        }
    });
});

app.get('/api/forcast', function(req, res) {
    res.send("Weather forcast result");
});

app.get('/api/coordinate', function(req, res) {
    const longitude = req.query.lon !== "" ? req.query.lon : "0";
    const latitude = req.query.lat !== "" ? req.query.lat : "0";
    if (longitude == null || latitude == null) {
        const err = 'Error';
        res.status(400).render('notfound', {forcastObj: err});
    } else {
        const resultData = coordinateApi(longitude, latitude)
        .then((result) => {
            res.status(200).render('forcast', {forcastObj: result.data});
        })
        .catch((err) => {
            res.status(400).render('notfound', {forcastObj: err});
        })
    }
});

app.get('/api/city', function(req, res) {
    const city = req.query.city !== "" ? req.query.city : "Bangkok";
    const country = "TH";
    if (city == null || country == null) {
        const err = 'Error';
        res.status(400).render('notfound', {forcastObj: err});
    } else {
        const resultData = cityApi(city, country)
        .then((result) => {
            res.status(200).render('forcast', {forcastObj: result.data});
        })
        .catch((err) => {
            res.status(400).render('notfound', {forcastObj: err});
        })
    }
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});

