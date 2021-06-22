const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    name: String,
});

const Workout = model('Exercise', workoutSchema);

module.exports = Workout;