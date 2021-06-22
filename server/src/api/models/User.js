const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: String,
    surname: String,
    age: Number,
    weight: Number,
    email: String,
    password: String,
});

const User = model('User', userSchema);

module.exports = User;
