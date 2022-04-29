const Task = require('../models/task')

module.exports = {
    getTasks: async (req, res) => {
        if (req.user.userRole == 'admin') {
            tasks = await Task.findAll({})
        } else {
            tasks = await Task.findAll({ where: { userId: req.user.id } })
        }
        res.json(tasks)
    },
    createTask: async (req, res) => {
        if (req.user.userRole == 'client') { res.status(401).send({ error: 'You are not an admin nor a worker' }) }
        
        console.log(req.body)
        const { taskName, taskDescription, taskStatus, taskImage, clientId, workerId } = req.body
        const task = await Task.create({
            taskName,
            taskDescription,
            taskStatus,
            taskImage,
            clientId,
            workerId
        })
        res.json(task)
    }
}