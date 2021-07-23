const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
    name: String,
    description: String,
    video: String,
    level: Number
});

exerciseSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
    }
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;