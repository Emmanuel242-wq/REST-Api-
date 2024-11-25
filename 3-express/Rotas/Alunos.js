const express = require('express');
const router = express.Router();

// Definição das rotas para alunos

// GET
router.get('/', (req, res) => {
  res.send('Rota para listar todos os alunos.');
});

// POST
router.post('/cadastro', (req, res) => {
  res.send('Rota para cadastrar um novo aluno.');
});

// PUT
router.put('/atualizacao', (req, res) => {
  res.send('Rota para atualizar os dados de um aluno.');
});

// DELETE
router.delete('/remocao', (req, res) => {
  res.send('Rota para remover um aluno.');
});

// Exportar rotas
module.exports = router;
