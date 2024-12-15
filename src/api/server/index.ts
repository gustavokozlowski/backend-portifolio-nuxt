import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import { userRouter } from '../routes/user/userRoutes.js';

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Server rondando liso na porta ${PORT}\n`);
});
