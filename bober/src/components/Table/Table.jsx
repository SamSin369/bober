import { deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";

import {
  deleteContract,
  toggleModal,
} from "../../Features/Contracts/ContractDashboard/redux/contractActions";
import { TOGGLE_MODAL } from "../../Features/Contracts/ContractDashboard/redux/contractConstants";
import { contractRef, db } from "../../firestore/firestore-config";
import ContractForm from "../Forms/CreateContract/ContractForm";
import EditContractForm from "../Forms/EditContract/EditContractForm";
import axios from "axios";
import { getGoingCoinRate } from "../../api/geckoClient";
const Table = () => {
  const [coinPriceData, setCoinPriceData] = useState([]);
  const [liveContracts, setLiveContracts] = useState([]);

  const [apiCall, setApiCall] = useState(null);

  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const [editData, setEditData] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
     getContracts()
    const startProcess = async () => {
     
      setInterval(() => {
        setLiveCoinRate();
      }, 3000);
    };
    startProcess();
  }, []);

  let theContracts = [];

  // const getFSContracts = async () => {
  //   console.log("AJKSBNCKJASBCKJASB");
  //   getDocs(contractRef).then((snapshot) => {
  //     snapshot.docs.map((document) => {
  //       return theContracts.push({ ...document.data(), id: document.id });
  //     });

  //     setCoinPriceData(theContracts);
  //   });
  // };

  const handleCreate = () => {
    setCreateOpen(true);
    dispatch(toggleModal(true));
  };
  const handleEdit = (data) => {
    // dispatch(editModalData(contract_key))

    setEditOpen(true);
    setEditData(data);
  };

  const handleDelete = (data) => {
    console.log("My Data", data.id);
    const docRef = doc(db, "events", data.id);
    console.log(docRef);

    deleteDoc(docRef)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch(deleteContract(data.contract_key));
  };
  let fsContracts;

  const setLiveCoinRate = async () => {
    let coinsToSearch = [];
    let arrayToState = [];
    let priceDataGecko = [];

    await getContracts();

    fsContracts.forEach((coin) => {
      arrayToState.push(coin);
      if (!coinsToSearch.includes(coin.REFI_name)) {
        coinsToSearch.push(coin.REFI_name);
      }
    });

    getGoingCoinRate(coinsToSearch, "usd", (res) => {
      priceDataGecko = res.data

      fsContracts.forEach((coin, i) => {
   
        // fsContracts.findIndex(fsContracts)
       if(priceDataGecko[coin.REFI_name]["usd"]) {
        fsContracts[i].price_today  = priceDataGecko[coin.REFI_name]["usd"] 
       } else {
        fsContracts[i].price_today = "Ошибка"
       }
        
        
      
      })
      console.log("UPDATED CONTRACTS",fsContracts)
      setLiveContracts(fsContracts)
     
    }, (err) => {
      throw err
    })

    // console.log(coinsToSearch, "HITTING");

    console.log("CONTRACT IN FUNC", fsContracts);
  };

  const getContracts = async () => {
    let contracts = [];
    getDocs(contractRef).then((snapshot) => {
      snapshot.docs.forEach((document) => {
        contracts.push({ ...document.data(), id: document.id });
      });
      fsContracts = contracts;
      
      return new Promise((resolve, reject) => {
        resolve("Promise Resolved");
      });
    });
  };

  console.log("PLEASE", liveContracts)
  return (
    <>
      {createOpen && (
        <ContractForm createOpen={createOpen} setCreateOpen={setCreateOpen} />
      )}
      {editOpen && (
        <EditContractForm
          editData={editData}
          editOpen={editOpen}
          setEditOpen={setEditOpen}
        />
      )}
      <div className="Card">
        <div className="CardInner">
          <label>Поиск Контрактов</label>
          <div className="search-container">
            <div className="Icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#657789"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div className="InputContainer">
              <input placeholder="Имя Контракта" />
            </div>
          </div>
        </div>
        <div id="search-btn-wrap">
          <Button
            className="link-1 searchBtn"
            onClick={handleCreate}
            color="green"
            content="Создать Контракт"
            icon="plus square outline"
          />
        </div>
      </div>
      <div className="table-container">
        <table className="responsive-table">
          <caption>Contract Table</caption>
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Name</th>
              <th scope="col">Token</th>
              <th scope="col">Exchange Code</th>
              <th scope="col">Option</th>
              <th scope="col">Список</th>
              <th scope="col">Контракт Принят?</th>
              <th scope="col">Цена Опции</th>
              <th scope="col">Цена Сегодня</th>

              <th scope="col">Инвестиция</th>
              <th scope="col">Наши Токены</th>
              <th scope="col">Возможных Токенов</th>
              <th scope="col">Управление Контрактом</th>
            </tr>
            {/* {data.map(title => {
              return <th scope="col">{title.REFI_name}</th>
            })} */}
          </thead>
          <tfoot>
            <tr>
              <td colSpan="7">
                <hr></hr>
                Данные Оюновляются Каждые 5 Секунд
              </td>
            </tr>
          </tfoot>
          <tbody>
            {
              liveContracts.map((row) => (
               
                <tr key={row.contract_key}>
               
               {console.log("ROW COIMG", row)}
                  <th scope="row">{row.REFI_num}</th>
                  <td data-title="Имя REFI">{row.REFI_name}</td>
                  <td data-title="Токен REFI">{row.REFI_token}</td>
                  <td data-title="Exchange Code">{row.exchange_code}</td>
                  <td data-title="REFI Опция" data-type="currency">
                    {row.REFI_option}
                  </td>
                  <td data-title="Список" data-type="currency">
                    {row.Spisok}
                  </td>
                  <td data-title="Контракт Принят" data-type="currency">
                    {row.Contract_Accepted ? "Да" : "Нет"}
                  </td>
                  <td data-title="Ценв Опции" data-type="currency">
                    {row.option_price}
                  </td>
                  <td data-title="Цена Сегодня" data-type="currency">
                    {row.price_today}
                  </td>

                  <td data-title="Инвестиция" data-type="currency">
                    {row.investment}
                  </td>
                  <td data-title="Наши Токены" data-type="currency">
                    {row.our_tokens}
                  </td>
                  <td data-title="Возможные Токены" data-type="currency">
                    {row.total_possible}
                  </td>
                  <td data-title="Управление Контрактом">
                    <Button
                      onClick={() => handleDelete(row)}
                      color="red"
                      icon="trash"
                    />
                    <Button
                      onClick={() => handleEdit(row)}
                      color="grey"
                      icon="edit"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
