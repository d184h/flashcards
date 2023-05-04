'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('carddecs', [{
        subject: 'Футбол',
      }], {});
  
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('carddecs', null, {});
    
  }
};
