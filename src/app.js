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
      },

      excluir: (id) => {
        return new Promise((aceito, rejeitado)=> {
          db.query('DELETE FROM feedbacks WHERE id = ?', [id], (error, results) =>{
            if(error) { rejeitado(error); return; }
            aceito(results);
          })
        })
      }
}