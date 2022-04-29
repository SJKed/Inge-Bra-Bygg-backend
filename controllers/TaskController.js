const Task = require('../models/task')

module.exports = {
    getTasks: async (req, res) => {
        console.log(req.user)
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
        console.log(req.user + req.body + req.params)
        const { id } = req.params
        const task = await Task.findByPk(id)
        
        if (req.user.userRole == 'client') { throw new Error('You are not authorized to update a task') }
        
        await task.update(req.body, { where: { id } })
        res.json('Task updated successfully: ' + task.taskName + ' updated by ' + req.user.userName)
    }
}
