const express = require('express');
const router = express.Router();

const exerciseController = require('../controllers/ExerciseController');

router.post('/', exerciseController.createExercise);

module.exports = router;