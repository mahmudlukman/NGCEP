import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './features/globalSlice'

export default configureStore({
  reducer: {
    global: globalReducer
  }
})