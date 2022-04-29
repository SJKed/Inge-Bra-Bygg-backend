const { Router } = require('express');
const Auth = require('../middlewares/auth');
const AuthController = require('../controllers/AuthController');
const asyncHandler = require('../utils/asyncHandler');
const Validations = require('../validations');

const router = new Router();

router.post('/auth',
  Validations.login,
  asyncHandler(AuthController.authenticate)
)

module.exports = router