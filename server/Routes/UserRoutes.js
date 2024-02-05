const { SignUp } = require("../Controllers/UserController");
const router = require("express").Router();

router.post("/signup", SignUp);

module.exports = router;
