const express = require('express');
const app = express();

app.use(function(req, res, next) {
    console.log('Hello Middleware!');
    next();
});

app.use('/', function(req,res) {
    console.log('Hello Express!!');
    res.send('<h1>Hello Express!!</h1>');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
})

