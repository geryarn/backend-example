const Sequelize = require("sequelize");
const productModel = require("./product.model");

require("dotenv").config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.product = productModel.productModel(sequelize, Sequelize);

module.exports = db;
