const db = require('../../config/database/Entities');

exports.createUser = async (req, res) => {
    const body = req.body;
    try {
        res.json(await db.User.create(body));
    } catch (error) {
        res.status(400).json(error)
    }
};