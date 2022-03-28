import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import 'moment/locale/ru';
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
import { Button } from "semantic-ui-react";
import EditDetailsForm from "../Forms/EditDetails/EditDetails";
import moment from "moment";
const Dashboard = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [detailedData, setDetailedData] = useState({});
  const [editDetailedData, setEditDetailedData] = useState( {
    "supplyForSale": 0,
    "fixedSalePrice": 0,
    "purchaseLimitsMax": 0,
    "numberOfTokens": 0,
    "registrationOpens": moment(Date.now(), 'DD-MM-YYYY'),
    "registrationEnds": moment(Date.now(), 'DD-MM-YYYY'),
    "salePeriodStart": moment(Date.now(), 'DD-MM-YYYY'),
    "salePeriodEnd": moment(Date.now(), 'DD-MM-YYYY'),
    "lockupAndRelease": {
        "numberOfParts": 0,
        "dates": [moment(Date.now(), 'DD-MM-YYYY')],
        "numberOfTokens": 0

    },
    "participantNumber": 0,
    "numberOfContracts":0,
    "investmentAmount": 0,
    "totalNumberOfTokens": 0,
});

  const [contractInfo, setContactInfo] = useState([]);
  const { contractId } = useParams();
  useEffect(() => {
    getDetailedInfo();
    console.log(moment.locales())
    moment.locale('ru')
    var localLocale = moment();
    console.log(moment().format('LLLL'));
    console.log(moment.locales())
  }, []);

  const handleEdit = (name, data, keyName, isDate) => {
    const readyData = {
      name: name,
      data: data,
      contract: contractId,
      keyName,
      isDate,
    };
    setDetailedData(readyData);
    setEditOpen(true);
  };

  const getDetailedInfo = async () => {
    const docRef = doc(db, "events", contractId);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data(), "DOCK SNAP")
    console.log("STATUS OF DOC", docSnap.exists())

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
                    "количество токен на продажу",
                    editDetailedData["supplyForSale"],
                    "supplyForSale",
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
                    "номинал ",
                    editDetailedData["fixedSalePrice"],
                    "fixedSalePrice",
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
            <div class="col col-3">{editDetailedData["purchaseLimitsMax"]}</div>
            <div class="col col-4">
              <Button
                onClick={() =>
                  handleEdit(
                    "цена договора",
                    editDetailedData["purchaseLimitsMax"],
                    "purchaseLimitsMax",
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
            <div class="col col-3">{editDetailedData.numberOfTokens}</div>
            <div class="col col-4">
              <Button
                onClick={() =>
                  handleEdit(
                    "количество токенов в 1 договоре ",
                    editDetailedData["numberOfTokens"],
                    "numberOfTokens",
                    false
                  )
                }
                color="grey"
                icon="edit"
              />
            </div>
          </li>
          <li class="table-row">
            <div class="col col-1">5</div>
            <div class="col col-2">Регистрация открывается</div>
            <div class="col col-3">
              {moment(editDetailedData.registrationOpens).locale("ru").format("dddd, MMMM Do YYYY, h:mm:ss a")}
              {/* {moment().format(
                "dddd, MMMM Do YYYY, h:mm:ss a",
                editDetailedData.registrationOpens
              )} */}
            </div>
            <div class="col col-4">
              <Button
                onClick={() =>
                  handleEdit(
                    "Регистрация открывается",
                    editDetailedData.registrationOpens,
                    "registrationOpens",
                    true
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
            {moment(editDetailedData.registrationEnds).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </div>
            <div class="col col-4">
              <Button
                onClick={() =>
                  handleEdit(
                    "регистрации завершается",
                    editDetailedData["registrationEnds"],
                    "registrationEnds",
                    true
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
            <div class="col col-3">{moment(editDetailedData.salePeriodStart).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
            <div class="col col-4">
              <Button
                onClick={() =>
                  handleEdit(
                    "Окончание периода распродажи",
                    editDetailedData["salePeriodStart"],
                    "salePeriodStart",
                    true
                  )
                }
                color="grey"
                icon="edit"
              />
            </div>
          </li>
          <li class="table-row">
            <div class="col col-1">8</div>
            <div class="col col-2">условия выпуска токенов </div>
            <div class="col col-3">4</div>
            <div class="col col-4">
              <Button
                onClick={() =>
                  handleEdit(
                    "условия выпуска токенов",
                    editDetailedData["supplyForSale"],
                    "supplyForSale",
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
                    "фактическое количество участников на распродаже",
                    editDetailedData["participantNumber"],
                    "participantNumber",
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
                    "количество полученных договоров",
                    editDetailedData["numberOfContracts"],
                    "numberOfContracts",
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
                    "инвестиционная сумма ",
                    editDetailedData["investmentAmount"],
                    "investmentAmount",
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
            <div class="col col-3">{editDetailedData.totalNumberOfTokens}</div>
            <div class="col col-4">
              <Button
                onClick={() =>
                  handleEdit(
                    "количество токен на продажу",
                    editDetailedData["totalNumberOfTokens"],
                    "totalNumberOfTokens",
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
    </>
  );
};

export default Dashboard;
