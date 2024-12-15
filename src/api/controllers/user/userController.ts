import { db } from '../../firebase/firebase.config.js';
import type { Response, Request } from 'express';
import type { User } from './types.js';

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
