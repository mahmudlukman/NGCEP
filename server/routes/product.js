import express from 'express'
import {createProduct, getProducts, getProduct, deleteProduct} from '../controllers/product.js'

const router = express.Router()

router.post("/", createProduct)
router.get("/", getProducts)
router.get("/:id", getProduct)
router.delete("/:id", deleteProduct)

export default router