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


// GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(404).json({message: 'Something went wrong'})
  }
}

// GET SINGLE PRODUCT
export const getProduct = async (req, res) => {
  const {id} = req.params
  try {
    const product = await Product.findById(id);
    res.status(200).json(product)
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
}

// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No product exist with id: ${id}` });
    }
    await Product.findByIdAndRemove(id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { 
    usage_type, 
    type, 
    power, 
    model, 
    serial_number,
    company_name,
    address, 
    state, 
    lga,
    contact_person,
    phone,
    email
  } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No product exist with id: ${id}` });
    }

    const updatedProduct = {
      usage_type, 
      type, 
      power, 
      model, 
      serial_number,
      company_name,
      address, 
      state, 
      lga,
      contact_person,
      phone,
      email,
      _id: id,
    };
    await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};