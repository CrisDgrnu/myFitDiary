const express = require('express');
const router = express.Router();

const validator = require('../middlewares/ValidationMiddleware');
const userSchema = require('../validations/UserValidation');

const userController = require('../controllers/UserController');

/**
 * @swagger
 * /users:
 *   post:
 *     description: Create a new user
 *     responses:
 *       200:
 *         description: Success
 *       400: 
 *          description: Bad request
 * 
 */
router.post('/', validator(userSchema), userController.createUser);

module.exports = router;


