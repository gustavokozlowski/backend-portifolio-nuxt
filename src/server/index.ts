import express from 'express';
import 'dotenv/config';
import config from '../config/config.js';

const app = express();

app.use(express.json());

app.listen(config.port, () => {
  console.log(`Server rondando liso na porta ${config.port}`);
});
