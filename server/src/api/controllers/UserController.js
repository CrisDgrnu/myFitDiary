const encryptPassword = require('../helpers/PasswordBcrypt');
const errorCreator = require('../helpers/ErrorCreator');
const User = require('../models/User');


exports.createUser = async (req, res, next) => {
    req.body.password = encryptPassword(req.body.password);

    User.create(req.body).then((user) => {
        res.json(user);
    }).catch((error) => {
        const err = errorCreator(error.name, 409, 'Duplicated email');
        next(err);
    });
};

exports.findUser = async (req, res, next) => {
    const { id } = req.params;

    User.findById(id).then((user) => {
        if (user) {
            res.status(200).json(user);
        }
        else {
            const err = errorCreator('NotFound', 404, 'User with this id wasn\'t found');
            next(err);
        }
    }).catch((error) => {
        const err = errorCreator(error.name, 400, 'Malformed id');
        next(err);
    });
};

exports.modifyUser = async (req, res, next) => {
    const { id } = req.params;

    req.body.password = encryptPassword(req.body.password);
    const userInfo = req.body;

    User.findByIdAndUpdate(id, userInfo, { new: true }).then((user) => {
        res.status(200).json(user);
    }).catch((error) => {
        next({});
    });
};

exports.deleteUser = async (req, res, next) => {
    const { id } = req.params;

    User.findByIdAndRemove(id).then((user) => {
        if (user) {
            res.status(200).json(user);
        }
        else {
            const err = errorCreator('NotFound', 404, 'User with this id wasn\'t found');
            next(err);
        }
    }).catch((error) => {
        const err = errorCreator(error.name, 400, 'Malformed id');
        next(err);
    });
};