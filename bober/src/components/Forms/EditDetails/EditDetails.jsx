import React, { useState } from "react";

import "./EditDetails.css";

import { updateContractFS } from "../../../Features/Contracts/ContractDashboard/redux/contractReducer";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { contractRef, db } from "../../../firestore/firestore-config";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
const EditDetailsForm = ({
  detailedData,

  editOpen,
  setEditOpen,
  setEditDetailedData,
  index,
}) => {
  const [values, setValues] = useState(detailedData);
  console.log("BABY", detailedData.index)
  if(Array.isArray(detailedData.data)) {
    var contractTextHold = detailedData.data[0].formValue ? detailedData.data[0].formValue : "";
    var contractNumberHold = detailedData.data[1].formValue ? detailedData.data[1].formValue : "";
  }


  const [contractText, setContractText] = useState(contractTextHold);
  const [contractNumber, setContractNumber] = useState(contractNumberHold);

  function closeModal() {
    setEditOpen(false);
  }

  async function handleSubmit(e) {
    

    if(!Array.isArray(values.data) && values.keyName !== "lockupAndRelease.dates") {
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

    } else if (values.keyName === "lockupAndRelease.dates") {
      
      e.preventDefault();

      const docRef = doc(db, "events", values.contract);

    console.log(values, "ASCASC")
  
      const paramKey = `editDetailedData.lockupAndRelease.dates.${values.index.toString()}`;
  
      const updatedData = {};
      updatedData[paramKey] = values.data;
  
      await updateDoc(docRef, updatedData);
      
      
      console.log("THEHEHTHE", values)
   
      setEditDetailedData((prevState) => ({
        ...prevState,
        [values.keyName]: values.data,
      }));
      setEditOpen(false);

      
    }
      
      else {
      e.preventDefault();

      const docRef = doc(db, "events", values.contract);
  
      const paramKey1 = `editDetailedData.${values.data[0].keyName}`;
      const paramKey2 = `editDetailedData.${values.data[1].keyName}`;

      const updatedData = {};
      updatedData[paramKey1] = contractText;
      updatedData[paramKey2] = parseInt(contractNumber);

      await updateDoc(docRef, updatedData);
      setEditDetailedData((prevState) => ({
        ...prevState,
        [values.data[0].keyName]: contractNumber,
        [values.data[1].keyName]: contractText
      }))
      setEditOpen(false);
    
    }
    
  }

  function handleInputChange(e,i) {
    
    if (Array.isArray(values.data)) {
      const {
        target: { value, name },
      } = e;
     
      setValues((prevState) => ({
        
        ...prevState,
        [name]: value 
      }));
    } else {
   
      const {
        target: { value, name },
      } = e;

      setValues((prevState) => ({
        ...prevState,
        ["data"]: value,
      }));
    }

 

    // setValues(...values, {[e.target.name]: e.target.value});
  }

  function handleDate(date) {
    moment(Date.now(), "DD-MM-YYYY");
    var someDate = new Date(date);
    someDate = setValues((prevState) => ({
      ...prevState,
      ["data"]: someDate.getTime(),
    }));

    setEditDetailedData((prevState) => ({
      ...prevState,
      [values.keyName]: values.data,
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
              {!Array.isArray(values.data) && (
                <label htmlFor={detailedData.keyName}>
                  {detailedData.name}
                </label>
              )}

              {!detailedData.isDate ? (
                !Array.isArray(values.data) ? (
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
                
                  <>
                   <div >
                    
                    <label htmlFor={values.data[0].keyName}>Условия Котракта</label>
                    <textarea
                        placeholder="Введите данные"
                        type="text"
                        name={values.data[0].keyName}
                        value={contractText}
                        onChange={(e) => setContractText(e.target.value)}
                        id="contractDetails"
                      />
                   
                  </div>
                   <div >
               
                    <label htmlFor={values.data[1].keyName}>Количество Контрактов</label>
                    <div class="control block-cube block-input" id="mtop">
                      <input
                        placeholder="Введите данные"
                        type="number"
                        name={values.data[1].keyName}
                        value={contractNumber}
                        onChange={e => setContractNumber(e.target.value)}
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
                  </div>
                  </>
                   
                    
                
                )
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
