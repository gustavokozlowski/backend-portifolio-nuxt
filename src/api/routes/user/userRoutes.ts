import { Router } from 'express';
import * as userController from '../../controllers/user/userController.js';

export const userRouter = Router();

userRouter.route('/api/v1/user').get(userController.getAll);
userRouter.route('/api/v1/user').post(userController.createUser);
userRouter.route('/api/v1/user/:id').get(userController.getUser);
