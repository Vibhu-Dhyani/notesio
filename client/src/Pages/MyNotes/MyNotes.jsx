import React, { useState } from "react";
import NoteCard from "../../Components/NoteCard/NoteCard";
import Pluspng from "../../assets/images/plus.png";
import Modal from "@mui/material/Modal";
import "./MyNotes.scss";
import NewNote from "../../Components/NewNote/NewNote";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MyNotes = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log(open);
    setOpen(false);
  };

  return (
    <div className="wrapper_main">
      <div className="wrapper_mynotes">
        <div className="wrapper_mynotes_newnote" onClick={handleOpen}>
          <img src={Pluspng} alt="" />
        </div>
        <Modal open={open} onClose={handleClose}>
          <NewNote />
        </Modal>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
};

export default MyNotes;
