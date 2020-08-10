import {
  PROFILE_ERROR,
  PROFILE_SUCCESS,
  EDIT_TIMER,
  GET_PROFILE,
  CLEAR_ERR
} from '../types'


const initialState = {
  success: false,
  error: false,
  timer: false,
  message: "",
  profile: {}
}
export default (state = initialState, action) => {
  switch (action.type) {

    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload
      }
    case EDIT_TIMER:
      return {
        ...initialState,
        timer: true
      }
    case PROFILE_SUCCESS:
      return {
        ...state,
        error: false,
        success: true,
        timer: false,
        message: "Update successful"
      }
    case PROFILE_ERROR:
      return {
        ...state,
        error: true,
        success: false,
        timer: false,
        message: "update failed"
      }
    case CLEAR_ERR:
      return {
        ...state,
        success: false,
        error : false,
        message: ""
      }
    default:
      return state
  }
}