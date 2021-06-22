const { DataTypes, Model } = require('sequelize');
const connection = require('../../config/database/Connection');

class Exercise extends Model { }
Exercise.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    video: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: connection,
    modelName: 'Exercises'
});


module.exports = Exercise;