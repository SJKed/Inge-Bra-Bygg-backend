const Task = require('../models/task')

module.exports = {
    getTasks: async (req, res) => {
        console.log(req.user)
        if (req.user.userRole == 'admin') {
            tasks = await Task.findAll({})
        } 
        if(req.user.userRole == 'client') {
            tasks = await Task.findAll({ where: { clientId: req.user.userId } })
        }
        if(req.user.userRole == 'worker') {
            tasks = await Task.findAll({ where: { workerId: req.user.userId } })
        }
        res.json(tasks)
    },
  
    createTask: async (req, res) => {
        if (req.user.userRole == 'client') { res.status(401).send({ error: 'You are not an admin nor a worker' }) }
        if (req.user.userRole == 'worker') {
            await Task.create({
                taskName: req.body.taskName,
                taskDescription: req.body.taskDescription,
                taskStatus: req.body.taskStatus,
                taskImage: req.body.taskImage,
                clientId: req.body.clientId,
                workerId: req.user.userId,
                taskCreatedAt: new Date(),
                taskUpdatedAt: new Date(),
                taskCompletedAt: new Date()
            })
        }
        if (req.userRole == 'admin') {
            await Task.create({
                taskName: req.body.taskName,
                taskDescription: req.body.taskDescription,
                taskStatus: req.body.taskStatus,
                taskImage: req.body.taskImage,
                clientId: req.body.clientId,
                workerId: req.body.workerId,
                taskCreatedAt: new Date(),
                taskUpdatedAt: new Date(),
                taskCompletedAt: new Date()
            })
        }
        res.send({ message: 'Task created' })
    }
}