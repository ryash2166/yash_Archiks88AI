import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   credits: {
//     type: Number,
//     default: 246, // Initial credits for new users
//   },
//   name: String,
//   bio: String,
//   avatar: String, // Store Base64 string or URL
// });

const userSchema = new mongoose.Schema({
  // email: { type: String, unique: true, required: true },
  // password: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email format",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters"],
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  name: { type: String, default: "" },
  bio: { type: String, default: "" },
  avatar: { type: String, default: "" },
  credits: { type: Number, default: 246 },
  images: [{ type: mongoose.Schema.Types.ObjectId, ref: "Image" }],
  createdAt: { type: Date, default: Date.now },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.compareNewPassword = async function (newPassword) {
  return await bcrypt.compare(newPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
