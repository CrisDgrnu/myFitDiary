const { Schema, model } = require('mongoose');

const weightSchema = new Schema({
    weight: {
        type: String,
        required: true
    },
    date: Date,
    _id: false
});


const userSchema = new Schema({
    username: String,
    name: String,
    surname: String,
    age: Number,
    weights: [{ type: weightSchema }],
    email: {
        type: String,
        unique: true
    },
    password: String,
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
