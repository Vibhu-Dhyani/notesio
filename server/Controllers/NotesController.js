const mongoose = require("mongoose");
const Notes = require("../Models/NotesModel");
const User = require("../Models/UserModel");
const getAllNotes = async (req, res, next) => {
  try {
    const { id } = req.params;
    let allNotes = await Notes.find({ createdBy: id })
      .populate("createdBy", "email")
      .populate("sharedWith", "email");

    let sharedNotes = await Notes.find({
      sharedWith: { $in: [id] },
    })
      .populate("createdBy", "email")
      .populate("sharedWith", "email");
    allNotes = [...allNotes, ...sharedNotes];

    res.status(201).json({ success: true, allNotes });
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false });
  }
};

const createNote = async (req, res, next) => {
  try {
    const { title, noteBody, tags, bgColor, createdBy, sharedWith } = req.body;
    if (!title || !noteBody) {
      return json
        .status(400)
        .json({ message: "All Fields are required", success: false });
    }
    const note = await Notes.create({
      title,
      noteBody,
      tags,
      bgColor,
      sharedWith,
      createdBy,
    });
    res
      .status(201)
      .json({ message: "Note creation successfull", success: true, note });
    next();
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "Note Creation failed", success: false });
  }
};

const editNote = async (req, res, next) => {
  try {
    const { title, noteBody, tags, bgColor, createdBy, sharedWith } = req.body;
    const { id } = req.params;

    const note = await Notes.findByIdAndUpdate(
      id,
      {
        title,
        noteBody,
        tags,
        bgColor,
        createdBy,
        sharedWith,
      },
      { new: true }
    );
    res
      .status(201)
      .json({ message: "Note updation successfull", success: true, note });
    next();
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Error Occured while updation", success: false });
  }
};

const deleteNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    const note = await Notes.findByIdAndDelete(id);
    res
      .status(201)
      .json({ message: "Note deletion successfull", success: true });
    next();
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Error Occured while deletion", success: false });
  }
};

module.exports = { getAllNotes, createNote, editNote, deleteNote };
