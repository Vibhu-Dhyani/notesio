const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  noteBody: {
    type: String,
    required: true,
  },
  tags: [{ type: String }],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  bgColor: { type: String, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
});

const noteModel = new mongoose.model("notes", notesSchema);

module.exports = noteModel;
