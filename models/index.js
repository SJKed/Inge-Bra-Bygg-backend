const User = require('../models/user');
const Task = require('../models/task')
const TaskMessage = require('../models/taskMessage')


module.exports = function setupModels() {
    User.hasMany(Task)

    Task.belongsTo(User)
    Task.hasMany(TaskMessage)

    TaskMessage.belongsTo(User)
    TaskMessage.belongsTo(Task)
}
