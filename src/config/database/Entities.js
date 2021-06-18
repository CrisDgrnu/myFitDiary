const connection = require('./Connection');

const User = require('../../api/models/User');
const Workout = require('../../api/models/Workout');
const Exercise = require('../../api/models/Exercise');

User.hasMany(Workout);
Workout.hasMany(Exercise);

connection.sync({ force: true })

module.exports = { User, Workout, Exercise }