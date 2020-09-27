import { PAID, PAYMENT_ERROR, PAYMENT_START, SENT, OKAY } from './../types'

const initialState = {
  loading: false,
  response: "",
  error: false
}


export default (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_START:
      return {
        response: "",
        loading: true,
        error: false
      }
    case PAID:
      return {
        response: action.payload,
        loading: false,
        error: false
      }
    case SENT:
      return {
        response: action.payload,
        loading: false,
        error: false
      }
    case PAYMENT_ERROR:
      return {
        response: action.payload,
        error: true,
        loading: false
      }
    case OKAY:
      return {
        loading: false,
        response: "",
        error: false
      }
    default:
      return {
        ...state
      }
  }
}