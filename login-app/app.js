const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const homeController = require('./controllers/home-controller');
const pageNotFoundController = require('./controllers/page-not-found-controller');
const app = express();
const port = process.env.port || 3000;
const connectionString = process.env.MONGODB_CONNECTION;
const mongooseConfig = {autoIndex: true, useNewUrlParser: true};

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(authRoute);
app.get('/', homeController);
app.get('*', pageNotFoundController);

mongoose.connect(connectionString, mongooseConfig)
.then(() => console.log('Connected to MongoDB ...'))
.catch(err => console.log('Cannot connect to MongoDB : ', err));

app.listen(port, function() {
    console.log('Listening on port', port);
});