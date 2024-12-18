import type { Request, Response } from 'express';
import type { AuthCreateUserRequest } from '../../services/firebase/types.js';
import type { User } from './types.js';
import { db } from '../../services/firebase/firebase.config.js';
import { Admin } from '../../services/firebase/auth.services.js';
import { getUserById } from '../../repositories/usersRepository.js';

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
  const { id } = req.params;
  const doc = await getUserById(id);

  if (doc !== undefined) {
    res.status(200).json({
      status: 'success',
      data: doc,
    });
  }

  res.status(400).json({
    status: 'erro: usuário não encontrado'
  });
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const admin = new Admin();
    const params: AuthCreateUserRequest = {
      displayName: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      photoURL: req.body.photoURL,
    };

    const user = await admin.createUser(params);

    const newUser: User = {
      id: user.uid,
      email: user.email as string,
      name: user.displayName as string,
      label: req.body.label,
    };

    const response = {
      status: 'success',
      data: user,
    };

    const data = await db.collection('users').doc(user.uid).set(newUser);

    if (!data)
      res.status(400).json({
        status: 'Erro ao criar User, verifique os dados e tente novamente!',
      });

    res.status(201).json(response);
  } catch (error) {
    console.info('Deu merda pra criar o user:\n', error);
  }
};
