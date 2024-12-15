import { Router } from 'express';
import commentsRouter from './comments/comments.router.js';

const routes = Router();

routes.use('/api/comments/all', commentsRouter);

export default routes;
