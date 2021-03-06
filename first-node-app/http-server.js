const http = require('http');

const server = http.createServer(function(req, res) {
    var obj = {id:8, username:'chinovieza', email:'chinovieza@gmail.com'};
    
    if (req.url === '/') {
        res.write('You\'re at Homepage');
        res.end();
    }

    if (req.url === '/account') {
        res.write(JSON.stringify(obj));
        res.end();
    }

});

server.addListener('connection', function(socket) {
    console.log('Client Connected');
})
server.listen(3000);
console.log('Listening from port 3000');