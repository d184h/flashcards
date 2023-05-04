"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
        references: { model: "Users" },
      },
    },
    {
      sequelize,
      modelName: "card",
    }
  );
  return card;
};
