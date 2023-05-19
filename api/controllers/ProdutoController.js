const ProdutoService = require('../services/ProdutoService')

const produtoService = new ProdutoService()

class ProdutoController {
    static async criaProduto(req,res){
        const novoProduto = req.body

        try{
            const produto = await produtoService.criaProduto(novoProduto)
    
            res.status(201).send(produto)
        }catch(error){
            res.status(400).send( {message: error.message} )
        }
    }

    static async pegaTodosOsProdutos(req,res){
        try{
            const todosOsProdutos = await produtoService.pegaTodosOsProdutos()
            res.status(201).send(todosOsProdutos)
        }catch(error){
            res.status(400).send( {message: error.message} )
        }
    }

    static async pegaUmProduto(req,res){
        try{
            const { id } = req.params
            const umProduto = await produtoService.pegaUmProduto(id)
            res.status(201).send(umProduto)
        }catch(error){
            res.status(400).send({message: error.message})
        }
    }

    static async apagaUmProduto(req,res){
        try {
            const { id } = req.params
            await produtoService.apagaUmProduto(id)
            res.status(200).send({message: 'Produto deletado com sucesso'})
        }catch(error){
            res.status(400).send({message: error.message})
        }
    }

    static async atualizaProduto(req,res){
        const { id } = req.params
        const { nome, descricao, valor, quantidade_estoque } = req.body
        try{
            const produtoAtualizado = await produtoService.atualizaProduto({ id, nome, descricao, valor, quantidade_estoque })
            res.status(200).json(produtoAtualizado)
        }catch(error){
            res.status(400).send({ message: error.message })
        }
    }
}

module.exports = ProdutoController