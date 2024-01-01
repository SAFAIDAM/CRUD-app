const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: Number, require: true },
    enroll: { type: Number, require: true },
    // image: { type: String, require: true }


  }
)
const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;