import type { NextFunction, Request, Response } from 'express';
import type { AuthCreateUserRequest } from '../../services/firebase/types.js';
import type { User } from './types.js';
import { db } from '../../services/firebase/firebase.config.js';
import { Admin } from '../../services/firebase/auth.services.js';
import {
  getUserById,
  getAllUsers,
} from '../../repositories/usersRepository.js';

export const getAll = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getAllUsers();

  if (users === undefined) {
    res.status(400).json({
      status: 'erro: usuário não encontrado',
    });
    return next();
  }

  res.status(200).json({
    status: 'success',
    data: users,
  });

  return next();
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserById(id);

  if (user === undefined) {
    res
      .status(400)
      .json({
        status: 'erro: usuário não encontrado',
      })
      .end();
  }

  res.status(200).json({
    status: 'success',
    data: user,
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
