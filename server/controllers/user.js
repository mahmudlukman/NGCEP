import User from '../models/UserModel.js'
import bcrypt from 'bcrypt'

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').lean().sort({createdAt: -1})
    if(!users?.length){
      return res.status(400).json({message: 'No users found'})
    }
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({message: "Something went wrong"})
  }
}

// GET A SINGLE USER
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message: "Something went wrong"})
  }
}

// UPDATE USER


// DELETE
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User has been deleted")
  } catch (err) {
    res.status(500).json({message: "Something went wrong"})
  }
}