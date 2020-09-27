import { TOKEN_PASSED_TO_MAIL, CLEAR_ERROR, TOKEN_FAIL_TO_MAIL, TOKEN_SENDING_TO_MAIL } from './../types'
const initialState = {
  loading: false,
  sent: false,
  fail: false,
  error: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_SENDING_TO_MAIL:
      return {
        ...state,
        error: "",
        fail: false,
        sent: false,
        loading: true
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: "",
        sent: false
      }

    case TOKEN_FAIL_TO_MAIL:
      return {
        ...state,
        loading: false,
        sent: false,
        fail: true,
        error: action.payload
      }
    case TOKEN_PASSED_TO_MAIL:
      return {
        ...state,
        loading: false,
        sent: true,
        fail: false,
        error: ""
      }
    default:
      return {
        ...state
      }
  }
}