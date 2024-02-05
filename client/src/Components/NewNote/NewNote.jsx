import React, { useState } from "react";
import "./NewNote.scss";
import { Button, TextField } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Sharepng from "../../assets/images/share.png";
import Picker from "../Picker/Picker";

const NewNote = () => {
  const tags = ["Fashion", "Sports", "Football"];
  const colors = ["#ef233c", "#2a9d8f", "#f4a261", "#e76f51", "#3d405b"];

  const [bgColor, setBgColor] = useState("#3d405b");

  return (
    <div className="newnote_wrapper_main">
      <div className="newnote_wrapper">
        <div className="newnote_wrapper_note" style={{ background: bgColor }}>
          <div className="newnote_wrapper_note_header">
            <div className="newnote_wrapper_note_header_title">
              <TextField
                label="Enter Title Here ..."
                type="text"
                className="newnote_wrapper_note_header_inputs_text"
                size="small"
              />
              <img src={Sharepng} alt="" />
            </div>
          </div>
          <Picker tags={tags} />
          <TextField
            id="outlined-multiline-static"
            label="Start Typing Here ..."
            multiline
            rows={15}
            defaultValue=""
            className="newnote_wrapper_note_header_inputs_text"
          />
          <div className="newnote_wrapper_note_footer">
            <Button
              variant="contained"
              size="small"
              color="primary"
              className="newnote_wrapper_note_footer_button"
              startIcon={<NoteAddIcon />}
            >
              Add Note
            </Button>
            <div className="newnote_wrapper_note_footer_colorpicker">
              <ul>
                {colors.map((color, idx) => (
                  <li
                    id={"circle" + idx}
                    onClick={() => {
                      setBgColor(color);
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
