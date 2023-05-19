const bodyParser = require('body-parser')
const clientes = require('./clientesRoutes')
const produtos = require('./produtosRoutes')
const auth = require('./authRoutes')

module.exports = app => {
    app.use(
        bodyParser.json(),
        produtos,
        auth,
        clientes
        )
}