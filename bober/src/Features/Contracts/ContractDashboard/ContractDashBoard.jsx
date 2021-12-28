import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../components/Table/Table";
import { getDocs } from "firebase/firestore";
import { contractRef } from "../../../firestore/firestore-config";
import "./ContractDashboard.css";
import { CREATE_CONTRACT } from "./redux/contractConstants";
import { createContract } from "./redux/contractActions";
import { getContracts } from "./redux/contractReducer";
import { Button } from "semantic-ui-react";

const Contracts = () => {
  useEffect(() => {
    dispatch(getContracts());
  }, []);

  const dispatch = useDispatch();

  
  const contractData = useSelector((state) => state.contract.contracts);
  // const [contract, setContracts] = useState([]);

  return (
    <>
      
      <Table data={contractData} table_name={"Все Контракты"} />
    </>
  );
};

export default Contracts;
