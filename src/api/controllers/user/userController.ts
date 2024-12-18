import type { NextFunction, Request, Response } from 'express';
import type { IAuthCreateUserParams } from '../../services/firebase/types.js';
import type { IUser } from './types.js';
import { db } from '../../services/firebase/firebase.config.js';
import { Admin } from '../../services/firebase/auth.services.js';
import {
  getUserById,
  getAllUsers,
  createUserInDb,
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
    const params: IAuthCreateUserParams = req.body;
    const user = await createUserInDb(params);

    if (!user)
      res.status(400).json({
        status: 'Erro ao criar User, verifique os dados e tente novamente!',
      });

    const response = {
      status: 'success',
      data: user,
    };

    res.status(201).json(response);
  } catch (error) {
    console.info('Deu merda pra criar o user:\n', error);
  }
};
