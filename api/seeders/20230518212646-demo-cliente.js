'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Clientes', [{
        id: '123e4567-e89b-12d3-a456-426655440000',
        nome: 'Teste1',
        email: 'Teste1@email.com',
        senha: '11111',
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
