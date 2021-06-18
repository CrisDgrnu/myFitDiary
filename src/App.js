const express = require('express');
const app = express();
const PORT = 8080;

// Json parser
app.use(express.json());

// Documentation
const swagger = require('./config/docs/Swagger');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Routes
const userRoute = require('./api/routes/UserRoute');
const exerciseRoute = require('./api/routes/ExerciseRoute');
const workoutRoute = require('./api/routes/WorkoutRoute');

app.use('/users', userRoute);
app.use('/exercises', exerciseRoute);
app.use('/workouts', workoutRoute);



app.listen(PORT, () => {
    console.log('Server running on port 8080');
});



