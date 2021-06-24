const errorCreator = require('../helpers/ErrorCreator');
const Workout = require('../models/Workout');
const User = require('../models/User');


exports.createWorkout = async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;

    const workout = await Workout.create(body);
    User.findByIdAndUpdate(id, { $push: { workouts: { name: workout.name, workout_id: workout.id } } })
        .then(() => res.json(workout))
        .catch((error) => {
            console.error(error);
            const err = errorCreator(error.name, 400, 'Malformed id');
            next(err);
        });
};