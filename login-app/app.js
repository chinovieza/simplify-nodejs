const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(authRoute);
const port = process.env.port || 3000;
app.listen(port, function() {
    console.log('Listening on port', port);
});