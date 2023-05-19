'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Compras.belongsTo(models.Clientes, {
        foreignKey: 'cliente_id'
      })
      Compras.belongsTo(models.Produtos, {
        foreignKey: 'produto_id'
      })
    }
  }
  Compras.init({
    data_pedido: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Compras',
  });
  return Compras;
};