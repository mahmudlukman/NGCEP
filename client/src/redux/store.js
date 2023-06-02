import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './features/globalSlice'
import authReducer from './features/authSlice'
import productReducer from './features/productSlice'

export default configureStore({
  reducer: {
    global: globalReducer,
    auth: authReducer,
    product: productReducer
  }
})