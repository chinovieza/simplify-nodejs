const express = require('express');
const app = express();

const students = [
    {id: 1, name: 'Monkey D. Luffy'},
    {id: 2, name: 'Roronoa Zoro'},
    {id: 3, name: 'Nami'},
    {id: 4, name: 'Sanji'}
];

app.use(express.json());

app.delete('/api/delete/:id', function(req, res) {

    const id = req.params.id;
    const confirmId = req.body.confirmId;
    const student = students.find(i => i.id === parseInt(id));

    if (student && confirmId === parseInt(id)) {

        const index = students.indexOf(student);
        students.splice(index, 1);

        // res.send('Delete ' + student.name + ' Successfully!');
        res.send(students);

    } else {
        res.status(400).send('Error can not delete student!');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Listening on port : ${port}`);
});