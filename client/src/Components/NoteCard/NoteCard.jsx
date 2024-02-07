import React, { useState } from "react";
import "./NoteCard.scss";
import Editpng from "../../assets/images/pen.png";
import Binpng from "../../assets/images/bin.png";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Modal from "@mui/material/Modal";
import NewNote from "../NewNote/NewNote";
const NoteCard = ({
  title,
  noteBody,
  createdBy,
  createdAt,
  color,
  tags,
  _id,
  fetchData,
}) => {
  const handleDelete = async () => {
    try {
      let data = await axios.delete(
        "http://localhost:5001/api/notes/deletenote/" + _id
      );
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const data_edit = {
    title,
    noteBody,
    createdBy,
    createdAt,
    color,
    tags,
    _id,
    fetchData,
  };
  const [open, setOpen] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log(open);
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <NewNote
          handleClose={handleClose}
          calling={"edit"}
          data_edit={data_edit}
        />
      </Modal>
      <div
        className="notecard"
        style={{ backgroundColor: color }}
        onClick={handleOpen}
      >
        <div className="notecard_header">
          <div className="notecard_header_left">
            <h3>{title}</h3>
            <p>{`${new Date(createdAt).getHours()}`}</p>
          </div>
          <div className="notecard_header_right">
            {/*<img src={Editpng} alt="" />*/}
            <img src={Binpng} alt="" onClick={handleDelete} />
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
            {noteBody.slice(0, 50) + `...`}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteCard;
