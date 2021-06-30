const express = require('express');
const router = express.Router();


const workoutController = require('../controllers/WorkoutController');


router.post('/:id', workoutController.createWorkout);

router.get('/:id', workoutController.findAllWorkouts);




router.use(notFoundRoute);
router.use(errorHandler);

module.exports = router;