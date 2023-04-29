const mysql = require('mysql');
const host = 'localhost';
const user = 'root';
const password = 711098;
const database = 'parko_avaliacao';

const conn = mysql.createConnection({
    host: `${host}`,
    user: `${user}`,
    password: `${password}`,
    database: `${database}`
});

conn.connect(err => {
    if(err){
        console.log(`Erro ao conectar: ${err.message}`);
    }else{
        console.log('Conexão estabelecida com sucesso.');
    }
});

module.exports = conn;