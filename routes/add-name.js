const express = require('express');

const router = express.Router();

const users = [];

router.get('/',(req, res, next) => {
    res.render('add-name', {
        pageTitle: 'Add Name',
    })
});

router.post('/add-name',(req, res, next) => {
    users.push({username: req.body.username});
    res.render('add-name', {
        pageTitle: 'Add Name',
    })
});


exports.routes = router; 
exports.users = users;