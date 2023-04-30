const mysql = require('mysql');
const host = ''; //informar host 
const user = ''; //informar usuário
const password = ''; //informar senha
const database = ''; //informar nome do banco de dados

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