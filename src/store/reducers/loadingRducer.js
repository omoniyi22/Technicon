import {
  LOGIN_START,
  LOGIN_STOP,
  REGISTER_START,
  REGISTER_STOP
} from '../types'

const initialState = {
  login_load : false,
  register_load : false
}

export default (state = initialState, action)=>{
  switch (action.type) {
    case LOGIN_START:
      return{
        ...state,
        login_load: true
      }
  
    case LOGIN_STOP:
      return{
        ...state,
        register_load: false
      }

    case REGISTER_START:
      return{
        ...state,
        register_load: true
      }
  
    case REGISTER_STOP:
      return{
        ...state,
        register_load: false
      }
    default:
      return state
  }
}