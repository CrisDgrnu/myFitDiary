const yup = require('yup');

const exerciseSchema = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    video: yup.string().required().url(),
    level: yup.number().max(3)
});


module.exports = exerciseSchema;
