import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  Name: { type: String, require: true },
  Email: { type: String, require: true },
  Password: { type: String, require: true },
  Confirm_Password: { type: String, require: true },
});
const User = mongoose.model("User", userSchema);
export default User;
