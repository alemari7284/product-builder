import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import carReducer from './CarSlice'
import sectionsReducer from './SectionSlice'
// import configureNavigationMiddleware from './navigationMiddleware'

const logger = createLogger()
// const navigationMiddleware = configureNavigationMiddleware()

const rootReducer = combineReducers({
  car: carReducer,
  sections: sectionsReducer,
})

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), logger],
})
