import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/counter/authSlice'
import productSlice from '../features/counter/productSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice
  },
})