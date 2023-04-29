const express = require('express');
const inserirDados = express();
const bodyParser = require('body-parser');
const conn = require('../database/connect');

// app.use(express.static(__dirname + '/'));
inserirDados.use(bodyParser.urlencoded({ extended: false }));
inserirDados.use(bodyParser.json());

inserirDados.get('/', (req, res) => {
    // res.setHeader('Content-Type', 'text/html')
    // res.end(JSON.stringify(req.body));
    // console.log(conn);

    const sql = 'INSERT INTO avaliacao (nome, email, msg) VALUES ("Willyan Carlos", "willyan@teste.com.br", "Satisfeito com o aprendizado")';
    conn.query(sql, (err, result) => {
        if(err){
            console.log(`Erro ao inserir dados: ${err.message}`);
        }else{
            console.log(`Sucesso ao inserir dados: ${result}`);
        }
    })
    
    conn.end();
    
    res.end();
});

module.exports = inserirDados;
