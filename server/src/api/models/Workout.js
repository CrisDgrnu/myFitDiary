const { DataTypes, Model } = require('sequelize');
const connection = require('../../config/database/Connection');

class Workout extends Model { }
Workout.init({
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
}, {
    sequelize: connection,
    modelName: 'Workouts'
});

module.exports = Workout;