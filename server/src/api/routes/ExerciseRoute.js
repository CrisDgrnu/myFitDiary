const express = require('express');
const router = express.Router();

const validator = require('../middlewares/ValidationMiddleware');
const exerciseSchema = require('../validations/ExerciseValidation');

const exerciseController = require('../controllers/ExerciseController');

router.post('/', validator(exerciseSchema), exerciseController.createExercise);

module.exports = router;