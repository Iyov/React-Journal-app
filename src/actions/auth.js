import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( ({ user }) => {
            // console.log(user.uid, user.displayName)
            dispatch( login(user.uid, user.displayName) );
        })
        .catch( (e) => console.log('Error', e) )
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then( async({ user }) => {
            await user.updateProfile({ displayName: name });
            // console.log(user)

            dispatch(
                login( user.uid, user.displayName )
            )
        })
        .catch( e => console.log('Error:', e) )
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then( ({ user }) => {
            dispatch(
                login( user.uid, user.displayName )
            )
        })
        .catch( e => console.log('Error:', e) )
    }
}

export const login = (uid, displayName) => (
    {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
)