import express, { json } from 'express';
const app = express();
const PORT = 8080;

import userRoute from './api/routes/UserRoute';
import exerciseRoute from './api/routes/ExerciseRoute';
import workoutRoute from './api/routes/WorkoutRoute';

app.use(json());

app.use('/users', userRoute);
app.use('/exercises', exerciseRoute);
app.use('/workouts', workoutRoute);


app.listen(PORT, () => {
    console.log('Server running on port 8080');
});



