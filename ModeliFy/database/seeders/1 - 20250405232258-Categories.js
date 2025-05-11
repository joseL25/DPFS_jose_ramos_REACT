'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'categories', [
      {
        id: 1,
        name:'esculpido'
      },
      {
        id: 2,
        name:'solido'
      },
      {
        id: 3,
        name:'superficie'
      },
      {
        id: 4,
        name:'procedimental'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete("categories", null, {});

  }
};
