// carro controller

const App = require('../app');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let feedbacks = await App.buscarTodos();

        for(let i in feedbacks){
            json.result.push({
                name: feedbacks[i].name,
                email: feedbacks[i].email,
                rating: feedbacks[i].rating,
                message: feedbacks[i].message
            });
        }

        res.json(json);
    },
    inserirFeedback: async(req, res) => {
        let json = {error:'', result:{}};

        let name = req.body.name;
        let email = req.body.email;
        let rating = req.body.rating;
        let message = req.body.message;


        if (name && email && rating && message){
            let feedbackCodigo = await App.inserirFeedback(name, email, rating, message);
            json.result = {
                codigo: feedbackCodigo,
                name,
                email,
                rating,
                message
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    }
}