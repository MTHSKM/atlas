'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Compras', [{
        data_pedido: new Date(),
        cliente_id: '123e4567-e89b-12d3-a456-426655440000',
        produto_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Compras', null, {});
  }
};
