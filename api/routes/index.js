const bodyParser = require('body-parser')
const clientes = require('./clientesRoutes')
const produtos = require('./produtosRoutes')

module.exports = app => {
    app.use(
        bodyParser.json(),
        clientes,
        produtos
        )
}