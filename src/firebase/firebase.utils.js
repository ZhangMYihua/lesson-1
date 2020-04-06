import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config =  {
  apiKey: "AIzaSyCndrbU8aG_coW3kNxeLHSh1KdsVbX-FL4",
  authDomain: "crwn-clothing-db-b7bab.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-b7bab.firebaseio.com",
  projectId: "crwn-clothing-db-b7bab",
  storageBucket: "crwn-clothing-db-b7bab.appspot.com",
  messagingSenderId: "166748618922",
  appId: "1:166748618922:web:ee0980a9f9c399b27450d3",
  measurementId: "G-ZL8G2FX3C5"
};

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc (`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
           email,
           createdAt,
           ...additionalData
        })
    } catch (error) {
      console.log ('error creating user', error.message);
     }
    }

    return userRef;
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters ({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;