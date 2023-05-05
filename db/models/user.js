"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate() {}
  }
  User.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
