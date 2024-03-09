const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const namesData = require('./routes/add-name');
const listOfUsersData = require('./routes/users-list');

app.use(listOfUsersData.routes);
app.use(namesData.routes);

app.use((req, res, next) => {
    res.status(404).render('404', {
        message: '404 - Page not found',
        pageTitle: 'Page not found'})
})


app.listen(3000)