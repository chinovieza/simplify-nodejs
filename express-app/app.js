const expressFunction = require('express');
const expressApp = expressFunction();

expressApp.get('/', function(req,res) {
    res.send('Hello World!');
});

expressApp.get('/api/resource', function(req,res) {
    const data = {id: 103, name: 'chino'};
    res.send(data);
});

const port = process.env.PORT || 4000;
expressApp.listen(port, function() {
    console.log(`Listening on port ${port}`);
});