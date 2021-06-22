const yup = require('yup');

const workoutSchema = yup.object({
    name: yup.string().required(),
});


module.exports = workoutSchema;
