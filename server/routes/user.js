import express from 'express'
import { getAllUsers, getUser, deleteUser } from '../controllers/user.js'

const router = express.Router()

router.get("/", getAllUsers)
router.get("/:id", getUser)
router.delete("/:id", deleteUser)

export default router