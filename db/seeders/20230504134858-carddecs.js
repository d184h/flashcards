"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cardDecs",
      [
        {
          subject: "Футбол",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subject: "Принцессы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subject: "Marvel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("carddecs", null, {});
  },
};
