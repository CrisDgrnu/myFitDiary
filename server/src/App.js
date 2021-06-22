// App basic setup
const express = require('express');
const app = express();

// Database connection
require('./config/database/Connection');

// Json parser
app.use(express.json());

// Documentation
require('./config/docs/Swagger');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Routes
const userRoute = require('./api/routes/UserRoute');
const exerciseRoute = require('./api/routes/ExerciseRoute');
const workoutRoute = require('./api/routes/WorkoutRoute');

app.use('/users', userRoute);
app.use('/exercises', exerciseRoute);
app.use('/workouts', workoutRoute);

module.exports = app;



