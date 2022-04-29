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