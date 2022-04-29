const {Sequelize} = require('sequelize');
const Users = require('./users');
const Tasks = require('./tasks');
const TaskMessages = require('./taskMessage');
const taskMessage = require('./taskMessage');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/ingeBraDB.sqlite'
})

const User = Users(sequelize);
const Task = Tasks(sequelize);
const TaskMessage = TaskMessages(sequelize);

User.hasMany(TaskMessage, {foreignKey: 'userId'});
User.hasMany(Task, {foreignKey: 'clientId'});
User.belongsToMany(Task, {through: 'TaskMessage', foreignKey: 'userId'});
TaskMessage.belongsTo(User, {foreignKey: 'userId'});
Task.belongsToMany(User, {through: 'TaskMessage', foreignKey: 'taskId'});
Task.hasMany(TaskMessage, {foreignKey: 'taskId'});
Task.hasMany(User, {foreignKey: 'taskId'});

module.exports = {
    User,
    Task,
    TaskMessage
};