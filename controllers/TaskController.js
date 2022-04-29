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

    createTask: async (req, res) => {}


}