const express = require('express');
const app = express();

app.get('/api/:school/:id', function(req, res) {
    const data = req.params;
    if (data) {
        res.send(data);
    } else {
        res.send({error : '404 not found'});
    }
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Listenting on port : ${port} (app-params)`);
});