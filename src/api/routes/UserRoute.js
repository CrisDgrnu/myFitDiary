const express = require('express');
const router = express.Router();

const validator = require('../middlewares/ValidationMiddleware');
const userSchema = require('../validations/UserValidation');

const userController = require('../controllers/UserController');

/**
 * @swagger
 * definitions:
 *  User:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the user
 *     example: 'Cristian'
 *    surname:
 *     type: string
 *     description: surname of the user
 *     example: 'De Gracia Nuero'
 *    age:
 *     type: integer
 *     description: age of the user
 *     example: 21
 *    weight:
 *     type: float
 *     description: weight of the user
 *     example: 65.8
 *    email:
 *     type: string
 *     description: email of the user
 *     example: 'cristian@gmail.com'
 *    password:
 *     type: string
 *     description: password of the user
 *     example: 'super1secret2pass'
 */


/**
 * @swagger
 * /users:
 *   post:
 *     description: Create a new user 
 *     parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "New user that needs to be registered"
 *        required: true
 *        schema:
 *          $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: User created succesfully
 *       400: 
 *          description: Wrong parameters on request
 *       409:
 *          description: User with this email already exists
 *     
 * 
 */
router.post('/', validator(userSchema), userController.createUser);

module.exports = router;


