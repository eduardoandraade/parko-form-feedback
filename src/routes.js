const express = require('express');
const router = express.Router();

const inserirDados = require('./requests/inserirDados')

router.get('/feedbacks', inserirDados.buscarTodos);
router.post('/feedbacks', inserirDados.inserirFeedback);

module.exports = router;