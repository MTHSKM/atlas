'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_pedido: {
        type: Sequelize.DATE
      },
      cliente_id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
        references: { model: 'Clientes', key: 'id' }
      },
      produto_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Produtos', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Compras');
  }
};