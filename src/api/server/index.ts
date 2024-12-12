import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import admin from '../firebase/firebase.config.js';

const app = express();

app.use(express.json());
app.use(cors());

// const credential = await admin.auth().app.options.credential?.getAccessToken()
//develop
app.listen(process.env.PORT, () => {
  console.log(
    `Server rondando liso na porta ${process.env.PORT}\n Admin: ${admin}`
  );
});
