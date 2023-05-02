// app.js na pasta filha src

const db = require ('./db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM feedbacks', (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            })
        })
    },
    inserirFeedback: (name, email, rating, message) => {
        return new Promise((aceito, rejeitado) => {
          db.query(
            'INSERT INTO feedbacks (name, email, rating, message) VALUES (?, ?, ?, ?)',
            [name, email, rating, message],
            (error, results) => {
              if (error) {
                rejeitado(error);
                return;
              }
              aceito(results.insertId);
            }
          );
        });
      }, buscarPorCodigo: (codigo) => {
        return new Promise((aceito, rejeitado) => {
          db.query(
            'SELECT * FROM feedbacks WHERE codigo = ?',
            [codigo],
            (error, results) => {
              if (error) {
                rejeitado(error);
                return;
              }
              if (results.length === 0) {
                rejeitado(new Error('Feedback não encontrado'));
                return;
              }
              aceito(results[0]);
            }
          );
        });
      }
}