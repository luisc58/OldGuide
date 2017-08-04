const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // we use the engine pug

//serves up static files from Resources folder
app.use(express.static(path.join(__dirname, 'resources')));

// handle routes
app.use('/', routes);
module.exports = app;
