const router = require("express").Router();
const {
  getAllNotes,
  createNote,
  editNote,
  deleteNote,
} = require("../Controllers/NotesController");

router
  .get("/:id", getAllNotes)
  .post("/createnote", createNote)
  .put("/updatenote/:id", editNote)
  .delete("/deletenote/:id", deleteNote);

module.exports = router;
