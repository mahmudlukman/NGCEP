import axios from 'axios'

const API = axios.create({baseURL: "https://ngcep.onrender.com"})

export const signIn = (formData) => API.post('/auth/signin', formData)
export const signUp = (formData) => API.post('/auth/signup', formData)

export const getProducts = () => API.get("/products")
// export const getTransactions = () => API.get("/transactions")
export const getUsers = () => API.get("/users")
// export const getSales = () => API.get("/sales")
// export const getGeography = () => API.get("/geography")
export const createProduct = (formData) => API.post("/products", formData)