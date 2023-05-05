"use strict";
const { Model } = require("sequelize");
// const carddec = require("./carddec");

module.exports = (sequelize, DataTypes) => {
  class card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ cardDec }) {
      this.belongsTo(cardDec, { foreignKey: "id" });
    }
  }
  card.init(
    {
      questions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      decId: {
        type: DataTypes.INTEGER,
        references: { model: "carDecs" },
      },
    },
    {
      sequelize,
      modelName: "card",
    }
  );
  return card;
};
