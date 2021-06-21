const { DataTypes } = require('sequelize');
const connection = require('../../config/database/Connection');

const Workout = connection.define("Workouts", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    exercises: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
});



module.exports = Workout;