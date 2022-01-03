import {
  CREATE_CONTRACT,
  DELETE_CONTRACT,
  UPDATE_CONTRACT,
  TOGGLE_MODAL,
  TOGGLE_EDIT_MODAL,
  EDIT_MODAL_DATA,
  SET_DATA_CONTRACT,
  CREATE_NEW_CONTRACT,
  UPDATE_DATA_PRICE
} from "../redux/contractConstants";

export function setContractData(contracts) {
    console.log(contracts)
  return { type: SET_DATA_CONTRACT, payload: contracts };
}

export function createNewContract(contract) {
    return {type: CREATE_CONTRACT, payload: contract}
}
export function updateDataPrice(contract) {
  return {type: UPDATE_DATA_PRICE, payload: contract}
}

export function createContract(contract) {
  return {
    type: CREATE_CONTRACT,
    payload: contract,
  };
}
export function updateContract(contract) {
  return {
    type: UPDATE_CONTRACT,
    payload: contract,
  };
}
export function deleteContract(contract) {
  return {
    type: DELETE_CONTRACT,
    payload: contract,
  };
}
export function toggleModal(status) {
  return {
    type: TOGGLE_MODAL,
    payload: status,
  };
}
export function toggleEditModal(status) {
  return {
    type: TOGGLE_EDIT_MODAL,
    payload: status,
  };
}
export function editModalData(status) {
  return {
    type: EDIT_MODAL_DATA,
    payload: status,
  };
}
