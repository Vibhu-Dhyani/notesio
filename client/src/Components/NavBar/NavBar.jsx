import React from "react";
import "./NavBar.scss";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import NotePng from "../../assets/images/note.png";
const NavBar = () => {
  return (
    <div className="nav_wrapper">
      <div className="NavBar">
        <div className="NavBar_left">
          <img src={NotePng} alt="Notes" className="NavBar_left_logo" />
          <h1 className="NavBar_left_header">Notes.io</h1>
        </div>
        <div className="NavBar_right">
          <h2 className="NavBar_right_header">ⓘ</h2>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
