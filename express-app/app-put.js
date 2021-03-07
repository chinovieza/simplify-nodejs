const express = require('express');
const app = express();

const students = [
    {id: 1, name: 'Monkey D. Luffy'},
    {id: 2, name: 'Roronoa Zoro'},
    {id: 3, name: 'Nami'},
    {id: 4, name: 'Sanji'}
];

app.use(express.json());

app.put('/api/update/:id', function(req, res) {

    const id = req.params.id;
    const name = req.body.name;

    if (name.length <= 2 || isNaN(id)) {
        res.status(400).send('Error can not update student!');
    } else {

        const student = students.find(i => i.id === parseInt(id));
        if (student) {
            student.name = name
            res.send(students);
        } else {
            res.status(400).send('Error can not find student to update!');
        }
        
    }
    
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Listening on port : ${port}`);
});