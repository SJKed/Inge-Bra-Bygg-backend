const { DataTypes, Model } = require('sequelize');

module.exports = database => {
    class Tasks extends Model { }
    Tasks.init({
        taskId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        taskName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        taskDescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        taskStatus: {
            type: DataTypes.STRING,
            allowNull: false
        },
        taskImage: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
        , {
            sequelize: database,
            modelName: 'Task'
        });
    return Tasks;
}

