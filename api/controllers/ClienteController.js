const ClienteService = require('../services/ClienteService')

const clienteService = new ClienteService()

class ClienteController {
    static async criaCliente(req,res) {
        const novoCliente = req.body

        try{
            const cliente = await clienteService.criaCliente(novoCliente)
    
            res.status(201).send(cliente)
        }catch(error){
            res.status(400).send( {message: error.message} )
        }

    }

    static async pegaTodosOsClientes(req,res){
        try{
            const todosOsClientes = await clienteService.pegaTodosOsClientes()
            res.status(201).send(todosOsClientes)
        }catch(error){
            res.status(400).send( {message: error.message} )
        }
    }

    static async pegaUmCliente(req,res){
        try{
            const { id } = req.params
            const umCliente = await clienteService.pegaUmCliente(id)
            res.status(201).send(umCliente)
        }catch(error){
            res.status(400).send({message: error.message})
        }
    }

    static async apagaUmCliente(req,res){
        try {
            const { id } = req.params
            await clienteService.apagaUmCliente(id)
            res.status(200).send({message: 'Cliente deletado com sucesso'})
        }catch(error){
            res.status(400).send({message: error.message})
        }
    }

    static async atualizaCliente(req,res){
        const { id } = req.params
        const { nome, email, telefone, cpf, cep, complemento } = req.body
        try{
            const clienteAtualizado = await clienteService.atualizaCliente({ id, nome, email, telefone, cpf, cep, complemento })
            res.status(200).json(clienteAtualizado)
        }catch(error){
            res.status(400).send({ message: error.message })
        }
    }
}

module.exports = ClienteController