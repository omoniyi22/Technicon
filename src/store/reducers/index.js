import {combineReducers} from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import loadingReducer from './loadingReducer'
import transact from './TransactionReducer'
import profile  from './ProfileReducer'
import nav from './navReducer'
import device from './deviceReducer'


export default combineReducers({
  error : errorReducer,
  auth : authReducer,
  loading: loadingReducer,
  transact,
  profile,
  nav,
  device
})