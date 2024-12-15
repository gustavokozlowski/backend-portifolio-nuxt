import type { Request, Response } from 'express';
import { db } from '../../services/firebase/firebase.config.js';
import type { GetAllResponse, User } from './types.js';

export const getAll = async (_req: Request, res: Response) => {
  const snap = await db.collection('users').get();
  const arr: User[] = [];
  // biome-ignore lint/complexity/noForEach: <explanation>
  snap.forEach((doc) => {
    return arr.push(doc.data() as User);
  });

  res.status(200).json({
    status: 'success',
    data: [...arr],
  });
};
