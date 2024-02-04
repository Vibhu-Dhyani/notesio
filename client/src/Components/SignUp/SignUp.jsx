import React from "react";
import "./SignUp.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LoginSocialGoogle, LoginSocialGithub } from "reactjs-social-login";

// CUSTOMIZE ANY UI BUTTON
import {
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import Authentication from "../../Pages/Auth/Authentication";
const LogIn = ({ setAuth }) => {
  return (
    <>
      <div className="authCard_signup">
        <h1>Sign Up</h1>

        <div className="authCard_signup_inputs">
          <TextField
            label="First Name"
            type="text"
            className="authCard_signup_inputs_text"
            size="small"
          />
          <TextField
            label="Last Name"
            className="authCard_signup_inputs_text"
            size="small"
          />
          <TextField
            label="Email"
            type="email"
            autoComplete="current-password"
            className="authCard_signup_inputs_text"
            size="small"
          />
          <TextField
            label="Password"
            type="password"
            autoComplete="current-password"
            className="authCard_signup_inputs_text"
            size="small"
          />
          <Button
            variant="contained"
            size="small"
            className="authCard_signup_inputs_button"
          >
            Register
          </Button>
        </div>
        <p>
          Already a User?
          <span onClick={() => setAuth(false)}>Log In Here</span>
        </p>
      </div>
    </>
  );
};

export default LogIn;
