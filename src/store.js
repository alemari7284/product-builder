import { configureStore } from '@reduxjs/toolkit'
import reducer from './CarSlice'

export default configureStore({
  reducer,
})
