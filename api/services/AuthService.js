const database = require('../models')
const { compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const jsonSecret = require('../config/jsonSecret')

class AuthService {
    async login(dto){
        const cliente = await database.Clientes.findOne({
            attributes: ['id', 'email', 'senha'],
            where: {
                email: dto.email
            }
        })

        if (!cliente){
            throw new Error('Cliente não Cadastrado')
        }

        const senhaIguais = await compare(dto.senha, cliente.senha)

        if (!senhaIguais) {
            throw new Error('Cliente ou Senha inválido')
        }

        const accessToken = sign({
            id: cliente.id,
            email: cliente.email
        },jsonSecret.secret, {
            expiresIn: 86400
        })

        return { accessToken }
    }
}

module.exports = AuthService