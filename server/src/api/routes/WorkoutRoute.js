const express = require('express');
const router = express.Router();

const validator = require('../middlewares/ValidationMiddleware');
const workoutSchema = require('../validations/WorkoutValidation');


const workoutController = require('../controllers/WorkoutController');


router.post('/', validator(workoutSchema), workoutController.createWorkout);
module.exports = router;