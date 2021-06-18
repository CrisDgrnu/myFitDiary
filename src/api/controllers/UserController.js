import { User } from '../../config/database/Entities';

export async function createUser(req, res) {
    const body = req.body;
    try {
        res.json(await User.create(body));
    } catch (error) {
        res.status(400).json(error);
    }
}