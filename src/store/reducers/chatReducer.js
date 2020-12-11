import {
  ADMIN_CHAT, CLIENT_CHAT, RECIEVE_ALL_CHAT, CLEAR_CHAT,
  CHAT_LOAD, CHAT_ERROR, GOT_ALL_CHAT,
} from '../types'
import { DateSorter } from '../actions/Util'
const initialState = {
  chat_error: "",
  admin_chat: [],
  client_chat: [],
  all_chat: [],
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CHAT:
      return {
        ...state,
        admin_chat: action.payload.admin_messages,
        client_chat: action.payload.client_messages,
        all_chat: DateSorter([...action.payload.admin_messages, ...action.payload.client_messages])
      }
    case CHAT_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case CHAT_LOAD:
      return {
        ...state,
        loading: action.payload
      }
    case CLEAR_CHAT:
      return {
        admin_chat: [],
        client_chat: [],
        all_chat: [],
        chat_error: ""
      }
    case ADMIN_CHAT:
      return {
        ...state,
        all_chat: DateSorter([...state.all_chat, action.payload]),
        admin_chat: [...state.admin_chat, action.payload]
      }
    case CLIENT_CHAT:
      return {
        ...state,
        all_chat: DateSorter([...state.all_chat, action.payload]),
        client_chat: [...state.client_chat, action.payload]
      }
    default:
      return {
        ...state
      }
  }
}