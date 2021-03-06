const express = require('express');
const router = express.Router();


const exerciseController = require('../controllers/ExerciseController');


router.post('/', exerciseController.createExercise);

router.get('/', exerciseController.findAllExercises);

router.use(notFoundRoute);
router.use(errorHandler);

module.exports = router;