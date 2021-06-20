const db = require('../../config/database/Entities');

exports.createUser = async (req, res) => {
    const body = req.body;
    try {
        res.json(await db.User.create(body));
    } catch (error) {
        const email = req.body.email;
        res.status(409).json({ error: 'This email already exists', email });
    }
};