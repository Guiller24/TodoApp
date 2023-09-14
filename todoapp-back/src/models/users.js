const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Users = sequelize.define('Users', {
    user_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {type: DataTypes.STRING, allownull: false},
    firstname: {type: DataTypes.STRING, allownull: false},
    lastname: {type: DataTypes.STRING, allownull: false},
    email: {type: DataTypes.STRING, allownull: false, unique: true},
    password: {type: DataTypes.STRING},
    created_at:{type: DataTypes.DATE},
}, {
    timestamps: false,
    tableName: 'users',
});

module.exports = Users;
