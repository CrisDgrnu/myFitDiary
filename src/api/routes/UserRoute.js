const express = require('express');
const router = express.Router();

const validator = require('../middlewares/ValidationMiddleware');
const userSchema = require('../validations/UserValidation')

router.post('/',validator(userSchema) ,(req, res) => {
    res.json({ name: "Hello Im a User" })
});

module.exports = router;


