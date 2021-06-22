const db = require('../../config/database/Entities');

exports.createExercise = async (req, res) => {
    const body = req.body;
    
    try {
        const exercise = await db.Exercise.create(body);
        res.status(201).json({id: exercise.id, name: exercise.name});
    } catch (error) {
        const name = body.name;
        res.status(409).json({ error: 'This exercise already exists', name });
    }
};