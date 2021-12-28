import {SIGN_IN_USER, SIGN_OUT_USER} from "./authConstants";
import {auth} from "../firestore/firestore-config"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
export function signInUser(user) {
   return {
       type: SIGN_IN_USER,
       payload: user
   }
}
export function verifyAuth() {
    return function (dispatch) {
        return auth.onAuthStateChanged(user => {
            if (user) {
                dispatch(signInUser(user))

            } else {
                dispatch(signOutUser())
            }
        })
    }
}

export function signOutUser() {
    return {
        type: SIGN_OUT_USER
    }
}