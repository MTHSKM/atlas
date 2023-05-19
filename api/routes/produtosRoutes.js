const { Router } = require('express')
const ProdutoController = require('../controllers/ProdutoController')

const router = Router()

router
    .post('/produtos', ProdutoController.criaProduto)
    .get('/produtos', ProdutoController.pegaTodosOsProdutos)
    .get('/produtos/:id', ProdutoController.pegaUmProduto)
    .put('/produtos/:id', ProdutoController.atualizaProduto)
    .delete('/produtos/:id', ProdutoController.apagaUmProduto)

module.exports = router