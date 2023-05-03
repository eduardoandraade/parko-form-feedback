const express = require('express');
const router = express.Router();

const controllers = require('./requests/controllers')

router.get('/feedbacks', controllers.buscarTodos);
router.post('/feedbacks', controllers.inserirFeedback);
router.delete('/feedbacks/:id', controllers.excluir);

module.exports = router;