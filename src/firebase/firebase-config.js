import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOegiawXDIzgULv2oz7U8yfz7AzeFdp5A",
    authDomain: "react-journal-app-5ce38.firebaseapp.com",
    projectId: "react-journal-app-5ce38",
    storageBucket: "react-journal-app-5ce38.appspot.com",
    messagingSenderId: "59751804909",
    appId: "1:59751804909:web:d77c0d6227c9753c2c01e4"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}