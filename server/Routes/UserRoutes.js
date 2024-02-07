const { SignUp, LogIn, getUserInfo } = require("../Controllers/UserController");
const router = require("express").Router();

router
  .post("/signup", SignUp)
  .post("/login", LogIn)
  .get("/getUserInfo/:id", getUserInfo);

module.exports = router;
