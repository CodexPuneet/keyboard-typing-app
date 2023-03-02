const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  Name: String,
  Difficulty: String,
  Score: Number,
});

const UserModel = mongoose.model("typing", UserSchema);

module.exports = { UserModel };