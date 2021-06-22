const db = require('../../config/database/Entities');

const encryptPassword = require('../helpers/PasswordBcrypt');

exports.createUser = async (req, res) => {
    const body = req.body;

    try {
        body.password = encryptPassword(body.password);
        const user = await db.User.create(body);
        res.status(201).json({ message: 'User created correctly', userId: user.id });
    } catch (error) {
        const email = body.email;
        res.status(409).json({ error: 'This email already exists', email });
    }
};