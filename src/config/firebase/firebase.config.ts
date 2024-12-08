import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert('serviceAccountKey.json'),
});

export default admin;
