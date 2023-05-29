import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  usage_type: {
    type: String,
    trim: true
  },
  type: {
    type: String,
    trim: true,
  },
  power: {
    type: String,
    trim: true,
  },
  model: {
    type: String,
    trim: true,
  },
  serial_number: {
    type: String,
    trim: true,
  },
  company_name: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  lga: {
    type: String,
    trim: true,
  },
  contact_person: {
    type: String,
    trim: true,
  },
  phone: {
    type: Number,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  }
},{
   timestamps: true,
 })

const Product = mongoose.model("Product", ProductSchema);
export default Product