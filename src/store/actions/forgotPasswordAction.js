import { TOKEN_FAIL_TO_MAIL, TOKEN_PASSED_TO_MAIL, CLEAR_ERROR, TOKEN_SENDING_TO_MAIL } from './../types'
import { getForgotToken } from './../service/services'
import { EmailTest } from './Util'


export const sendError = (error) =>
  ({
    type: TOKEN_FAIL_TO_MAIL,
    payload: error
  })



export const sendTokenToEmail = (email) => async (dispatch) => {
  dispatch({
    type: TOKEN_SENDING_TO_MAIL
  })
  try {
    let data = await getForgotToken(email)
    let res = await data.data
    dispatch({ type: TOKEN_PASSED_TO_MAIL, payload: res })
  } catch (rror) {
    console.log("rror.response.data",rror.response.data)
    let error = rror.response !== undefined ? await rror.response.data.error : rror.message
    if (error.constructor === Object) {
      await dispatch(sendError("Network Error"))
    } else {
      await dispatch(sendError(error))
    }
  }
}

export const clearError = () => ({ type: CLEAR_ERROR })