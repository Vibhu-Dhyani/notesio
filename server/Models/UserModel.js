const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function () {
  const salt = await bcryptjs.genSalt(5);
  this.password = await bcryptjs.hash(this.password, salt);
});

const userModel = new mongoose.model("users", userSchema);

module.exports = userModel;
