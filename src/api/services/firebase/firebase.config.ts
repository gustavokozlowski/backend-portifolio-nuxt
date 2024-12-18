import { cert, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

initializeApp({
  credential: cert('./serviceAccountKey.json'),
});

const db = getFirestore();

export { db };
