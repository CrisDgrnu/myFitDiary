const express = require('express');
const app = express();
const PORT = 8080;

const userRoute = require('./api/routes/UserRoute')
const exerciseRoute = require('./api/routes/ExerciseRoute')
const workoutRoute = require('./api/routes/WorkoutRoute')

app.use(express.json());

app.use('/users', userRoute);
app.use('/exercises', exerciseRoute);
app.use('/workouts', workoutRoute);


app.listen(PORT, () => {
    console.log('Server running on port 8080');
});