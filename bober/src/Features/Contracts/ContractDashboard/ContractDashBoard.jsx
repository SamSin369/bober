import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../components/Table/Table";
import { getDocs } from "firebase/firestore";
import { contractRef } from "../../../firestore/firestore-config";
import "./ContractDashboard.css";
import { CREATE_CONTRACT } from "./redux/contractConstants";
import { getContracts } from "./redux/contractReducer";
import { getGoingCoinRate } from "../../../api/geckoClient";

const Contracts = () => {
  return (
    <>
      <Table />
    </>
  );
};

export default Contracts;
