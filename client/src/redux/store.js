import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query";
import globalReducer from './features/globalSlice'
import authReducer from './features/authSlice'
import productReducer from './features/productSlice'
import {apa} from './apa'

const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: authReducer,
    product: productReducer,
    [apa.reducerPath]: apa.reducer,
  },
  middleware: (getDefault) => getDefault().concat(apa.middleware)
})
setupListeners(store.dispatch)

export default store
