import type { AuthCreateUserRequest } from '../services/firebase/types.js';
import type { User } from '../controllers/user/types.js';
import { db } from '../services/firebase/firebase.config.js';
import { Admin } from '../services/firebase/auth.services.js';
import type {
  DocumentData,
  FirebaseFirestore,
} from '@firebase/firestore-types';

const collectionDB = db.collection('users');
const users: FirebaseFirestore.DocumentData[] = [];

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

export async function getAllUsers(): Promise<DocumentData[] | undefined> {
  try {
    const usersDB = await collectionDB.get();
    // biome-ignore lint/complexity/noForEach: <explanation>
    usersDB.forEach((doc) => {
      return users.push(doc.data());
    });
    // console.info(dataUsers);
    // console.info(users);
    return users;
  } catch (error) {
    console.info(error);
    return undefined;
  }
}

// EXEMPLO DE COMO INSERIR DADOS NO FIRESTORE
// const citiesRef = db.collection('cities');

// await citiesRef.doc('SF').set({
//   name: 'San Francisco', state: 'CA', country: 'USA',
//   capital: false, population: 860000
// });
