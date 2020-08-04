import {combineReducers} from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import loadingReducer from './loadingReducer'
import transact from './TransactionReducer'

export default combineReducers({
  error : errorReducer,
  auth : authReducer,
  loading: loadingReducer,
  transact
})