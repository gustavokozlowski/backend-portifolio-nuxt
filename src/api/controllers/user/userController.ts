import type { Request, Response } from 'express';
import { db } from '../../services/firebase/firebase.config.js';
import type { User } from './types.js';

const snap = await db.collection('users').get();

export const getAll = async (_req: Request, res: Response) => {
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

export const getUser = async (req: Request, res: Response) => {
  // biome-ignore lint/complexity/noForEach: <explanation>
  const user = snap.forEach((doc) => {
    if (doc.id === req.params.id) return doc.data();
  });

  res.status(200).json({
    status: 'success',
    data: user,
  });
};
