import firebase from 'firebase/app';
// firebase database
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5G76hb0BU63upB50ZbqSf41DNdU00H3I",
    authDomain: "crown-db-a9225.firebaseapp.com",
    databaseURL: "https://crown-db-a9225.firebaseio.com",
    projectId: "crown-db-a9225",
    storageBucket: "",
    messagingSenderId: "208149983507",
    appId: "1:208149983507:web:9f6ad0755e7e73a6896ae6"
  };

  export const createUserProfileDocument =  async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // if snapshot does not exist create the user
    if(!snapShot.exists){
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
        console.log('Error creating User', error.message)
      }
    }
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // google auth utility
  const provider = new firebase.auth.GoogleAuthProvider();
  // always trigger the google auth popup
  // whenever I use google auth provider
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
