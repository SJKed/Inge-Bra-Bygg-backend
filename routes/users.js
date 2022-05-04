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
router.get('/me', 
    Auth.user,
    asyncHandler(UserController.getMe)
);
router.get('/:id',
    Auth.user,
    asyncHandler(UserController.getUser)
);
router.post('/',
    Auth.user,
    Validations.createUser,
    asyncHandler(UserController.createUser)
);
router.patch('/:id',
    Auth.user,
    asyncHandler(UserController.updateUser)
);

module.exports = router