const errorCreator = require('../helpers/ErrorCreator');
const Exercise = require('../models/Exercise');

exports.createExercise = async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    await Exercise.create(body).then((exercise) => {
        res.status(201).json(exercise)
    });
};

exports.findAllExercises = async (req, res, next) => {
    Exercise.find({})
        .then((exercises) =>  res.status(200).json(exercises));
};