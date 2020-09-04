import {
  PROFILE_ERROR,
  PROFILE_SUCCESS,
  EDIT_TIMER,
  GET_PROFILE,
  CLEAR_ERR,
  UPDATE_PIX,
  LOGIN_SUCCESS
} from '../types'


const initialState = {
  success: false,
  error: false,
  timer: false,
  message: "",
  profile: {},
  profile_pix: "",
  id: ""
}
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        profile_pix: action.payload.avatar,
        id: action.payload.id
      }
    case UPDATE_PIX:
      return {
        ...state,
        profile_pix: action.payload
      }
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        profile_pix: action.payload.avatar
      }
    case EDIT_TIMER:
      return {
        ...state,
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
        error: false,
        message: ""
      }
    default:
      return state
  }
}