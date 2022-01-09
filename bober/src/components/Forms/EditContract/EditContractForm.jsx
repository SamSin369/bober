import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createContract,
  editModalData,
  toggleEditModal,
  toggleModal,
  updateContract,
} from "../../../Features/Contracts/ContractDashboard/redux/contractActions";
import "./EditContractForm.css";
import { v4 as uuidv4 } from "uuid";
import { updateContractFS } from "../../../Features/Contracts/ContractDashboard/redux/contractReducer";
import { doc, updateDoc } from "firebase/firestore";
import { contractRef, db } from "../../../firestore/firestore-config";

const EditContractForm = ({ editData, editOpen, setEditOpen }) => {
  const dispatch = useDispatch();

  console.log(editData);
  const [values, setValues] = useState(editData);
  const [editValues, setEditValues] = useState(editData);

  function openModal() {
    setEditOpen(true);
  }
  function closeModal() {
    setEditOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const docRef = doc(db, "events", values.id);
    console.log(docRef);
    updateDoc(docRef, values)
      .then((res) => {
        console.log("UPDATED", res);
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch(updateContract(values));
    setValues(editValues);
    closeModal();
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  }

  return (
    <div class="box">
      <div class={editOpen ? "active modal-container" : "modal-container"}>
        <div class="modal">
          <div class="form-wrap">
            <div class="hit-the-floor">Изменить Контракт!</div>

            <form class="form" id="formAlt"onSubmit={handleSubmit}>
              <div class="control"></div>
              <label for="REFI_num">Номер REFI</label>

              <div class="control block-cube block-input">
                <input
                  placeholder="Номер REFI"
                  type="number"
                  name="REFI_num"
                  value={values.REFI_num}
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
              <label for="REFI_name">Имя REFI</label>
              <div class="control block-cube block-input">
                <input
                  placeholder="Имя REFI"
                  type="text"
                  name="REFI_name"
                  value={values.REFI_name}
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
              <label for="REFI_ещлут">Токен REFI</label>
              <div class="control block-cube block-input">
                <input
                  placeholder="Токен REFI"
                  type="text"
                  name="REFI_token"
                  value={values.REFI_token}
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
              <label for="REFI_option">Опция REFI</label>
              <div class="control block-cube block-input">
                <input
                  placeholder="Опция REFI"
                  type="text"
                  name="REFI_option"
                  value={values.REFI_option}
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
              <label for="Spisok">Список</label>
              <div class="control block-cube block-input">
                <input
                  placeholder="Список"
                  type="text"
                  name="Spisok"
                  value={values.Spisok}
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
              <label for="option_price">Цена Опции</label>
              <div class="control block-cube block-input">
                <input
                  placeholder="Цена Опции"
                  type="number"
                  name="option_price"
                  value={values.option_price}
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
              <label for="price_today">Цена Сегодня</label>
              <div class="control block-cube block-input">
                <input
                  placeholder="Цена Сегодня"
                  type="number"
                  name="price_today"
                  value={values.price_today}
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
              <label for="investment">Инвестиция</label>
              <div class="control block-cube block-input">
                <input
                  placeholder="Инвестиция"
                  type="number"
                  name="investment"
                  value={values.investment}
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
              <label for="our_tokens">Наши Токены</label>
              <div class="control block-cube block-input">
                <input
                  placeholder="Наши Токены"
                  type="number"
                  name="our_tokens"
                  value={values.our_tokens}
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
              <label for="total_possible">Все Возможные Токены</label>
              <div class="control block-cube block-input">
                <input
                  placeholder="Все Возможные Токены"
                  type="number"
                  name="total_possible"
                  value={values.total_possible}
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
              <div id="contractWrap">
                <input
                  type="checkbox"
                  id="i"
                  name="Contract_Accepted"
                  value={values.Contract_Accepted}
                  onChange={(e) => handleInputChange(e)}
                />

                <label for="i" class="checkbox">
                  <div class="checkbox__inner">
                    <div class="green__ball"></div>
                  </div>
                </label>
                <div class="checkbox__text">
                  <div class="checkbox__text--options">
                    <span class="off">Контракт Ожидается</span>
                    <span class="on">Контракт Принят</span>
                  </div>
                </div>
              </div>

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

export default EditContractForm;
