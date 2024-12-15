import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import * as userController from '../controllers/user/userController.js';

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/v1/user', userController.getAll);

app.listen(PORT, () => {
  console.log(`Server rondando liso na porta ${PORT}\n`);
});
