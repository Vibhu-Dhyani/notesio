import React, { useState } from "react";
import "./Authentication.scss";
import LogIn from "../../Components/LogIn/LogIn";
import SignUp from "../../Components/SignUp/SignUp";
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";
const Authentication = () => {
  const [auth, setAuth] = useState(false);

  return (
    <div className="auth_wrapper">
      <div className="authCard">
        <h1 className="authCard_header">
          Welcome to <span className="authCard_header_highlight">Notes.io</span>
        </h1>
        {auth === false ? (
          <LogIn setAuth={setAuth} />
        ) : (
          <SignUp setAuth={setAuth} />
        )}
      </div>
    </div>
  );
};

export default Authentication;
