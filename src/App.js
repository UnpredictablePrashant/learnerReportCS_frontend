import "./App.css";
import AdminDashboard from "./components/AdminDashboard/adminDashboard";
import Users from "./components/Users/Users";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import { CssBaseline } from "@mui/material";
import Main from "../src/components/SignIn/Main";
import Faculty from "./components/Users/Faculty";
import Career from "./components/Users/Career";

import Login from "./components/Login/Login";
import { useState } from "react";
import StudentDashboard from "./components/StudentDashboard/Pages/StudentDashboard";
import { Discusion } from "./components/StudentDashboard/Pages/Discusion";
import Ticket from "./components/StudentDashboard/Pages/Ticket";
import { ChakraProvider } from '@chakra-ui/react'
import UserRegistration from "./components/code/UserRegistrationUI";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState();
  const [authToken, setAuthToken] = useState();
  const [usertype,setUsertype] = useState('');
  const loginHandler = (data) => {
    console.log(data);
    setIsLoggedIn(data.isLoggedIn);
    setUserData(data.userDetails);
    setAuthToken(data.token);
    setUsertype(data.type)
  };







  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        backgroundColor: "rgb(249, 250, 251)",
      }}
    >
      <CssBaseline />
      {usertype ==="admin" && isLoggedIn && <NavBar />}
      

      <main
        style={{
          flexGrow: 1,
          padding: "2em",
          height: "100%",
        }}
      >
        <Routes>

          <Route path='/' element={<Login onLogin={loginHandler}></Login>}/>
          <Route path='/userregister' element={<UserRegistration/>}/>
          {isLoggedIn &&<Route path='/dashboard' element={<AdminDashboard />} />}
          {isLoggedIn &&<Route path='/users' element={<Users authToken={authToken}/>} />}
          {isLoggedIn &&<Route path='/faculty' element={<Faculty authToken={authToken}/>} />}
          {isLoggedIn &&<Route path='/career' element={<Career authToken={authToken}/>} />}
          {isLoggedIn &&<Route path='/main' element={<Main />} />}
          {isLoggedIn && <Route path='/student' element={
            <ChakraProvider>
            <StudentDashboard />
            </ChakraProvider>
          } />}
          {isLoggedIn &&<Route path='/discussion' element={<Discusion/>} />}
          {isLoggedIn &&<Route path='/ticket' element={<Ticket/>} />}
       
         
       

        </Routes>
      </main>
    </div>
  );
}

export default App;

// "repository": {
//   "type": "git",
//   "url": "git+https://github.com/UnpredictablePrashant/learnerReportCS_frontend.git"
// },
// "author": "",
// "license": "ISC",
// "bugs": {
//   "url": "https://github.com/UnpredictablePrashant/learnerReportCS_frontend/issues"
// },
// "homepage": "https://github.com/UnpredictablePrashant/learnerReportCS_frontend#readme"
