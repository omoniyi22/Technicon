import axios from 'axios'
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGOUT_SUCCESS,
  USER_LOADING,
  GET_PROFILE
} from './../types'
import { getProfile } from './profileAction'
import { returnErrors } from './errorActions'
import { LoginStart, LoginStop, RegisterStart, RegisterStop } from './loadingAction'
import { LoginApi, RegisterApi } from './../service/services'

export const LoadUserAction = () => async () => {

}

export const LoginAction = (getState) => async (dispatch, state) => {
  dispatch({
    type: USER_LOADING
  })
  dispatch(LoginStart())
  const body = await {
    email: "narcisse.egonu@gmail.com",
    password: "ninja@1234"
  };
  console.log(getState)
  try {

    let data = await axios.post('https://cors-anywhere.herokuapp.com/https://technicon-api.herokuapp.com/api/v1/auth/login', getState)
    let rose = await data.data
    let sop = await rose.data

    dispatch({
      type: LOGIN_SUCCESS,
      payload: await sop
    })
    let profile = await getProfile(state)
    console.log(profile)
    dispatch({
      type: GET_PROFILE,
      payload: await profile
    })
    dispatch(LoginStop())

  } catch (err) {
    dispatch(returnErrors(
      err.response !== undefined ? err.response.data.error : 'Login failed',
      err.response !== undefined ? err.response.status : 500,
      LOGIN_FAIL
    ))
    dispatch({
      type: LOGIN_FAIL
    })
    dispatch(LoginStop())
  }
}



export const RegisterAction = (getState) => async (dispatch) => {
  dispatch(RegisterStart())
  try {
    let response = await axios.post('https://cors-anywhere.herokuapp.com/https://technicon-api.herokuapp.com/api/v1/auth/register', getState,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    let data = await response.data.data
    dispatch(RegisterStop())
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch(RegisterStop())
    dispatch(returnErrors(
      err.response !== undefined ? err.response.data.message : 'Registeration failed',
      err.response !== undefined ? err.response.status : 500,
      REGISTER_FAIL
    ))
    dispatch({
      type: REGISTER_FAIL
    })
  }
}

export const logOutAction = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}