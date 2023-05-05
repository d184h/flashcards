"use strict";
const { Model } = require("sequelize");
// const card = require("./card");
module.exports = (sequelize, DataTypes) => {
  class cardDec extends Model {
    static associate({ card }) {
      this.hasMany(card, { foreignKey: "decId" });
    }
  }
  cardDec.init(
    {
      subject: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "cardDec",
    }
  );
  return cardDec;
};
