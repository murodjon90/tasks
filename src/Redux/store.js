import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import taskReducer from './Reducers/taksReducer'

export default createStore(taskReducer, applyMiddleware(logger))