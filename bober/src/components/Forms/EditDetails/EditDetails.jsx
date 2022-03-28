import React, { useState } from "react";


import "./EditDetails.css";

import { updateContractFS } from "../../../Features/Contracts/ContractDashboard/redux/contractReducer";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { contractRef, db } from "../../../firestore/firestore-config";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment"
const EditDetailsForm = ({
  detailedData,
  editOpen,
  setEditOpen,
  setEditDetailedData,
}) => {
 

  const [values, setValues] = useState(detailedData);

  



  function closeModal() {
    setEditOpen(false);
  }

  async function handleSubmit(e) {

    e.preventDefault();

    const docRef = doc(db, "events", values.contract);

    const paramKey = `editDetailedData.${values.keyName}`;

    const updatedData = {};
    updatedData[paramKey] = values.data;

    await updateDoc(docRef, updatedData);
    setEditDetailedData((prevState) => ({
      ...prevState,
      [values.keyName]: values.data,
    }));
    setEditOpen(false);
  }

  function handleInputChange(e) {
    const {
      target: { value, name },
    } = e;

    setValues((prevState) => ({
      ...prevState,
      ["data"]: value,
    }));

    // setValues(...values, {[e.target.name]: e.target.value});
  }

  function handleDate(date) {
    moment(Date.now(), 'DD-MM-YYYY')
    var someDate = new Date(date);
    someDate = 
    setValues((prevState) => ({
      ...prevState,
      ["data"]: someDate.getTime()
    }));
    console.log(values.keyName, values.data, "BEFORE SET")
    setEditDetailedData((prevState) => ({
      ...prevState,
      [values.keyName]: values.data,
    }));
 
    

  }
console.log(values.data, "DATA DATA")
  console.log("Moment", moment(values.data)._d)
 
  return (
    <div class="box">
      <div class={editOpen ? "active modal-container" : "modal-container"}>
        <div class="modal">
          <div class="form-wrap">
            <div class="hit-the-floor">Изменить Параметр</div>

            <form class="form" id="formAlt" onSubmit={handleSubmit}>
              <div class="control"></div>
              <label htmlFor={detailedData.keyName}>{detailedData.name}</label>

              {!detailedData.isDate ? (
                <div class="control block-cube block-input" id="mtop">
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
                </div>
              ) : (
                <div>
                  <DatePicker
                    onChange={(startDate) => handleDate(startDate)}
                    selected={values.data}
                    name={values.keyName}
                  
                    showTimeSelect
                    dateFormat="Pp"
                  />
                </div>
              )}

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
