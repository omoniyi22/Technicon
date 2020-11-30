import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import loadingReducer from './loadingReducer'
import transact from './TransactionReducer'
import profile from './ProfileReducer'
import nav from './navReducer'
import device from './deviceReducer'
import payment from './paymentReducer'
import chat from './chatReducer'
import forgotPassword from './forgot_password'
import reset_password from './reset_password_reducer'


export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  loading: loadingReducer,
  transact,
  profile,
  nav,
  device,
  payment,
  chat,
  reset_password,
  forgotPassword
})