import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createContract,
  editModalData,
  toggleEditModal,
  toggleModal,
  updateContract,
} from "../../../Features/Contracts/ContractDashboard/redux/contractActions";
import "./EditDetails.css";
import { v4 as uuidv4 } from "uuid";
import { updateContractFS } from "../../../Features/Contracts/ContractDashboard/redux/contractReducer";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { contractRef, db } from "../../../firestore/firestore-config";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const EditDetailsForm = ({ detailedData, editOpen, setEditOpen }) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState(detailedData);
  const [editValues, setEditValues] = useState(detailedData);

  function openModal() {
    setEditOpen(true);
  }
  function closeModal() {
    setEditOpen(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(values.contract, "contract");

    const docRef = doc(db, "events", values.contract);

    const paramKey = `editDetailedData.${values.keyName}`;

    const updatedData = {};
    updatedData[paramKey] = values.data

    console.log(updatedData)
    await updateDoc(docRef, updatedData)
    // window.location.reload(false);

    // dispatch(updateContract(values));
    // setValues(editValues);
    closeModal();
  }

  function handleInputChange(e) {
    const {
      target: { value, name },
    } = e;

    console.log("VALUE", values["keyName"]);

 
      setValues((prevState) => ({
        ...prevState,
        ["data"]: value,
      }));
  
   
  
    console.log(values, "aaa");
    // setValues(...values, {[e.target.name]: e.target.value});
  }

 function handleDate(date) {
   console.log(date ,"DATE")
    setValues((prevState) => ({
      ...prevState,
        ['data']: date
    }));
}
  return (
    <div class="box">
      <div class={editOpen ? "active modal-container" : "modal-container"}>
        <div class="modal">
          <div class="form-wrap">
            <div class="hit-the-floor">Изменить Параметр</div>

            <form class="form" id="formAlt" onSubmit={handleSubmit}>
              <div class="control"></div>
              <label htmlFor={detailedData.keyName}>{detailedData.name}</label>
             
              
             {!detailedData.isDate ? <div class="control block-cube block-input" id="mtop">
             <input
                  placeholder="Введите данные"
                  type="number"
                  name={values.keyName}
                  value={values.data}
                  onChange={(e) => handleInputChange(e)}
                />
                
               
                <div class="bg-top">
                  <div class="bg-inner"></div>
                </div>
                <div class="bg-right">
                  <div class="bg-inner"></div>
                </div>
                <div class="bg">
                  <div class="bg-inner"></div>
                </div>
              </div> :  <div>
              <DatePicker onChange={handleDate} selected={values.data} showTimeSelect dateFormat="Pp"/>
              </div>}

              <button
                class="btn block-cube block-cube-hover"
                onClick={handleSubmit}
                type="submit"
              >
                <div class="bg-top">
                  <div class="bg-inner"></div>
                </div>
                <div class="bg-right">
                  <div class="bg-inner"></div>
                </div>
                <div class="bg">
                  <div class="bg-inner"></div>
                </div>
                <div class="text">Отправить</div>
              </button>
              <div class="credits"></div>
            </form>
          </div>

          <a class="link-2" onClick={closeModal}></a>
        </div>
      </div>
    </div>
  );
};

export default EditDetailsForm;
