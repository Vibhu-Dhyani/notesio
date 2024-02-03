import React from "react";
import "./Authentication.scss";
import LogIn from "../../Components/LogIn/LogIn";
import SignUp from "../../Components/SignUp/SignUp";
import Container from "@mui/material/Container";
const Authentication = () => {
  return (
    <div className="auth_wrapper">
      <div className="authCard">
        <h1 className="authCard_header">
          Welcome to <span className="authCard_header_highlight">Notes.io</span>
        </h1>
        <LogIn />
        {/*<SignUp />*/}
      </div>
    </div>
  );
};

export default Authentication;
