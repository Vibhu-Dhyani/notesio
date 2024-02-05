const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.createSecretToken = (_id) => {
  const { JWT_KEY } = process.env;
  return jwt.sign({ _id }, JWT_KEY, {
    expiresIn: 15 * 24 * 60 * 60,
  });
};
