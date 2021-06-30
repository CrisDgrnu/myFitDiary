const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    exercises: [{ name: String, exercise_id: String, _id: false }]
});

workoutSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
    }
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;