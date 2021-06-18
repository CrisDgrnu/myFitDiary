const express = require('express');
const router = express.Router();

const validator = require('../middlewares/ValidationMiddleware');
const userSchema = require('../validations/UserValidation');

const userController = require('../controllers/UserController');

router.post('/', validator(userSchema), userController.createUser);

module.exports = router;


