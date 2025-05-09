'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcryptjs');

const password = 'ABC123456';
const hashedPassword = bcrypt.hashSync(password, 10);

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      'users', [
        {
        id: 1,
        name: 'Jose',
        lastname: 'Ramos',
        email: 'user@gmail.com',
        password: hashedPassword,
        avatar: 'default.png',
        role: 1,
  }], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users', null, {});
    
  }
};
