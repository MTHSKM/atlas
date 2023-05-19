'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Clientes', [{
        nome: 'Teste1',
        email: 'Teste1@email.com',
        telefone: '11111111111',
        cpf: '11111111111',
        cep: '111111111',
        complemento: 'Tesete',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Clientes', null, {});
  }
};
