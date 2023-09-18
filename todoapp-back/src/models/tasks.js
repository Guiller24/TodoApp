const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Tasks = sequelize.define('Tasks', {
    task_id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id:{ type:DataTypes.INTEGER, },
    task: {type:DataTypes.STRING, allowNull:false},
    description: {type:DataTypes.STRING, allowNull:true},
    due_date: {type:DataTypes.DATE},
    status: {type:DataTypes.STRING, allowNull:false, defaultValue: 'pending'},
}, {
    timestamps: false,
    tableName: 'tasks',
});

module.exports = Tasks;