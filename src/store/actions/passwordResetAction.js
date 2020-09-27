import { TOKEN_FAIL_TO_RESET, TOKEN_PASSED_TO_RESET, SET_RESET_TOKEN, CLEAR_ERROR, TOKEN_SENDING_TO_RESET } from './../types'
import { resetForgotToken } from './../service/services'

export const sendError = (error) =>
  ({
    type: TOKEN_FAIL_TO_RESET,
    payload: error
  })

export const sendTokenToEmail = (password) => async (dispatch, state) => {
  let token = state().reset_password.token
  let id = state().reset_password.id
  dispatch({
    type: TOKEN_SENDING_TO_RESET
  })
  try {
    let data = await resetForgotToken(`${token}/${id}`, password)
    let res = await data.data
    dispatch({ type: TOKEN_PASSED_TO_RESET, payload: res })
  } catch (rror) {
    console.log("rror.response.data",rror.response.data)
    let error = rror.response !== undefined ? await rror.response.data.error : rror.message
      await dispatch(sendError("An error occured"))
  }
}

export const clearError = () => ({ type: CLEAR_ERROR })
export const SetToken = (id, token) => ({ type: SET_RESET_TOKEN, payload: [id, token] })