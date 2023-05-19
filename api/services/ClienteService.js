const database = require('../models')
const { hash } = require('bcryptjs')
const { v4: uuidv4 } = require('uuid')

class ClienteService {
    async criaCliente(dto) {
        const cliente = await database.Clientes.findOne( { where: { email: dto.email } } )

        if (cliente) {
            throw new Error('Cliente já cadastrado')
        }

        try{
            const senhaHash = await hash(dto.senha, 8)
    
            const novoCliente = await database.Clientes.create({
                id: uuidv4(),
                nome: dto.nome,
                email: dto.email,
                senha: senhaHash,
                telefone: dto.telefone,
                cpf: dto.cpf,
                cep: dto.cep,
                complemento: dto.complemento
            })
    
            return novoCliente
        }catch(error){
            throw new Error('Erro ao cadastrar cliente: ' + error.message)
        }

    }

    async pegaTodosOsClientes(){
        try{
            const todosOsClientes = await database.Clientes.findAll()
            return todosOsClientes
        }catch(error){
            throw error.message
        }
    }

    async pegaUmCliente(id){
        const umCliente = await database.Clientes.findOne({ where: { id: id } })
        if (!umCliente){
            throw new Error('Cliente informado não cadastrado.')
        }
        return umCliente
    }

    async apagaUmCliente(id){
        const apagaCliente = await database.Clientes.findOne({ where:{ id:id } })
        if(!apagaCliente){
            throw new Error('Cliente informado não cadastrado.')
        }
        try{
            await database.Clientes.destroy({ where:{ id:id } })
        }catch(error){
            throw error.message
        }
    }

    async atualizaCliente(dto){
        const atualizaCliente = await database.Clientes.findOne({ where:{ id: dto.id } })
        if(!atualizaCliente){
            throw new Error('Cliente informado não cadastrado.')
        }

        try{
            atualizaCliente.nome = dto.nome
            atualizaCliente.email = dto.email
            atualizaCliente.telefone = dto.telefone
            atualizaCliente.cpf = dto.cpf
            atualizaCliente.cep = dto.cep
            atualizaCliente.complemento = dto.complemento
            await atualizaCliente.save()
            return await atualizaCliente.reload()
        }catch(error){
            throw error
        }
    }
}

module.exports = ClienteService