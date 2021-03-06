const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const TaskMessage = db.define("TaskMessage", {
    messageId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    messageContent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    taskId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = TaskMessage