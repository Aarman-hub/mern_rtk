const express = require('express');
const { user, signin, signup, signout } = require('../controllers/auth');

const route = express.Router()

route.get('/me', user);
route.get('/signin', signin);
route.get('/signup', signup);
route.get('/signout', signout);

module.exports = route;