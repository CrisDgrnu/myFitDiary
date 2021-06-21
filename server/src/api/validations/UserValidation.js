const yup = require('yup');

const userSchema = yup.object({
    name: yup.string().required(),
    surname: yup.string().required(),
    age: yup.number().required().positive().integer().required(),
    weight: yup.number().required().positive().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(20).required()
});


module.exports = userSchema;
