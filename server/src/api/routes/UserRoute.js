const express = require('express');
const router = express.Router();
const errorHandler = require('../middlewares/ErrorHandler');
const notFoundRoute = require('../middlewares/NotFoundRoute');

const userController = require('../controllers/UserController');


router.post('/', userController.createUser);

router.get('/', userController.findAllUsers);

router.get('/:id', userController.findUser);

router.put('/:id', userController.modifyUser);

router.put('/:id/weight', userController.addWeight);

router.delete('/:id', userController.deleteUser);

router.use(notFoundRoute);
router.use(errorHandler);



module.exports = router;


