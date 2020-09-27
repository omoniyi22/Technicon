import { TOKEN_PASSED_TO_RESET, CLEAR_ERROR, TOKEN_FAIL_TO_RESET, SET_RESET_TOKEN, TOKEN_SENDING_TO_RESET } from './../types'
const initialState = {
  token: "",
  id: "",
  loading: false,
  sent: false,
  fail: false,
  error: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RESET_TOKEN:
      return {
        ...state,
        token: action.payload[0],
        id: action.payload[1]
      }
    case TOKEN_SENDING_TO_RESET:
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

    case TOKEN_FAIL_TO_RESET:
      return {
        ...state,
        loading: false,
        sent: false,
        fail: true,
        error: action.payload
      }
    case TOKEN_PASSED_TO_RESET:
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