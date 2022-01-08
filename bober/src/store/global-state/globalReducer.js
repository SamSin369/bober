import { useNavigate } from "react-router";
import { signOutFirebase } from "../../firestore/firebase-config";
import { setUserLogout } from "./globalActions";
import { SET_LOADER_VALUE, SET_LOGIN_USER, SET_LOGOUT_USER } from "./globalConstants";

const initialState = {
  loading: false,
  authenticated: false
};



export const globalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADER_VALUE:
      return {
        ...state,
        loading: payload,
      };
    case SET_LOGIN_USER:
      return {
        ...state,
        authenticated: true
      }
    case SET_LOGOUT_USER:
      return {
        ...state,
        authenticated:false
      }
    
    default:
      return state;
  }
};

export const handleSignOut = (navigate) => (dispatch,getState) => {
  try {
      signOutFirebase();
      dispatch(setUserLogout())
      navigate('/')
  } catch (error) {
      console.log(error)
  }
}


