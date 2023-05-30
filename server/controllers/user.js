import mongoose from 'mongoose'
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
    const user = await User.findById(req.params.id).select('-password')
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message: "Something went wrong"})
  }
}

// UPDATE USER
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone} = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No user exist with id: ${id}` });
    }

    const updatedUser = {
      name,
      email,
      phone,
      _id: id,
    };
    await User.findByIdAndUpdate(id, updatedUser, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};



// DELETE USER
export const deleteUser = async (req, res) => {
  const {id} = req.params
  try {
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({message: `No user exist with id: ${id}`})
    }
    await User.findByIdAndRemove(id)
    res.json({message: "User deleted Successfully"})
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
}
// export const deleteUser = async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id)
//     res.status(200).json("User has been deleted")
//   } catch (err) {
//     res.status(500).json({message: "Something went wrong"})
//   }
// }