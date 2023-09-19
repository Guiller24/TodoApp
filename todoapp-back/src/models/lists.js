const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Lists = sequelize.define('Lists', {
    list_id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id:{type:DataTypes.INTEGER, allowNull: false},
    list_name: {type:DataTypes.STRING, allowNull: false},
    list_description:{type:DataTypes.STRING, allowNull: true,},
},{
    timestamps: false,
    tableName: 'lists',
});

module.exports = Lists;