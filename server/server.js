//imports
const express = require("express");
const mongoose = require("mongoose");
const Users = require("./Models/UserModel");
require("dotenv").config();
const UserRoutes = require("./Routes/UserRoutes");
const NoteRoutes = require("./Routes/NoteRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//env variables
const { PORT, MONGO_URL } = process.env;

//Connecting to database
mongoose
  .connect(MONGO_URL, {
    dbName: "NotesioDB",
  })
  .then(() => {
    console.log(`Connecte to DB`);
  })
  .catch((err) => {
    console.error(err);
  });

//creating server
const app = express();

//Make server listen
app.listen(PORT, () => {
  console.log(`server is listening on port : ${PORT}`);
});

//middlewares
app.use(
  cors({
    origin: ["http://localhost:5001", "http://localhost:5173"],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

//routes
app.use("/api/users", UserRoutes);
app.use("/api/notes", NoteRoutes);
