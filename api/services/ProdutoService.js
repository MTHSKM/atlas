const database = require('../models')

class ProdutoService {
    async criaProduto(dto){
        try{
            const novoProduto = await database.Produtos.create({
                nome: dto.nome,
                descricao: dto.descricao,
                valor: dto.valor,
                quantidade_estoque: dto.quantidade_estoque,
                imagem: dto.imagem
            })

            return novoProduto
        }catch(error){
            throw new Error('Erro ao cadastrar produto: ' + error.message)
        }
    }

    async pegaTodosOsProdutos(){
        try{
            const todososProdutos = await database.Produtos.findAll()
            return todososProdutos
        }catch(error){
            throw error.message
        }
    }

    async pegaUmProduto(id){
        const umProduto = await database.Produtos.findOne({ where: { id: id } })
        if (!umProduto){
            throw new Error('Produto informado não cadastrado.')
        }
        return umProduto
    }

    async apagaUmProduto(id){
        const apagaProduto = await database.Produtos.findOne({ where:{ id:id } })
        if(!apagaProduto){
            throw new Error('Produto informado não cadastrado.')
        }
        try{
            await database.Produtos.destroy({ where:{ id:id } })
        }catch(error){
            throw error.message
        }
    }

    async atualizaProduto(dto){
        const atualizaProduto = await database.Produtos.findOne({ where:{ id: dto.id } })
        if(!atualizaProduto){
            throw new Error('Produto informado não cadastrado.')
        }

        try{
            atualizaProduto.nome = dto.nome
            atualizaProduto.descricao = dto.descricao
            atualizaProduto.valor = dto.valor
            atualizaProduto.quantidade_estoque = dto.quantidade_estoque
            atualizaProduto.imagem = dto.imagem
            await atualizaProduto.save()
            return await atualizaProduto.reload()
        }catch(error){
            throw error.message
        }
    }
}

module.exports = ProdutoService