const Task = require('../models/task')
const taskMessage = require('../models/taskMessage')
const User = require('../models/user')

module.exports = {

    //Tasks
    getTasks: async (req, res) => {
        if (req.user.userRole == 'admin') {
            tasks = await Task.findAll({})
        }
        if (req.user.userRole == 'client') {
            tasks = await Task.findAll({ where: { clientId: req.user.userId } })
        }
        if (req.user.userRole == 'worker') {
            tasks = await Task.findAll({ where: { workerId: req.user.userId } })
        }
        res.json(tasks)
    },
    createTask: async (req, res) => {
        if (req.user.userRole == 'client') { throw new Error('You are not authorized to create a task') }
        if (req.user.userRole == 'worker' || req.user.userRole == 'admin') {
            const task = await Task.create(req.body)
            res.json('Task created successfully: ' + task.taskName)
        }
    },
    updateTask: async (req, res) => {
        const { id } = req.params
        const task = await Task.findByPk(id)

        if (req.user.userRole == 'client') { throw new Error('You are not authorized to update a task') }

        await task.update(req.body, { where: { id } })
        res.json('Task updated successfully: ' + task.taskName + ' updated by ' + req.user.userName)
    },


    //Task/:id/message
    getMessages: async (req, res) => {
        const { id } = req.params
        const task = await Task.findByPk(id)
        
        if(req.user.userRole == 'client' && task.clientId != req.user.userId) { throw new Error('You are not authorized to view this task') }
        if(req.user.userRole == 'worker' && task.workerId != req.user.userId) { throw new Error('You are not authorized to view this task') }

        const messages = await taskMessage.findAll({ where: { taskId: id } })
        res.json(messages)
    }
}
