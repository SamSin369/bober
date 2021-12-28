import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firestore-config";

export function signInWithEmail(creds) {
    signInWithEmailAndPassword(auth, creds.email, creds.password).then(res => {
        console.log(res.user)
    })
}

export function signOutFirebase() {
    return signOut(auth)
}