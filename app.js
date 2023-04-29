const express = require('express');
const app = express();
// var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

const inserirDados = require('./routes/inserirDados');
const recuperarDados = require('./routes/recuperarDados');

app.use('/inserir', inserirDados);
app.use('/recuperar', recuperarDados);

module.exports = app;