import {
  T_SUCCESS, T_ERROR, TS1, TS3, TS2, TS4
} from '../types'

const initialState = {
  TS1: false,
  TS2: false,
  TS2_data: {},
  TS3: false,
  TS3_data: {},
  TS4: false,
  error : {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TS1:
      return {
        TS1: true,
        TS2_data: action.payload
      }
      
    case TS2:
      return {
        ...state,
        TS2: true,
        TS2_data: action.payload
      }

    case TS3:
      return {
        ...state,
        TS3: true,
        TS3_data: action.payload
      }
      
    case T_ERROR:
      return{
        ...state,
        error: action.payload
      }

    case TS4:
      return {
        TS1: false,
        TS2: false,
        TS2_data: {},
        TS3: false,
        TS3_data: {}
      }

    default:
      return state
  }
}