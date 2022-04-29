const User = require('../models/user');
const Task = require('../models/task')
const TaskMessage = require('../models/taskMessage')


module.exports = function setupModels() {
    TaskMessage.belongsTo(User, { foreignKey: 'userId' })
    TaskMessage.belongsTo(Task, { foreignKey: 'taskId' })

    User.hasMany(Task)
    Task.belongsTo(User)

    // User.hasMany(Task)

    // Task.belongsTo(User)
    // Task.hasMany(TaskMessage)

    // TaskMessage.belongsTo(User)
    // TaskMessage.belongsTo(Task)
}
