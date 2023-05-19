'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produtos.hasMany(models.Compras, {
        foreignKey: 'produto_id'
      })
    }
  }
  Produtos.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    quantidade_estoque: DataTypes.INTEGER,
    imagem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};