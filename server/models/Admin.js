const mongoose = require("mongoose");
const admin = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
});
const Admin = mongoose.model("Admin", admin);
module.exports = Admin;