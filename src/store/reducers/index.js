import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
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


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', "profile", "chat", "device", "transact"]
}

const combine = combineReducers({
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

export default persistReducer(persistConfig, combine)
