import React from "react";
import NoteCard from "../../Components/NoteCard/NoteCard";
import "./MyNotes.scss";
const MyNotes = () => {
  return (
    <div className="wrapper_main">
      <div className="wrapper_mynotes">
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
