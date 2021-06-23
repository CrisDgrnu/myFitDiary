const express = require('express');
const router = express.Router();
const errorHandler = require('../middlewares/ErrorHandler');
const notFoundRoute = require('../middlewares/NotFoundRoute');

const userController = require('../controllers/UserController');



router.get('/:id', userController.findUser);

router.post('/', userController.createUser);

router.put('/:id', userController.modifyUser);

router.delete('/:id', userController.deleteUser);

router.use(notFoundRoute);

router.use(errorHandler);



module.exports = router;


