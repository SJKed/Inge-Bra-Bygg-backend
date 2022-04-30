const { Router } = require('express');
const Auth = require('../middlewares/auth');
const TaskController = require('../controllers/TaskController');
const asyncHandler = require('../utils/asyncHandler');
const Validations = require('../validations');

const router = new Router();


//Task info
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

//Task/:id/message
router.get('/:id/messages',
    Auth.user,
    asyncHandler(TaskController.getMessages)
);
router.post('/:id/message',
    Auth.user,
    asyncHandler(TaskController.createMessage)
);
router.patch('/:id/message',
    Auth.user,
    asyncHandler(TaskController.updateMessage)
);

module.exports = router