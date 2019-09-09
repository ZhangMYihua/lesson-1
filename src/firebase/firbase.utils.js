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
