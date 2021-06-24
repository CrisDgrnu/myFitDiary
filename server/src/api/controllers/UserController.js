const encryptPassword = require('../helpers/PasswordBcrypt');
const errorCreator = require('../helpers/ErrorCreator');
const User = require('../models/User');


exports.createUser = (req, res, next) => {
    const body = req.body;
    body.password = encryptPassword(req.body.password);
    body.weights = [{ weight: body.weight, date: Date.now() }];

    User.create(req.body).then((user) => {
        res.status(201).json(user);
    }).catch((error) => {
        const err = errorCreator(error.name, 409, 'Duplicated email');
        next(err);
    });
};

exports.addWeight = (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    const newWeight = { weight: body.weight, date: Date.now() };

    User.findByIdAndUpdate(id, { $push: { weights: newWeight } }, { new: true, runValidators: true }).then((user) => {
        res.status(201).json(user);
    }).catch((error) => {
        const err = errorCreator(error.name, 400, 'No weight suplied');
        next(err);
    });
};


exports.findUser = (req, res, next) => {
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

exports.modifyUser = (req, res, next) => {
    const { id } = req.params;
    const userInfo = req.body;
    userInfo.password = encryptPassword(req.body.password);

    User.findByIdAndUpdate(id, userInfo, { new: true }).then((user) => {
        res.status(200).json(user);
    }).catch((error) => {
        next({});
    });
};

exports.deleteUser = (req, res, next) => {
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