const { Router } = require('express');
const Auth = require('../middlewares/auth');
const UserController = require('../controllers/UserController');
const asyncHandler = require('../utils/asyncHandler');
const Validations = require('../validations');

const router = new Router();

router.get('/',
    Auth.user,
    asyncHandler(UserController.getUsers)
);

module.exports = router