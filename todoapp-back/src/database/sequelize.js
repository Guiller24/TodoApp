const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todoapp', 'root', 'admin', {
    host:'localhost',
    dialect:'mysql',
});

module.exports = sequelize;