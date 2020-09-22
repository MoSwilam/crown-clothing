import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDZFg71c97WvUJ-cISPhpizys7rv5mw4yE",
    authDomain: "crown-db-3e73e.firebaseapp.com",
    databaseURL: "https://crown-db-3e73e.firebaseio.com",
    projectId: "crown-db-3e73e",
    storageBucket: "crown-db-3e73e.appspot.com",
    messagingSenderId: "71996785011",
    appId: "1:71996785011:web:c5ca182340d2aef06ac506",
    measurementId: "G-LGKMN8NNPL"
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
