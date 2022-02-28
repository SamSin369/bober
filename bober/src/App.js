import Home from "./Pages/Home";
import ContractDashboard from "./Features/Contracts/ContractDashboard/ContractDashBoard.jsx";
import NavBar from "./Features/Nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./Features/Login/LoginForm.jsx";
import Sandbox from "./Features/Sandbox/Sandbox.jsx";
import Loader from "./components/Loader/Loader";
import { useSelector } from "react-redux";
import UserSteps from "./Features/user-steps/UserSteps";
import StepsDetailedPage from "./Features/user-steps/steps-detailed/StepsDetailedPage";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {

  const isLoading = useSelector(state => state.global.loading)
  console.log("LOADER", isLoading)
  return (
    <>
      <NavBar />
      {isLoading ? <Loader/> : null}
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Contract/Details/:contractId" element={<Dashboard />}/>
        <Route path="/Contracts" element={<ContractDashboard />} />
        <Route path="/SandBox" element={<Sandbox />} />
        <Route path="/Login" element={<UserLogin />} />
        <Route path="/Steps" element={<UserSteps/>} />
        <Route path="/Steps/1" element={<StepsDetailedPage/>}/>
      </Routes>
    </>
  );
}

export default App;
