import connection from './Connection';

import User from '../../api/models/User';
import Workout from '../../api/models/Workout';
import Exercise from '../../api/models/Exercise';

User.hasMany(Workout);
Workout.hasMany(Exercise);

connection.sync({ force: true });

export default { User, Workout, Exercise };