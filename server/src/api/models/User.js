const { Schema, model } = require('mongoose');

const weightSchema = new Schema({
    weight: {
        type: Number,
        required: true
    },
    date: Date,
    _id: false
});

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    weights: [{ type: weightSchema }],
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    workouts: [{ name: String, workout_id: String, _id: false }]
});


userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
    }
});

const User = model('User', userSchema);

module.exports = User;
