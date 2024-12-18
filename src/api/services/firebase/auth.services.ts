import { getAuth, type UserRecord } from 'firebase-admin/auth';
import type { IAuthCreateUserParams } from './types.js';

export class Admin {
  async createUser(user: IAuthCreateUserParams): Promise<UserRecord> {
    const auth = getAuth();
    const newUser = await auth.createUser({
      emailVerified: false,
      disabled: false,
      ...user,
    });
    return newUser;
  }
}
