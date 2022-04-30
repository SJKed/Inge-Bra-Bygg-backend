const { Router } = require('express');
const Auth = require('../middlewares/auth');
const TaskController = require('../controllers/TaskController');
const asyncHandler = require('../utils/asyncHandler');
const Validations = require('../validations');

const router = new Router();

router.get('/',
    Auth.user,
    asyncHandler(TaskController.getTasks)
);

router.post('/',
    Auth.user,
    Validations.createTask,
    asyncHandler(TaskController.createTask)
);

router.patch('/:id',
    Auth.user,
    Validations.updateTask,
    asyncHandler(TaskController.updateTask)
);

module.exports = router