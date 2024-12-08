import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import config from '../config/enviroments/config.js';
import admin from '../config/firebase/firebase.config.js';

const app = express();

app.use(express.json());
app.use(cors());
//develop
app.listen(config.port, () => {
  console.log(`Server rondando liso na porta ${config.port}\n Admin: ${admin}`);
});
