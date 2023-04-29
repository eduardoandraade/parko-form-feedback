const express = require('express');
const recuperarDados = express();

// app.use(express.static(__dirname + '/'));

recuperarDados.get('/', (req, res)=>{
    res.send('Teste');
});

module.exports = recuperarDados;
