const yup = require('yup');

const workoutSchema = yup.object({
    name: yup.string().required(),
    exercises: yup.array().required()
});


module.exports = workoutSchema;
