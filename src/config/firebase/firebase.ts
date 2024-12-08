// import { getAnalytics } from 'firebase/analytics';
// import { type FirebaseApp, initializeApp } from 'firebase/app';
// import { doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
// import 'dotenv/config';

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };
// const app: FirebaseApp = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);

// async function initiazeFirebaseApp() {
//   try {
//     return app;
//     // biome-ignore lint/suspicious/noExplicitAny: <explanation>
//   } catch (error: any) {
//     console.log('Error in InitializeFirebaseApp:', error);
//   }
// }

// export default { initiazeFirebaseApp, firebaseConfig, firestore };
