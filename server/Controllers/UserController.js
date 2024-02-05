const User = require("../Models/UserModel");
const { createSecretToken } = require("../Middlewares/SecretToken");
const bcryptjs = require("bcryptjs");

const SignUp = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res
      .status(400)
      .json({ message: "All fields are mandatory", success: false });
  }

  const userCheck = await User.findOne({ email });
  if (userCheck) {
    return res
      .status(401)
      .json({ message: "Duplicate record found !", success: false });
  }
  let fName = firstName + " " + lastName;
  try {
    const user = await User.create({
      fullName: fName,
      email: email,
      password: password,
    });
    const token = await createSecretToken(user._id);
    res.cookie("userToken", token, {
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

module.exports = { SignUp };
