const encryptPassword = require('../helpers/PasswordBcrypt');
const User = require('../models/User');

exports.createUser = async (req, res) => {
    req.body.password = encryptPassword(req.body.password);
    User.create(req.body).then((user) => {
        res.json(user);
    });
};