const {DataTypes, Model} = require('sequelize');

module.exports = database => {
    class TaskMessages extends Model { }

    TaskMessages.init({
        messageId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        messageContent: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize: database,
        modelName: 'TaskMessage'
    });
    return TaskMessages;
}