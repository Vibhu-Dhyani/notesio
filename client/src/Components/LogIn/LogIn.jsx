import React from "react";
import "./LogIn.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LoginSocialGoogle, LoginSocialGithub } from "reactjs-social-login";

// CUSTOMIZE ANY UI BUTTON
import {
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";

const LogIn = ({ setAuth }) => {
  return (
    <>
      <div className="authCard_login">
        <h1>Log In</h1>

        <div className="authCard_login_inputs">
          <TextField
            label="Email"
            type="email"
            autoComplete="current-password"
            className="authCard_login_inputs_text"
            size="small"
          />
          <TextField
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
          New User? <span onClick={() => setAuth(true)}>Register Here</span>
        </p>
        {/* <div className="line"></div>
        <h5>OR</h5>
        <div className="authCard_login_social">
          <LoginSocialGoogle>
            <GoogleLoginButton size="30px" iconSize="20px" />
          </LoginSocialGoogle>
          <LoginSocialGithub>
            <GithubLoginButton size="30px" iconSize="20px" />
          </LoginSocialGithub>
        </div>*/}
      </div>
    </>
  );
};

export default LogIn;
