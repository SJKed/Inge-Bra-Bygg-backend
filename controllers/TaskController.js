const Task = require('../models/task')

module.exports = {
    getTasks: async (req, res) => {
        if (req.user.userRole == 'admin') {
            tasks = await Task.findAll({})
        } else {
            tasks = await Task.findAll({ where: { userId: req.user.id } })
        }
        res.json(tasks)
    }
}