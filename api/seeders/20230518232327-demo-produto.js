'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Produtos', [{
          nome: 'Produto Teste',
          descricao: 'Descrição Teste',
          valor: 29.99,
          quantidade_estoque: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
      },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Produtos', null, {});
  }
};
