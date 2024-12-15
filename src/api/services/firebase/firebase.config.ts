import { cert, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const admin = initializeApp({
  credential: cert('./serviceAccountKey.json'),
});

const db = getFirestore();

export { admin, db };
