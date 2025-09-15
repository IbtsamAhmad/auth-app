const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const generateVerificationCode = require("../utils/generateVerificationCode");

const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!req.body || !email || !password || !name) {
      throw new Error("All fields are required");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }
    
    const hashedPassword =  await bcrypt.hash(password, 10)
    const verificationToken = generateVerificationCode()
    const user = new User({
       email,
       password: hashedPassword,
       name,
       verificationToken,
       verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000

     });

     await user.save()


  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  res.send("login func");
};

const logout = async (req, res) => {
  res.send("logout");
};

module.exports = {
  signup,
  login,
  logout,
};
