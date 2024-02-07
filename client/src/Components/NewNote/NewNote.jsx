import React, { useState } from "react";
import "./NewNote.scss";
import { Button, TextField } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Sharepng from "../../assets/images/share.png";
import Picker from "../Picker/Picker";
import axios from "axios";

const NewNote = ({ fetchData, handleClose, data_edit }) => {
  const colors = ["#ef233c", "#2a9d8f", "#f4a261", "#e76f51", "#3d405b"];
  const [shareTog, setShareTog] = useState(false);
  const [bg_Color, setbg_Color] = useState("#3d405b");
  const [newTag, setNewTag] = useState([]);
  const [share, setShare] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    noteBody: "",
    tags: [],
    createdBy: "",
    color: "",
  });
  let { title, noteBody, tags, color, createdBy } = formData;

  //handle input feilds change
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //create note
  const newNoteCreation = async (e) => {
    e.preventDefault();
    tags = newTag;
    color = bg_Color;
    createdBy = "65c111a227795abfdc62a026";
    try {
      const k = await axios.post("http://localhost:5001/api/notes/createnote", {
        title,
        noteBody,
        tags,
        bgColor: bg_Color,
        createdBy,
      });

      await fetchData();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  const editNote = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="newnote_wrapper_main">
      <div className="newnote_wrapper">
        <div className="newnote_wrapper_note" style={{ background: bg_Color }}>
          <div className="newnote_wrapper_note_header">
            <div className="newnote_wrapper_note_header_title">
              <TextField
                label="Enter Title Here ..."
                type="text"
                className="newnote_wrapper_note_header_inputs_text"
                size="small"
                name="title"
                value={title}
                onChange={changeHandler}
              />
              <img
                src={Sharepng}
                alt=""
                onClick={() => setShareTog(!shareTog)}
              />
            </div>
          </div>

          <Picker
            newTag={newTag}
            setNewTag={setNewTag}
            shareOrTag="Enter Tags"
          />
          {shareTog && (
            <Picker
              newTag={share}
              setNewTag={setShare}
              shareOrTag="Share With"
            />
          )}
          <TextField
            id="outlined-multiline-static"
            label="Start Typing Here ..."
            multiline
            rows={15}
            defaultValue=""
            className="newnote_wrapper_note_header_inputs_text"
            name="noteBody"
            value={noteBody}
            onChange={changeHandler}
          />
          <div className="newnote_wrapper_note_footer">
            <Button
              variant="contained"
              size="small"
              color="primary"
              className="newnote_wrapper_note_footer_button"
              startIcon={<NoteAddIcon />}
              onClick={newNoteCreation}
            >
              Add Note
            </Button>
            <div className="newnote_wrapper_note_footer_colorpicker">
              <ul>
                {colors.map((color, idx) => (
                  <li
                    id={"circle" + idx}
                    onClick={() => {
                      setbg_Color(color);
                    }}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
