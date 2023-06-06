import express from 'express'
import { getGeography } from '../controllers/geo.js'

const router = express.Router()

router.get("/", getGeography)


export default router