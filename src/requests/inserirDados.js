// arquivo inserirDados.js na pasta requests

const App = require('../app');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        try {
            const feedbacks = await App.buscarTodos();
            json.result = feedbacks.map(feedback => ({
                name: feedback.name,
                email: feedback.email,
                rating: feedback.rating,
                message: feedback.message
            }));
        } catch (error) {
            json.error = error.message;
        }
        res.json(json);
    },
    inserirFeedback: async(req, res) => {
        let json = {error:'', result:{}};

        let name = req.body.name;
        let email = req.body.email;
        let rating = req.body.rating;
        let message = req.body.message;


        if (!name) {
            json.error = 'Nome não enviado';
        } else if (!email) {
            json.error = 'E-mail não enviado';
        } else if (!rating) {
            json.error = 'Avaliação não enviada';
        } else if (!message) {
            json.error = 'Mensagem não enviada';
        } else {
            let feedbackCodigo = await App.inserirFeedback(name, email, rating, message);
            json.result = {
                codigo: feedbackCodigo,
                name,
                email,
                rating,
                message
            };
        }
        res.json(json);
    }
}