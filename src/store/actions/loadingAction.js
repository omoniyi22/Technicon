import {
  LOGIN_START,
  LOGIN_STOP,
  REGISTER_START,
  REGISTER_STOP
} from '../types'

export const LoginStart =()=>{
  return{
   type: LOGIN_START
  }
}

export const LoginStop =()=>{
  return{
    type :LOGIN_STOP
  }
}

export const RegisterStart =()=>{
   return {type : REGISTER_START}
  }

    
 


export const RegisterStop =()=>{
  return{
    type : REGISTER_STOP
  }
}