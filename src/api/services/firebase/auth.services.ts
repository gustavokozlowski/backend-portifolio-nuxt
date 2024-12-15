import { getAuth, type UserRecord } from 'firebase-admin/auth';
import type { AuthCreateUserRequest } from './types.js';

export class Admin {
  async createUser(user: AuthCreateUserRequest): Promise<UserRecord> {
    const auth = getAuth();
    const newUser = await auth.createUser({
      emailVerified: false,
      disabled: false,
      ...user,
    });
   return newUser;
  }
}
