const { Forbidden, Unauthorized } = require('../errors')
const Task = require('../models/task')
const taskMessage = require('../models/taskMessage')
const User = require('../models/user')

module.exports = {

    //Tasks
    getTasks: async (req, res) => {
        const userId = req.user.userId
        if (req.user.userRole == 'admin') {
            tasks = await Task.findAll({})
        }
        if (req.user.userRole == 'client') {
            tasks = await Task.findAll({ where: { clientId: userId } })
        }
        if (req.user.userRole == 'worker') {
            tasks = await Task.findAll({ where: { workerId: userId } })
        }
        res.json(tasks)
    },

    createTask: async (req, res) => {
        const userRole = req.user.userRole
        if (userRole == 'client') {
            throw new Forbidden
        }
        if (userRole == 'worker' || userRole == 'admin') {
            const task = await Task.create(req.body)
            res.json('Task created successfully: ' + task.taskName)
        }
    },

    updateTask: async (req, res) => {
        const { id } = req.params
        const task = await Task.findByPk(id)
        const userRole = req.user.userRole

        if (userRole == 'client') {
            throw new Forbidden
        }

        await task.update(req.body, { where: { id } })
        res.json(task)
    },


    //Task/:id/message
    getMessages: async (req, res) => {
        const { id } = req.params
        const task = await Task.findByPk(id)
        const userId = req.user.userId
        const userRole = req.user.userRole

        if (userRole == 'client' && task.clientId != userId) {
            throw new Unauthorized
        }
        if (userRole == 'worker' && task.workerId != userId) {
            throw new Unauthorized
        }

        const messages = await taskMessage.findAll({ where: { taskId: id }})
        res.json(messages)
    },

    createMessage: async (req, res) => {
        const { id } = req.params
        const task = await Task.findByPk(id)
        const messageContent = req.body.messageContent
        const userId = req.user.userId
        const userRole = req.user.userRole

        if (userRole == 'client' && task.clientId != userId) {
            throw new Unauthorized
        }
        if (userRole == 'worker' && task.workerId != userId) {
            throw new Unauthorized
        }

        const message = await taskMessage.create({ messageContent, userId, taskId: id })
        res.json('Message created successfully: ' + message.messageContent)
    },

    updateMessage: async (req, res) => {
        const { messageId } = req.params.messageId
        const message = await taskMessage.findByPk(messageId)
        const userId = req.user.userId
        const userRole = req.user.userRole

        if (userRole == 'client' && message.userId != userId) {
            throw new Unauthorized
        }
        if (userRole == 'worker' && message.userId != userId) {
            throw new Unauthorized
        }

        await message.update(req.body)
        res.json('Message updated successfully: ' + message.messageContent)
    }
}
