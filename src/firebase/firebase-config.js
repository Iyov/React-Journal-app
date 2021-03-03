import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOegiawXDIzgULv2oz7U8yfz7AzeFdp5A",
    authDomain: "react-journal-app-5ce38.firebaseapp.com",
    projectId: "react-journal-app-5ce38",
    storageBucket: "react-journal-app-5ce38.appspot.com",
    messagingSenderId: "59751804909",
    appId: "1:59751804909:web:d77c0d6227c9753c2c01e4"
};

const firebaseConfigTesting = {
    apiKey: "AIzaSyC8OJDp22a1tS6Ne4UUITFrE_fNEuYIQtU",
    authDomain: "sql-demo-d85bb.firebaseapp.com",
    projectId: "sql-demo-d85bb",
    storageBucket: "sql-demo-d85bb.appspot.com",
    messagingSenderId: "215897456753",
    appId: "1:215897456753:web:8810934e3be0349c0c5bd0"
};

if( process.env.NODE_ENV === 'test' ) {
    // Testing
    firebase.initializeApp(firebaseConfigTesting);
} else {
    // DEV // PROD
    firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}