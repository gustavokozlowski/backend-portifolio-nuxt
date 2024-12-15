import { type Response, Router } from 'express';
const commentsRouter = Router();

commentsRouter.get('/', (response: Response) => {
  response.status(200).send().json({
    status: 'sucess',
    nome: 'Mahaloo',
  });
});

export default commentsRouter;
