const express = require('express');
const inserirDados = express();
const bodyParser = require('body-parser');
const conn = require('../database/connect');
const mysql = require('mysql');
const fs = require('fs');

// app.use(express.static(__dirname + '/'));
inserirDados.use(bodyParser.urlencoded({ extended: false }));
inserirDados.use(bodyParser.json());

inserirDados.post('/', (req, res) => {
    // res.end(JSON.stringify(req.body.dataRating));

    const name = (req.body.name);
    const email = (req.body.email);
    const dataRating = (req.body.dataRating);
    const message = (req.body.message);

    const sql = `INSERT INTO "informar o nome da tabela" (nome, email, rating, msg) VALUES (${mysql.escape(name)}, ${mysql.escape(email)}, ${mysql.escape(dataRating)}, ${mysql.escape(message)})`;
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(`Erro ao inserir dados: ${err.message}`);
        } else {
            fs.readFile('pages/sucesso.html', (err, data) => {
                if(err){
                    console.log(`Erro: ${err.message}`);
                }else{
                    res.write(data);
                    console.log(`Dados inseridos com sucesso: ${result}`);
                    res.end();
                }
            })
        }
    })
});

module.exports = inserirDados;
