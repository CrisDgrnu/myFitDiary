const db = require('../../config/database/Entities');


exports.createWorkout = async (req, res) => {
    const body = req.body;
    const exercisesId = body.exercises;
    const exercises = [];

    for (const id in exercisesId) {
        const exercise = await db.Exercise.findAll({
            where: { id: id }
        });

        exercises.push(exercise);
    }


    try {
        const workout = await db.Workout.create({ name: body.name, exercises });
        res.status(201).json({ id: exercise.id, name: workout.name });
    } catch (error) {
        res.json(error);
    }
};