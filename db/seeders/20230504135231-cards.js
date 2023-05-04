"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cards",
      [
        {
          questions:
            "Кто получил награду Лучшего игрока матча в финале ЧМ-1014?",
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
          questions: "Кто сейчас лучший бомбардир Лиги чемпионов УЕФА?",
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
            "Какой футболист является рекордсменом по количеству результативных передач в Премьер-лиге?",
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
          questions: "Где проходил первый чемпионат мира по футболу?",
          answer: "Уругвай",
          decId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: "У какой из диснеевских принцесс самые длинные волосы?",
          answer: "Рапунцель",
          decId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: "В какую из знаменитых принцесс был влюблен Аладдин?",
          answer: "Жасмин",
          decId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Как зовут принцессу, единственную дочь короля Стефана и королевы Лии из мультфильма «Спящая красавица»?",
          answer: "Аврора",
          decId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Какая из самых добрых и терпеливых диснеевских принцесс сносила издевательства мачехи и сводных сестер и стала принцессой, выйдя замуж за принца?",
          answer: "Золушка",
          decId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Как зовут китайскую девушку в одном из мультфильмов студии «Дисней», ставшую одной из диснеевских принцесс?",
          answer: "Мулан",
          decId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Как зовут очень храбрую и красивую принцессу-шотландку, дочь короля Фергуса и королевы Элинор?",
          answer: "Мерида",
          decId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Какая из диснеевских принцесс была простой официанткой из Нового Орлеана и стала принцессой, выйдя замуж за принца Навина?",
          answer: "Тиана",
          decId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Какая из принцесс Диснея полюбила и спасла от страшных чар принца Адама? Она же самая начитанная из принцесс и единственная дочь изобретателя Мориса.",
          answer: "Белль",
          decId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: "Как зовут знаменитую диснеевскую принцессу-русалочку?",
          answer: "Ариэль",
          decId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Как зовут первую из принцесс Диснея, у которой было семеро верных друзей небольшого роста?",
          answer: "Белоснежка",
          decId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "В каком году был выпущен первый фильм «Железный человек», начиная с кинематографической вселенной Marvel?",
          answer: "2008",
          decId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Кто был последним держателем Космический камень до того, как Танос потребует его для своей Перчатки Бесконечности?",
          answer: "Локи",
          decId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: "Чем занимается Doctor Strange в области медицины?",
          answer: "Нейрохирург",
          decId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: "Из чего сделан щит Капитана Америки?",
          answer: "Вибраниум",
          decId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: "На какой пост-сцене фильма появился Танос?",
          answer: "Мстители",
          decId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Флеркены - это раса чрезвычайно опасных инопланетян, которая чем-то напоминает?(животных)",
          answer: "Кошки",
          decId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions:
            "Как называется организация, которая захватила ЩИТ в фильме «Первый мститель: Другая война»?",
          answer: "Гидра",
          decId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: "Каково настоящее имя Черной Пантеры?",
          answer: "ТЧалла",
          decId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: "Сколько существует Камней Бесконечности?",
          answer: "6",
          decId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questions: "Какую видеоигру Тор играет в Avengers: Endgame?",
          answer: "Fortnite",
          decId: 3,
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
