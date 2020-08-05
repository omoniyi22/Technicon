import {
  T_SUCCESS, T_ERROR, TS1, TS_END, LOAD, TS2, T_GET_ALL, ALL_LOADING, T_ALL_ERROR
} from '../types'

const initialState = {
  TS1: false,
  TS2_data: {},
  TS2: false,
  Load: false,
  trackingCode: null,
  TransactError: null,
  TS3: false,
  all_loading: false,
  allTransact: []
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
        TS2: true,
        T_SUCCESS: action.payload
      }

    case T_ERROR:
      return {
        ...state,
        TS2: false,
        T_ERROR: action.payload
      }

    case LOAD:
      return {
        ...state,
        Load: action.payload
      }

    case TS2:
      return {
        ...state,
        TS3: true,
      }

    case TS_END:
      return initialState
        ;
    case ALL_LOADING:
      return {
        ...state,
        all_loading: action.payload
      }
    case T_GET_ALL:
      return {
        ...state,
        all_loading: false,
        allTransact: action.payload
      }
    case T_ALL_ERROR:
      return{
        ...state,
        all_loading:false,
        TransactError: action.payload
      }


    default:
      return state
  }
}