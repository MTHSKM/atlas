const { Router } = require('express')
const ClienteController = require('../controllers/ClienteController')
const autenticado = require('../middleware/autenticado')

const router = Router()

router
    .post('/clientes', ClienteController.criaCliente)

router.use(autenticado)

router
    .get('/clientes', ClienteController.pegaTodosOsClientes)
    .get('/clientes/:id', ClienteController.pegaUmCliente)
    .put('/clientes/:id', ClienteController.atualizaCliente)
    .delete('/clientes/:id', ClienteController.apagaUmCliente)

module.exports = router