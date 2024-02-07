import React, { useEffect, useState } from "react";
import NoteCard from "../../Components/NoteCard/NoteCard";
import Pluspng from "../../assets/images/plus.png";
import Modal from "@mui/material/Modal";
import "./MyNotes.scss";
import NewNote from "../../Components/NewNote/NewNote";
import axios from "axios";

const MyNotes = () => {
  const [data, setData] = useState();
  const id = "65c111a227795abfdc62a026";
  const fetchData = async () => {
    try {
      let dataReceived = await axios.get(
        "http://localhost:5001/api/notes/" + id
      );

      setData(dataReceived.data.allNotes);
      //console.log(dataReceived.data.allNotes);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
          <NewNote fetchData={fetchData} handleClose={handleClose} />
        </Modal>
        {data ? (
          data.map((note, index) => {
            return (
              <NoteCard
                title={note.title}
                noteBody={note.noteBody}
                createdAt={note.createdAt}
                tags={note.tags}
                color={note.bgColor}
                createdBy={note.createdBy}
                _id={note._id}
                fetchData={fetchData}
              />
            );
          })
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};

export default MyNotes;
