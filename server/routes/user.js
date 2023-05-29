import express from 'express'
import { getAllUsers, getUser, updateUser, deleteUser } from '../controllers/user.js'

const router = express.Router()

router.get("/", getAllUsers)
router.get("/:id", getUser)
router.patch("/:d", updateUser)
router.delete("/:id", deleteUser)

export default router