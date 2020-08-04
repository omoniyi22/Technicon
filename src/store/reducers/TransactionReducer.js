import {
  T_SUCCESS, T_ERROR, TS1, TS_END, TS3, TS2, TS4
} from '../types'

const initialState = {
  TS1: false,
  TS2_data: {},
  TS2: false,
  trackingCode: null,
  TransactError: null,
  TS3: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TS1:
      return {
        ...state,
        TS1: true,
        TS2_data: action.payload
      }

    case T_SUCCESS:
      return {
        ...state,
        TS2: true,
        T_SUCCESS: action.payload

      }

    case T_ERROR:
      return {
        ...state,
        TS2: false,
        T_ERROR: action.payload
      }
      
    case TS2:
      return {
        ...state,
        TS3: true,
      }


    case TS_END:
      return initialState

    default:
      return state
  }
}