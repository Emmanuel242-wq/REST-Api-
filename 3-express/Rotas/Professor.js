const express = require('express');
const router = express.Router();

// Definição das rotas para professores

// GET
router.get('/', (req, res) => {
  res.send('Rota para listar todos os professores.');
});

// POST
router.post('/cadastro', (req, res) => {
  res.send('Rota para cadastrar um novo professor.');
});

// PUT
router.put('/atualizacao', (req, res) => {
  res.send('Rota para atualizar os dados de um professor.');
});

// DELETE
router.delete('/remocao', (req, res) => {
  res.send('Rota para remover um professor.');
});

// Exportar rotas
module.exports = router;
