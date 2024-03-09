const express = require('express');

const namesData = require('./add-name');

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.render('users-list', {
        pageTitle: 'Users',
        users: namesData.users})
})

exports.routes = router; 