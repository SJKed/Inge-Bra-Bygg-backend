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
            const workers = await User.findAll({ where: { userRole: 'worker' } })
            const me = await User.findAll({ where: { userId: req.user.userId } })
            const response = workers.concat(me)
            res.json(response)
        }
    },
    getUser: async (req, res) => {
        const id = req.params.id
        const user = await User.findByPk(id, { attributes: { exclude: ['userPassword'] } })
        if (req.user.userRole == 'admin' || req.user.userRole == 'worker') {
            res.json(user)
        }
        if (req.user.userRole == 'client' || req.user.userRole == 'worker') {
            if (user.userRole == 'worker' || user.userId == req.user.userId) {
                res.json(user)
            }
            else {
                res.status(403).json({ message: 'You are not authorized to view this user' })
                throw new Error('You are not authorized to view this user')
            }
        }
    },
    getMe: async (req, res) => {
        const user = await User.findByPk(req.user.userId, { attributes: { exclude: ['userPassword'] } })
        res.json(user)
    },
    createUser: async (req, res) => {
        if (req.user.userRole !== 'admin') { throw new Error('You are not authorized to create a user') }

        const user = await User.create(req.body)
        res.json(user)
    },
    updateUser: async (req, res) => {
        if (req.user.userRole !== 'admin') { throw new Error('You are not authorized to update a user') }

        const user = await User.findByPk(req.params.id)
        if (user.userRole == 'admin') { throw new Error('You cannot update an admin') }
        user.update(req.body)
        res.json(user)
    }
}
