const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection.js');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = post;