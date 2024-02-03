import React from "react";
import "./LogIn.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LogIn = () => {
  return (
    <>
      <div className="authCard_login">
        <h1>Log In</h1>
        <div className="authCard_login_inputs">
          <TextField
            id="outlined-password-input"
            label="Email"
            type="email"
            autoComplete="current-password"
            className="authCard_login_inputs_text"
            size="small"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            className="authCard_login_inputs_text"
            size="small"
          />
          <Button
            variant="contained"
            size="small"
            className="authCard_login_inputs_button"
          >
            LogIn
          </Button>
        </div>
        <p>
          New User? <span>Register Here</span>
        </p>
        <div className="line"></div>
      </div>
    </>
  );
};

export default LogIn;
