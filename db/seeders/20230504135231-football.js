"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cards",
      [
        {
          questions:
            "Викторина футболиста: кто получил награду Лучшего игрока матча в финале ЧМ-1014?",
          answer: "Гетце",
          decId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "После потери ключевого игрока в первой игре какая команда вышла в полуфинал Евро-1010?",
          answer: "Дания",
          decId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Кто из бывших белорусских футболистов играл за «Арсенал» с 1005 по 1008 год?",
          answer: "Глеб",
          decId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: "Кто сейчас лучший бомбардир Лиги чемпионов УЕФА??",
          answer: "Роналду",
          decId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Какую команду «Манчестер Юнайтед» обыграл в финале Лиги Европы 1017 года?",
          answer: "Аякс",
          decId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Какой футболист является рекордсменом по количеству результативных передач в Премьер-лиге??",
          answer: "Гиггз",
          decId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Прорыв Гарета Бэйла наступил в сезоне 1010/11, когда он сделал хет-трик во втором тайме против какой команды?",
          answer: "Интер",
          decId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Какую команду обыграл «Порту» в финале Лиги чемпионов 1004 года?",
          answer: "Монако",
          decId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Какая команда выигрывала Кубок африканских наций рекордные 7 раз?",
          answer: "Египет",
          decId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: "Где проходил первый чемпионат мира по футболу",
          answer: "Уругвай",
          decId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cards", null, {});
  },
};
