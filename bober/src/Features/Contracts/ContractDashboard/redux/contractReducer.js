import { addDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import sampleData from "../../../../data/sampleData";
import { contractRef } from "../../../../firestore/firestore-config";
import { createContract, setContractData, updateContract } from "./contractActions";
import {
  CREATE_CONTRACT,
  DELETE_CONTRACT,
  UPDATE_CONTRACT,
  TOGGLE_MODAL,
  TOGGLE_EDIT_MODAL,
  EDIT_MODAL_DATA,
  SET_DATA_CONTRACT,
  UPDATE_DATA_PRICE,
} from "./contractConstants";
const initalState = {
  contracts: [],
  modalToggled: false,
  editModalToggled: false,
  editModalData: {},
};

export default function contractReducer(
  state = initalState,
  { type, payload }
) {
  switch (type) {
     
    case CREATE_CONTRACT:
      return {
        ...state,
        contracts: [...state.contracts, payload],
      };
    case UPDATE_CONTRACT:
      return {
        ...state,
        contracts: [
          ...state.contracts.filter(
            (contract) => contract.contract_key !== payload.contract_key
          ),
          payload,
        ],
      };
    case DELETE_CONTRACT:
      return {
        ...state,
        contracts: [
          ...state.contracts.filter(
            (contract) => contract.contract_key !== payload
          ),
        ],
      };
    case TOGGLE_MODAL:
      return { ...state, modalToggled: payload };

    case TOGGLE_EDIT_MODAL:
      return { ...state, editModalToggled: payload };

    case EDIT_MODAL_DATA:
      console.log("payload", payload);
      return {
        ...state,
        editModalData: payload,
      };
    case SET_DATA_CONTRACT:
 
      return {
        ...state,
        contracts: payload,
      };
    case UPDATE_DATA_PRICE:
      return {
        ...state,
        contracts: [
          ...state.contracts.filter(
            (contract) => contract.REFI_NAME !== payload.REFI_NAME
          ),
          payload
        ],

      }

    default:
      return state;
  }
}

export const getContracts = () => (dispatch, getState) => {
  getDocs(contractRef).then((snapshot) => {
    let contracts = [];
    snapshot.docs.map((document) => {
      contracts.push({ ...document.data(), id: document.id });
    });
    
    dispatch(setContractData(contracts));
  });
};

export const createNewContract = (contract) => (dispatch, getState) => {
    addDoc(contractRef, contract).then((res) => {
        console.log("RESULT", res )
    })
    dispatch(createContract(contract))
    // dispatch(createNewContract(contract));
}

// export const updateContractFS = (contract) => (dispatch,getState) => {

//     dispatch(updateContract(contract))
// }
