import Product from '../models/ProductModel.js'
import mongoose from 'mongoose'

// CREATE NEW PRODUCT
export const createProduct = async (req, res) => {
  const product = req.body
  const newProduct = new Product({
    ...product,
    creator: req.userId,
  })

  try {
    await newProduct.save()
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(404).json({message: 'Something went wrong'})
  }
}