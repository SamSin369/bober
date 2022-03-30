import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import "moment/locale/ru";
import { contractRef, db } from "../../firestore/firestore-config";
import {
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { useParams } from "react-router-dom";
import { defaultData } from "../../data/defaultDetails";
import { Button, Icon } from "semantic-ui-react";
import EditDetailsForm from "../Forms/EditDetails/EditDetails";
import moment from "moment";
const Dashboard = () => {
  const [isInfo, setIsInfo] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [detailedData, setDetailedData] = useState({});
  const [editDetailedData, setEditDetailedData] = useState({
    supplyForSale: 1,
    fixedSalePrice: 1,
    purchaseLimitsMax: 1,
    numberOfTokensInOneContract: 1,
    registrationOpens: moment(Date.now(), "DD-MM-YYYY"),
    registrationEnds: moment(Date.now(), "DD-MM-YYYY"),
    salePeriodStart: moment(Date.now(), "DD-MM-YYYY"),
    salePeriodEnd: moment(Date.now(), "DD-MM-YYYY"),
    averageQuoficient: 10,
    lockupAndRelease: {
      text: "",
      numberOfParts: 4,
      dates: {
        0: Date.now(),
        1: Date.now(),
        2: Date.now(),
      },
      numberOfTokens: 400,
    },
    participantNumber: 1,
    numberOfContracts: 1,
    investmentAmount: 1,
    totalNumberOfTokens: 1,
  });

  const [contractInfo, setContactInfo] = useState([]);
  const { contractId } = useParams();
  // const resetData = async ()  => {
  //   console.log("AAA")
  //   const docRef = doc(db, "events", contractId);

  //       await updateDoc(docRef, {
  //         editDetailedData: {
  //           supplyForSale: 0,
  //           fixedSalePrice: 0,
  //           purchaseLimitsMax: 0,
  //           numberOfTokensInOneContract: 0,
  //           registrationOpens: Date.now(),
  //           registrationEnds: Date.now(),
  //           salePeriodStart: Date.now(),
  //           salePeriodEnd: Date.now(),
  //           lockupAndRelease: {
  //             text: "",
  //             numberOfParts: 4,
  //             dates: Date.now(),
  //             numberOfTokens: 400,
  //           },
  //           participantNumber: 0,
  //           numberOfContracts: 0,
  //           investmentAmount: 0,
  //           totalNumberOfTokens: 0,
  //         }
  //   })
  // }

  useEffect(() => {
    // resetData();
    getDetailedInfo();
    console.log(moment.locales());
    moment.locale("ru");
    var localLocale = moment();
    console.log(moment().format("LLLL"));
    console.log(moment.locales());
  }, []);

  const handleEdit = (multipleParams, name, data, keyName, isDate, index) => {
    let readyData;
    console.log("INDEX", editDetailedData);
    console.log(multipleParams);
    if (multipleParams === true) {
      readyData = {
        name: name,
        data: data,
        contract: contractId,
        keyName,
        isDate,
      };
    } else if (index + 1) {
      console.log("SOON", editDetailedData.lockupAndRelease.dates);
      readyData = {
        name: name,
        data: data[index],

        contract: contractId,
        keyName,
        isDate,
        index: index,
      };
      console.log(readyData, "GUCCI");
    } else {
      readyData = {
        name: name,
        data: [data],
        contract: contractId,
        keyName,
        isDate,
      };
    }

    setDetailedData(readyData);
    setEditOpen(true);
  };

  const getDetailedInfo = async () => {
    const docRef = doc(db, "events", contractId);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data(), "DOCK SNAP");
    console.log("STATUS OF DOC", docSnap.exists());

    if (!docSnap.data().editDetailedData) {
      console.log("docsnap not here");
      setEditDetailedData(defaultData);
      updateDoc(docRef, {
        editDetailedData: defaultData,
      })
        .then(function () {
          console.log("Update Successful");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("docsnap here");
      console.log(docSnap.data().editDetailedData, "SNAP");
      setEditDetailedData(docSnap.data().editDetailedData);
    }
  };

  const updateContract = async (setDefault) => {
    const docRef = doc(db, "events", contractId);

    setDoc(docRef, { editDetailedData }, { merge: true });
  };
  // console.log(editDetailedData.registrationOpens.seconds, "dates in component")
  // console.log(editDetailedData.registrationOpens, "dates in component")

  return (
    <>
      {editOpen ? (
        <EditDetailsForm
          detailedData={detailedData}
          editOpen={editOpen}
          setEditOpen={setEditOpen}
          setEditDetailedData={setEditDetailedData}
        />
      ) : null}
      <div class="cybr-btn-wrap">
        {!isInfo ? (
          <button class="cybr-btn" onClick={(e) => setIsInfo(true)}>
            Посмотреть Данные<span aria-hidden>_</span>
            <span aria-hidden class="cybr-btn__glitch">
            Посмотреть Данные_
            </span>
            <span aria-hidden class="cybr-btn__tag">
              R25
            </span>
          </button>
        ) : (
          <button class="cybr-btn" onClick={(e) => setIsInfo(false)}>
            Посмотреть Финансы<span aria-hidden>_</span>
            <span aria-hidden class="cybr-btn__glitch">
            Посмотреть Финансы_
            </span>
            <span aria-hidden class="cybr-btn__tag">
              R25
            </span>
          </button>
        )}
      </div>
      {isInfo? <div id="statsWrapper">
        <div class="hit-the-floor" id="m-topper">
          Условия Выпуска Токенов!
        </div>
        <div class="textCard">
          <Button
            onClick={() =>
              handleEdit(
                true,
                "Условия контракта",
                [
                  {
                    labelName: "условия выпуска токенов",
                    formValue: editDetailedData.lockupAndRelease.text,
                    keyName: "lockupAndRelease.text",
                  },
                  {
                    labelName: "Количество Токенов",
                    formValue: editDetailedData.lockupAndRelease.numberOfParts,
                    keyName: "lockupAndRelease.numberOfParts",
                  },
                ],

                false
              )
            }
            color="grey"
            icon="edit"
            id="specialEditContract"
          />
          {console.log(editDetailedData.lockupAndRelease.numberOfParts)}
          <h1 class="textCardH1">
            Количесво Частей:{editDetailedData.lockupAndRelease.numberOfParts}
          </h1>
          <div class="textCardContent">
            <div class="textCardStyles">
              Условия:{editDetailedData.lockupAndRelease.text}
            </div>
          </div>
        </div>
        {/* {console.log("helloooo",...Array(editDetailedData.lockupAndRelease.numberOfParts))} */}
        {[
          ...Array(parseInt(editDetailedData.lockupAndRelease.numberOfParts)),
        ].map((part, index) => (
          <div class="timeline" key={index}>
            <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
              <div class="timeline__event__icon ">
                <Icon name="time" />
                <div class="timeline__event__date">
                  {moment(
                    editDetailedData.lockupAndRelease.dates[index]
                  ).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                </div>
              </div>
              <div class="timeline__event__content ">
                <div class="timeline__event__title">
                  Количество Токенов На Выдочу:{" "}
                  {editDetailedData.purchaseLimitsMax /
                    editDetailedData.fixedSalePrice /
                    editDetailedData.lockupAndRelease.numberOfParts}
                </div>
                <div class="timeline__event__description">
                  <p></p>
                </div>
              </div>
            </div>
            <Button
              onClick={() =>
                handleEdit(
                  false,
                  "Дата Выдочи",
                  editDetailedData.lockupAndRelease.dates,
                  "lockupAndRelease.dates",
                  true,
                  index
                )
              }
              color="grey"
              icon="edit"
            />
          </div>
        ))}

        <div class="containerDash">
          <ul class="responsive-table">
            <li class="table-header">
              <div class="col col-1">Номер</div>
              <div class="col col-2">Имя</div>
              <div class="col col-3">Количество</div>
              <div class="col col-4">Управление</div>
            </li>

            <li class="table-row">
              <div class="col col-1">1</div>
              <div class="col col-2">количество токен на продажу</div>
              <div class="col col-3">{editDetailedData.supplyForSale}</div>
              <div class="col col-4">
                {" "}
                <Button
                  onClick={() =>
                    handleEdit(
                      false,
                      "количество токен на продажу",
                      editDetailedData["supplyForSale"],
                      "supplyForSale",
                      false,
                      false
                    )
                  }
                  color="grey"
                  icon="edit"
                />
              </div>
            </li>
            <li class="table-row">
              <div class="col col-1">2</div>
              <div class="col col-2">номинал</div>
              <div class="col col-3">{editDetailedData["fixedSalePrice"]}</div>
              <div class="col col-4">
                <Button
                  onClick={() =>
                    handleEdit(
                      false,
                      "номинал ",
                      editDetailedData["fixedSalePrice"],
                      "fixedSalePrice",
                      false,
                      false
                    )
                  }
                  color="grey"
                  icon="edit"
                />
              </div>
            </li>
            <li class="table-row">
              <div class="col col-1">3</div>
              <div class="col col-2">цена договора</div>
              <div class="col col-3">
                {editDetailedData["purchaseLimitsMax"]}
              </div>
              <div class="col col-4">
                <Button
                  onClick={() =>
                    handleEdit(
                      false,
                      "цена договора",
                      editDetailedData["purchaseLimitsMax"],
                      "purchaseLimitsMax",
                      false,
                      false
                    )
                  }
                  color="grey"
                  icon="edit"
                />
              </div>
            </li>
            <li class="table-row">
              <div class="col col-1">4</div>
              <div class="col col-2"> количество токенов в 1 договоре </div>
              <div class="col col-3">
                {editDetailedData.purchaseLimitsMax /
                  editDetailedData.fixedSalePrice}
              </div>
              <div class="col col-4">
                {/* <Button
                onClick={() =>
                  handleEdit(
                    "количество токенов в 1 договоре ",
                    editDetailedData["numberOfTokensInOneContract"],
                    "numberOfTokensInOneContract",
                    false
                  )
                }
                color="grey"
                icon="edit"
              /> */}
              </div>
            </li>
            <li class="table-row">
              <div class="col col-1">5</div>
              <div class="col col-2">Регистрация открывается</div>
              <div class="col col-3">
                {moment(editDetailedData.registrationOpens)
                  .locale("ru")
                  .format("dddd, MMMM Do YYYY, h:mm:ss a")}
                {/* {moment().format(
                "dddd, MMMM Do YYYY, h:mm:ss a",
                editDetailedData.registrationOpens
              )} */}
              </div>
              <div class="col col-4">
                <Button
                  onClick={() =>
                    handleEdit(
                      false,
                      "Регистрация открывается",
                      editDetailedData.registrationOpens,
                      "registrationOpens",
                      true,
                      false
                    )
                  }
                  color="grey"
                  icon="edit"
                />
              </div>
            </li>
            <li class="table-row">
              <div class="col col-1">6</div>
              <div class="col col-2">регистрации завершается </div>
              <div class="col col-3">
                {moment(editDetailedData.registrationEnds).format(
                  "dddd, MMMM Do YYYY, h:mm:ss a"
                )}
              </div>
              <div class="col col-4">
                <Button
                  onClick={() =>
                    handleEdit(
                      false,
                      "регистрации завершается",
                      editDetailedData["registrationEnds"],
                      "registrationEnds",
                      true,
                      false
                    )
                  }
                  color="grey"
                  icon="edit"
                />
              </div>
            </li>
            <li class="table-row">
              <div class="col col-1">7</div>
              <div class="col col-2">Окончание периода распродажи</div>
              <div class="col col-3">
                {moment(editDetailedData.salePeriodStart).format(
                  "dddd, MMMM Do YYYY, h:mm:ss a"
                )}
              </div>
              <div class="col col-4">
                <Button
                  onClick={() =>
                    handleEdit(
                      false,
                      "Окончание периода распродажи",
                      editDetailedData["salePeriodStart"],
                      "salePeriodStart",
                      true,
                      false
                    )
                  }
                  color="grey"
                  icon="edit"
                />
              </div>
            </li>

            <li class="table-row">
              <div class="col col-1">9</div>
              <div class="col col-2">
                фактическое количество участников на распродаже
              </div>
              <div class="col col-3">{editDetailedData.participantNumber}</div>
              <div class="col col-4">
                <Button
                  onClick={() =>
                    handleEdit(
                      false,
                      "фактическое количество участников на распродаже",
                      editDetailedData["participantNumber"],
                      "participantNumber",
                      false,
                      false
                    )
                  }
                  color="grey"
                  icon="edit"
                />
              </div>
            </li>
            <li class="table-row">
              <div class="col col-1">10</div>
              <div class="col col-2">количество полученных договоров</div>
              <div class="col col-3">{editDetailedData.numberOfContracts}</div>
              <div class="col col-4">
                <Button
                  onClick={() =>
                    handleEdit(
                      false,
                      "количество полученных договоров",
                      editDetailedData["numberOfContracts"],
                      "numberOfContracts",
                      false,
                      false
                    )
                  }
                  color="grey"
                  icon="edit"
                />
              </div>
            </li>
            <li class="table-row">
              <div class="col col-1">11</div>
              <div class="col col-2">инвестиционная сумма </div>
              <div class="col col-3">{editDetailedData.investmentAmount}</div>
              <div class="col col-4">
                <Button
                  onClick={() =>
                    handleEdit(
                      false,
                      "инвестиционная сумма ",
                      editDetailedData["investmentAmount"],
                      "investmentAmount",
                      false,
                      false
                    )
                  }
                  color="grey"
                  icon="edit"
                />
              </div>
            </li>
            <li class="table-row">
              <div class="col col-1">12</div>
              <div class="col col-2">общее количество токенов </div>
              <div class="col col-3">
                {editDetailedData.totalNumberOfTokens}
              </div>
              <div class="col col-4">
                <Button
                  onClick={() =>
                    handleEdit(
                      false,
                      "количество токен на продажу",
                      editDetailedData["totalNumberOfTokens"],
                      "totalNumberOfTokens",
                      false,
                      false
                    )
                  }
                  color="grey"
                  icon="edit"
                />
              </div>
            </li>
          </ul>
        </div>
      </div> : 
      
      <div class="wrapper">
        <div class="hit-the-floor">ОЖИДАЕМАЯ ЦЕНА 10x</div>
        {console.log((parseInt(editDetailedData.fixedSalePrice)) * parseInt(editDetailedData.totalNumberOfTokens), "maths")}
      <div class="table">
        
        <div class="row header">
          <div class="cell">
            Имя Формулы
          </div>
      
          <div class="cell">
            Количесво Полученно
          </div>
        </div>
       
        <div class="row">
          <div class="cell" data-title="Name">
          вероятная  средняя  цена (10х ) 
          </div>
      
          <div class="cell" data-title="Location">
            {parseInt(editDetailedData.fixedSalePrice) * 10}
          </div>
        </div>
        <div class="row">
          <div class="cell" data-title="Name">
          вероятная  средняя  прибыль (10х ) 
          </div>
       
          <div class="cell" data-title="Location">
            {(parseInt(editDetailedData.fixedSalePrice) * 10) * parseInt(editDetailedData.totalNumberOfTokens)}
          </div>
        </div>
        <div class="row">
          <div class="cell" data-title="Name">
          доля одного участника
          </div>
      
          <div class="cell" data-title="Location">
            {(parseInt(editDetailedData.fixedSalePrice) * 10) * parseInt(editDetailedData.totalNumberOfTokens) / parseInt(editDetailedData.participantNumber)}
          </div>
        </div>
        <div class="row">
          <div class="cell" data-title="Name">
          доля офиса 20%
          </div>
       
          <div class="cell" data-title="Location">
            {((parseInt(editDetailedData.fixedSalePrice) * 10) * parseInt(editDetailedData.totalNumberOfTokens)) * 0.2}
          </div>
        </div>
        
        <div class="row">
          <div class="cell" data-title="Name">
          доля учиастников  40%
          </div>
       
          <div class="cell" data-title="Location">
            {((parseInt(editDetailedData.fixedSalePrice) * 10) * parseInt(editDetailedData.totalNumberOfTokens)) * 0.4}
          </div>
        </div>
        
        <div class="row">
          <div class="cell" data-title="Name">
          доля выделяемая на проекты  40%
          </div>
      
          <div class="cell" data-title="Location">
          {((parseInt(editDetailedData.fixedSalePrice) * 10) * parseInt(editDetailedData.totalNumberOfTokens)) * 0.4}
          </div>
        </div>
        
      </div>
      <div class="hit-the-floor">МИНИМАЛЬНО ОЖИДАЕМАЯ ЦЕНА 4x</div>
        {console.log((parseInt(editDetailedData.fixedSalePrice)) * parseInt(editDetailedData.totalNumberOfTokens), "maths")}
      <div class="table">
        
        <div class="row header">
          <div class="cell">
            Имя Формулы
          </div>
      
          <div class="cell">
            Количесво Полученно
          </div>
        </div>
       
        <div class="row">
          <div class="cell" data-title="Name">
          вероятная  средняя  цена (4х ) 
          </div>
      
          <div class="cell" data-title="Location">
            {parseInt(editDetailedData.fixedSalePrice) * 4}
          </div>
        </div>
        <div class="row">
          <div class="cell" data-title="Name">
          вероятная  средняя  прибыль (4х ) 
          </div>
       
          <div class="cell" data-title="Location">
            {(parseInt(editDetailedData.fixedSalePrice) * 4) * parseInt(editDetailedData.totalNumberOfTokens)}
          </div>
        </div>
        <div class="row">
          <div class="cell" data-title="Name">
          доля одного участника
          </div>
      
          <div class="cell" data-title="Location">
            {(parseInt(editDetailedData.fixedSalePrice) * 4) * parseInt(editDetailedData.totalNumberOfTokens) / parseInt(editDetailedData.participantNumber)}
          </div>
        </div>
        <div class="row">
          <div class="cell" data-title="Name">
          доля офиса 20%
          </div>
       
          <div class="cell" data-title="Location">
            {((parseInt(editDetailedData.fixedSalePrice) * 4) * parseInt(editDetailedData.totalNumberOfTokens)) * 0.2}
          </div>
        </div>
        
        <div class="row">
          <div class="cell" data-title="Name">
          доля учиастников  40%
          </div>
       
          <div class="cell" data-title="Location">
            {((parseInt(editDetailedData.fixedSalePrice) * 4) * parseInt(editDetailedData.totalNumberOfTokens)) * 0.4}
          </div>
        </div>
        
        <div class="row">
          <div class="cell" data-title="Name">
          доля выделяемая на проекты  40%
          </div>
      
          <div class="cell" data-title="Location">
          {((parseInt(editDetailedData.fixedSalePrice) * 4) * parseInt(editDetailedData.totalNumberOfTokens)) * 0.4}
          </div>
        </div>
        
      </div>
      <div class="hit-the-floor"> МАКСИМАЛЬНАЯ ОЖИДАЕМАЯ ЦЕНА 30x</div>
        {console.log((parseInt(editDetailedData.fixedSalePrice)) * parseInt(editDetailedData.totalNumberOfTokens), "maths")}
      <div class="table">
        
        <div class="row header">
          <div class="cell">
            Имя Формулы
          </div>
      
          <div class="cell">
            Количесво Полученно
          </div>
        </div>
       
        <div class="row">
          <div class="cell" data-title="Name">
          вероятная  средняя  цена (30х ) 
          </div>
      
          <div class="cell" data-title="Location">
            {parseInt(editDetailedData.fixedSalePrice) * 30}
          </div>
        </div>
        <div class="row">
          <div class="cell" data-title="Name">
          вероятная  средняя  прибыль (30х ) 
          </div>
       
          <div class="cell" data-title="Location">
            {(parseInt(editDetailedData.fixedSalePrice) * 30) * parseInt(editDetailedData.totalNumberOfTokens)}
          </div>
        </div>
        <div class="row">
          <div class="cell" data-title="Name">
          доля одного участника
          </div>
      
          <div class="cell" data-title="Location">
            {(parseInt(editDetailedData.fixedSalePrice) * 30) * parseInt(editDetailedData.totalNumberOfTokens) / parseInt(editDetailedData.participantNumber)}
          </div>
        </div>
        <div class="row">
          <div class="cell" data-title="Name">
          доля офиса 20%
          </div>
       
          <div class="cell" data-title="Location">
            {((parseInt(editDetailedData.fixedSalePrice) * 30) * parseInt(editDetailedData.totalNumberOfTokens)) * 0.2}
          </div>
        </div>
        
        <div class="row">
          <div class="cell" data-title="Name">
          доля учиастников  40%
          </div>
       
          <div class="cell" data-title="Location">
            {((parseInt(editDetailedData.fixedSalePrice) * 30) * parseInt(editDetailedData.totalNumberOfTokens)) * 0.4}
          </div>
        </div>
        
        <div class="row">
          <div class="cell" data-title="Name">
          доля выделяемая на проекты  40%
          </div>
      
          <div class="cell" data-title="Location">
          {((parseInt(editDetailedData.fixedSalePrice) * 30) * parseInt(editDetailedData.totalNumberOfTokens)) * 0.4}
          </div>
        </div>
        
      </div>
      
      
     
     
        
      
    </div>
      }
    </>
  );
};

export default Dashboard;
