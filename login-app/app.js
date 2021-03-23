const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const homeController = require('./controllers/home-controller');
const pageNotFoundController = require('./controllers/page-not-found-controller');
const port = process.env.port || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(authRoute);
app.get('/', homeController);
app.get('*', pageNotFoundController);

app.listen(port, function() {
    console.log('Listening on port', port);
});