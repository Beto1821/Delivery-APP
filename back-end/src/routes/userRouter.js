const express = require('express');
const userController = require('../controller/userController');
const verifyToken = require('../middlewares/verifyTokenMiddleware');

const userRouter = express.Router();

userRouter.post(
  '/login',
  userController.login,
);

userRouter.post(
  '/register',
  userController.userRegister,
);

userRouter.get(
  '/user',
  verifyToken,
  userController.index,
);

userRouter.post(
  '/user',
  userController.createUser,
);

userRouter.delete(
  '/user/:id',
  verifyToken,
  userController.deleteUser,
);

userRouter.get(
  '/seller',
  verifyToken,
  userController.getSellers,
);

module.exports = userRouter;
