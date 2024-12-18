import type { AuthCreateUserRequest } from '../services/firebase/types.js';
import type { User } from '../controllers/user/types.js';
import { db } from '../services/firebase/firebase.config.js';
import { Admin } from '../services/firebase/auth.services.js';
import type {
  DocumentData,
  FirebaseFirestore,
} from '@firebase/firestore-types';

const collectionDB = await db.collection('users').get();
const arr: User[] = [];

export async function getUserById(
  id: string
): Promise<DocumentData | undefined> {
  try {
    const usersData = db.collection('users').doc(`${id}`);
    const doc = await usersData.get();
    const user = doc.data();

    return user;
  } catch (error) {
    return undefined;
  }
}


