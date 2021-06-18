import { Router } from 'express';
const router = Router();

import validator from '../middlewares/ValidationMiddleware';
import userSchema from '../validations/UserValidation';

import { createUser } from '../controllers/UserController';

router.post('/', validator(userSchema), createUser);

export default router;


