'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'files', [
      {
        id: 1,
        name: 'OBJ'
      },
      {
        id: 2,
        name: 'FBX'
      },
      {
        id: 3,
        name: 'STL'
      },
      {
        id: 4,
        name: 'IGES'
      },
      {
        id: 5,
        name: 'AMF'
      },
    ], {});
    
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete("files", null, {});
     
  }
};
