const express = require('express');
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'all-views');

app.get('/', function (req, res) {
    // res.status(200).send("Hello World");
    res.render('first_template', {name: 'Monkey D. Luffy'});
});

app.get('/dropdown', function (req, res) {
    fs.readFile('./data.json', (err, data) => {
        const listObj = JSON.parse(data);
        if (err) {
            res.status(400).send('Error list not found');
        } else {
            res.render('second_template', {lists: listObj});
        }
    });
});

app.listen(3000, function () {
    console.log("Listen on port 3000");
});