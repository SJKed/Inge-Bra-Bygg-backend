const Task = require('../models/task')
const taskMessage = require('../models/taskMessage')
const User = require('../models/user')

module.exports = {
    getUsers: async (req, res) => {
        if (req.user.userRole == 'admin' || req.user.userRole == 'worker') {
            const users = await User.findAll({})
            res.json(users)
        }
        if (req.user.userRole == 'client') {
            //this needs to be remade to only be one request
            const workers = await User.findAll({ where: { userRole: 'worker' } })
            const me = await User.findAll({ where: { userId: req.user.userId } })
            const response = workers.concat(me)
            res.json(response)
        }
    },
    getUser: async (req, res) => {
        const id = req.params.id
        const user = await User.findByPk(id)
        if (req.user.userRole == 'admin' || req.user.userRole == 'worker') {
            res.json(user)
        }
        if (req.user.userRole == 'client') {
            if (user.userRole == 'worker' || user.userId == req.user.userId) {
                res.json(user)
            }
            else {
                throw new Error('You are not authorized to view this user')
            }
        }
    },
}
