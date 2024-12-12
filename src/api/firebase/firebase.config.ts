import firebaseAdmin from 'firebase-admin';
import { applicationDefault, cert, initializeApp } from 'firebase-admin/app';
import {
  FieldValue,
  Filter,
  Timestamp,
  getFirestore,
} from 'firebase-admin/firestore';

const admin = initializeApp({
  credential: cert('./serviceAccountKey.json'),
});

const db = getFirestore();

export default { admin, db };
