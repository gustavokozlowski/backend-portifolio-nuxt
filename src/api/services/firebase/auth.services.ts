import { getAuth } from 'firebase-admin/auth';
import type { AuthCreateUserRequest } from './types.js';

export class Admin {
  async createUser(user: AuthCreateUserRequest) {
    const auth = getAuth();
    const newUser = await auth.createUser({
      emailVerified: false,
      disabled: false,
      ...user,
    });
    if (newUser) return newUser;
    return new Error('Não foi possivel criar um novo usuário: chora mais lixo');
  }
}
