import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import reducer from './CarSlice'

const logger = createLogger()

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
})
