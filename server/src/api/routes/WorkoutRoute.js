const express = require('express');
const router = express.Router();


const workoutController = require('../controllers/WorkoutController');


router.post('/', workoutController.createWorkout);


router.use(notFoundRoute);
router.use(errorHandler);

module.exports = router;