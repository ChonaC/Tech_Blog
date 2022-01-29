const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection');

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

module.exports = comment;