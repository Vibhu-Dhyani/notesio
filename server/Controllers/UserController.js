const User = require("../Models/UserModel");
const { createSecretToken } = require("../Middlewares/SecretToken");
const bcryptjs = require("bcryptjs");

const SignUp = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    //Check for empty fields
    if (!firstName || !lastName || !email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are mandatory", success: false });
    }
    //check for duplicate user
    const userCheck = await User.findOne({ email });
    if (userCheck) {
      return res
        .status(401)
        .json({ message: "Duplicate record found !", success: false });
    }

    //create user
    let fName = firstName + " " + lastName;

    const user = await User.create({
      fullName: fName,
      email: email,
      password: password,
    });

    //create token
    const token = await createSecretToken(user._id);
    res.cookie("Token", token, {
      httpOnly: false,
      withCredentials: true,
    });
    res
      .status(200)
      .json({ message: "User Registeration Successful", success: true, user });
    next();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

const LogIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //check empty fields

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are mandatory", success: false });
    }

    //check for user existence
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res
        .status(401)
        .json({ message: "User not found", success: false });
    }
    //check matching passwords
    const isMatch = await bcryptjs.compare(password, userExists.password);
    if (isMatch) {
      const token = createSecretToken(userExists._id);
      res.cookie("Token", token, {
        httpOnly: false,
        withCredentials: true,
      });
      res
        .status(200)
        .json({ message: "User LogIn Successful", success: true, userExists });
      next();
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

const getUserInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userInfo = await User.find({ _id: id });
    res.status(200).json({ success: true, userInfo });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
};

module.exports = { SignUp, LogIn, getUserInfo };
