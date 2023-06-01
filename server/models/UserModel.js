import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ["user", "admin", "superadmin"],
    default: "user"
  }
},{
   timestamps: true,
 })

const User = mongoose.model("User", UserSchema);
export default User