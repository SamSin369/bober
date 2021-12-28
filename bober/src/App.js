import Home from "./Pages/Home";
import ContractDashboard from "./Features/Contracts/ContractDashboard/ContractDashBoard.jsx";
import NavBar from "./Features/Nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Routes} from "react-router-dom";
import UserLogin from "./Features/Login/LoginForm.jsx";
import Sandbox from "./Features/Sandbox/Sandbox.jsx";
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contracts" element={<ContractDashboard/>} />
        <Route path="/SandBox" element={<Sandbox/>} />
        <Route path="/Login" element={<UserLogin/>}/>
      </Routes>
  
   
    

     
    </>
  );
}

export default App;
