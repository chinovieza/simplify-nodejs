const express = require('express');
const app = express();

const students1 = [
    {id: 1, name: 'Monkey D. Luffy'},
    {id: 2, name: 'Roronoa Zoro'},
    {id: 3, name: 'Nami'},
    {id: 4, name: 'Sanji'}
];

const students2 = [
    {id: 1, name: 'Tanjiro Kamado'},
    {id: 2, name: 'Nezuko Kamado'},
    {id: 3, name: 'Zenitsu Agatsuma'},
    {id: 4, name: 'Inosuke Hashibira'}
];

const schools = {
    'onepiece': students1,
    'kimetsu-no-yaiba': students2
};

app.get('/api/:school', function(req, res) {
    const school = req.params.school.toLowerCase();
    if (school == 'onepiece') {
        res.send(students1);
    } else if (school == 'kimetsu-no-yaiba') {
        res.send(students2);
    } else {
        res.send({error : '404 not found'});
    }
});

app.get('/api/:school/:id', function(req, res) {
    const id = req.params.id;
    const schoolName = req.params.school.toLowerCase();
    
    if (!schools[schoolName]) {
        res.send({error : '404 not found (school)'});
    } else if (schools[schoolName][id-1]) {
        res.send(schools[schoolName][id-1]);
    } else {
        res.send({error : `404 not found (student: ${id})`});
    }

});

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Listening on port : ${port}`);
});