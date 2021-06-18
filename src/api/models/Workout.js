import { DataTypes } from 'sequelize';
import { define } from '../../config/database/Connection';

const Workout = define("Workouts", {
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
        allowNull: false,
    }
});



export default Workout;