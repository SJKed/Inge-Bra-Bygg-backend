const { Router } = require('express');
const Auth = require('../middlewares/auth');
const TaskController = require('../controllers/TaskController');
const asyncHandler = require('../utils/asyncHandler');

const router = new Router();

router.get('/',
    Auth.user,
    asyncHandler(TaskController.getTasks)
);

router.post('/',
    Auth.user,
    asyncHandler(TaskController.createTask)
);

module.exports = router