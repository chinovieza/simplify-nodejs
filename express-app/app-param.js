const express = require('express');
const app = express();

const students = [
    {id: 1, name: 'Lufy'},
    {id: 2, name: 'Solo'},
    {id: 3, name: 'Nami'},
    {id: 4, name: 'Sanji'}
];

app.get('/api/students', function(req, res) {
    res.send(students);
});

app.get('/api/student/:id', function(req, res) {
    const id = req.params.id;
    if (id == 1) {
        res.send(students[0]);
    } else if (id == 2) {
        res.send(students[1]);
    } else if (id == 3) {
        res.send(students[2]);
    } else if (id == 4) {
        res.send(students[3]);
    } else {
        res.send({error : '404 not found'});
    }
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Listening on port : ${port}`);
});