const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    async user(req, res, next) {
        try {
            const token = req.header('Authorization').replace('Bearer ', '');
            const user = jwt.verify(token, process.env.JWT_SECRET);
            req.user = user;
            console.log(req.user)
            next();
        } catch (error) {
            res.status(401).send({ error: 'Token is invalid' });
        }
    },

    async admin(req, res, next) {
        try {
            const token = req.header('Authorization').replace('Bearer ', '');
            const user = jwt.verify(token, process.env.JWT_SECRET);
            req.user = user;
            if (user.userRole != "admin") { res.status(401).send({ error: 'You are not an admin' }); }
            next();
        } catch (error) {
            res.status(401).send({ error: 'Token is invalid' });
        }
    }
}