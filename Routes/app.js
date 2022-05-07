const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require('../Controllers/user');

app.use(bodyParser.json([]));

app.post('/user', userController.createUser);
app.post('/book', userController.createBook);
app.post('/comment', userController.createComment);
app.post('/login', userController.userLogin);

module.exports = app;