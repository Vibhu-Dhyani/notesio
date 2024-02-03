//imports
const express = require("express");
require('dotenv').config();

//env variables
const {PORT , MONGO_URL} = process.env;

//creating server
const app = express();

app.get('/',(req,res)=>{
  res.send("I am listeining");
})

//Make server listen
app.listen(PORT,()=>{
  console.log(`server is listening on port : ${PORT}`);
});


//middlewares
app.use(express.json());