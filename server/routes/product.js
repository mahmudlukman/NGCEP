import express from 'express'
import {createProduct, getProducts, getProduct, deleteProduct, updateProduct} from '../controllers/product.js'

const router = express.Router()

router.post("/", createProduct)
router.get("/", getProducts)
router.get("/:id", getProduct)
router.delete("/:id", deleteProduct)
router.patch("/:id", updateProduct)

export default router