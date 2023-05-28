import User from '../models/UserModel.js'

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

// GET
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({message: "Something went wrong"})
  }
}