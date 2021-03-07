const express = require('express');
const app = express();

const students = [
    {id: 1, name: 'Monkey D. Luffy'},
    {id: 2, name: 'Roronoa Zoro'},
    {id: 3, name: 'Nami'},
    {id: 4, name: 'Sanji'}
];

app.use(express.json());

app.post('/api/add', function(req, res) {
    const studentName = req.body.name;
    if (students.length <= 2) {
        res.status(400).send('Error can not add student!');
    } else {
        const student = {
            id: students.length + 1,
            name: studentName
        }
        students.push(student);
        res.send(student);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Listening on port : ${port}`);
});