import React from "react";
import "./NoteCard.scss";
import Editpng from "../../assets/images/pen.png";
import Binpng from "../../assets/images/bin.png";
import TextField from "@mui/material/TextField";
const NoteCard = ({ title, noteBody, createdBy, createdAt, color, tags }) => {
  return (
    <div className="notecard">
      <div className="notecard_header">
        <div className="notecard_header_left">
          <h3>{title}</h3>
          <p>{createdAt}</p>
        </div>
        <div className="notecard_header_right">
          {/*<img src={Editpng} alt="" />*/}
          <img src={Binpng} alt="" />
        </div>
      </div>
      <div className="line"></div>
      <ul className="notecard_crumbs">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <div className="notecard_body">
        <div className="notecard_body_text">
          {noteBody.slice(0, 500) + `...`}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
