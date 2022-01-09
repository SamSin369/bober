import { SET_LOADER_VALUE, SET_LOGIN_USER, SET_LOGOUT_USER } from "./globalConstants";

export function updateLoading(contract) {
    return {
      type: SET_LOADER_VALUE,
      payload: contract,
    };
  }

export function setUserLogout() {
  return {
    type: SET_LOGOUT_USER,
    payload: false
  }
}
export function setUserLogin() {
  return {
    type: SET_LOGIN_USER,
    payload: true
  }
}
