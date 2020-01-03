import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAYzyoDOoObxD9pC0Qa_B2ek7lrm3I7fKM",
    authDomain: "crown-db-b3a23.firebaseapp.com",
    databaseURL: "https://crown-db-b3a23.firebaseio.com",
    projectId: "crown-db-b3a23",
    storageBucket: "crown-db-b3a23.appspot.com",
    messagingSenderId: "896164572509",
    appId: "1:896164572509:web:6232409cf11c066d91ccb4",
    measurementId: "G-ESB4FN9KX0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
