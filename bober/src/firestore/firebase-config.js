import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateLoading } from "../store/global-state/globalActions";
import { auth } from "./firestore-config";


export function signInWithEmail(creds, navigate,dispatch) {
    signInWithEmailAndPassword(auth, creds.email, creds.password).then(res => {
        console.log(res)
        dispatch(updateLoading(false))
        navigate("/Contracts")
    }).catch((err) => {
        dispatch(updateLoading(false))
        console.log(err)
    })
}

export function signOutFirebase() {
    return signOut(auth)
}