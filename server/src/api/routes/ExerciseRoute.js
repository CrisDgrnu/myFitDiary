const express = require('express');
const router = express.Router();

const validator = require('../middlewares/ValidationMiddleware');
const exerciseSchema = require('../validations/ExerciseValidation');

/**
 * @swagger
 * definitions:
 *  Exercise:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the exercise.
 *     example: 'Flexión'
 *    description:
 *     type: string
 *     description: description of the exercise
 *     example: 'Sobre el suelo tratar de levantar el cuerpo con los brazos'
 *    video:
 *     type: string
 *     description: URL of a video that show how to do the exercise.
 *     example: 'https://www.youtube.com/flexion'
 *    level:
 *     type: integer
 *     description: number between 1 and 3 that represents the difficulty of the exercise
 *     example: 2
 */
const exerciseController = require('../controllers/ExerciseController');


/**
 * @swagger
 * /exercises:
 *   post:
 *     description: Create a new exercise 
 *     parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "New exercise added to the database"
 *        required: true
 *        schema:
 *          $ref: '#/definitions/Exercise'
 *     responses:
 *       201:
 *         description: Exercise created succesfully
 *       400: 
 *          description: Wrong parameters on request
 */
router.post('/', validator(exerciseSchema), exerciseController.createExercise);

module.exports = router;