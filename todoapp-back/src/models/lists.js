const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Lists = sequelize.define('Lists', {
    list_id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id:{type:DataTypes.INTEGER},
    list_name: {type:DataTypes.STRING},
    list_description:{type:DataTypes.STRING, allowNull: true,},
},{
    timestamps: false,
    tableName: 'lists',
});

module.exports = Lists;