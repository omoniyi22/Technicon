import { FETCHING_RECIEPT, EMPTY_RECIEPT, STOP_RECIEPT, DECICE_SELECTED, GET_DEVICE_RECIEPT, RECIEPT_ERROR } from './../types'
const initialState = {
  device_receipt: [],
  start_: false,
  stop_: false,
  error: "",
  empty: true,
  selected: false
}

export default function deviceReducer(state = initialState, action) {
  switch (action.type) {
    case DECICE_SELECTED:
      return {
        ...state,
        selected: action.payload
      }
    case FETCHING_RECIEPT:
      return {
        ...state,
        start_: true,
        stop_: false,
        empty: true,
        error: ""
      }
    case GET_DEVICE_RECIEPT:
      return {
        ...state,
        start_: false,
        stop_: false,
        empty: false,
        error: "",
        device_receipt: action.payload
      }
    case EMPTY_RECIEPT:
      return {
        ...state,
        start_: false,
        stop_: false,
        empty: true,
        error: "",
        device_receipt: []
      }
    case STOP_RECIEPT:
      return {
        ...state,
        stop_: true,
        start_: false,
      }
    case RECIEPT_ERROR:
      return {
        ...state,
        device_receipt: [],
        start_: false,
        stop_: false,
        empty: true,
        error: action.payload
      }
    default:
      return state
  }
}