const express = require('express');
const { signin, signout, signup, getUser } = require('../controllers/auth');

const route = express.Router();

route.get('/me', getUser);
route.post('/signin', signin);
route.post('/signup', signup);
route.get('/signout', signout);

module.exports = route;