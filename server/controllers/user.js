import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/UserModel.js'

// SIGN IN USER
export const signin = async (req, res) => {
  const {email, password} = req.body

  try {
    // check if user already exist
    const oldUser = await User.findOne({email})
    if(!oldUser) return res.status(404).json({message: "User doesn't exist"})

    // check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

    if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"})

    // sign new token if password is correct
    const token = jwt.sign({email: oldUser.email, id: oldUser._id}, process.env.JWT_SECRET, {expiresIn: "3d"})

    // return user
    res.status(200).json({result: oldUser, token})
  } catch (error){
    res.status(500).json({message: "Something went wrong"})
  }
}