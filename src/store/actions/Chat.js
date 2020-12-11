import {
  ADMIN_CHAT, CLIENT_CHAT, RECIEVE_ALL_CHAT, CLEAR_CHAT,
  CHAT_LOAD, CHAT_ERROR, GOT_ALL_CHAT,

} from '../types'
import { getTransChat, postTransChat } from '../service/services'
import { AdminChatFilter, UserChatFilter } from './Util'



// export const getAllChat = (socket) => async (dispatch, state) => {
//   let token = await state().auth.token
//   let trans_id = await state().device.device_receipt.trans_id
//   let emit_message = {
//     trans_id : "ONtOvx7fY",
//     token
//   }
//   socket.emit('get_transaction_chats', emit_message)
// }
export const getAllChat = (goDown) => async (dispatch, state) => {
  let compliant_id = state().device.selected._id
  // let compliant_id = "5fbebbadad1b0c0024a5a811"
  dispatch({ type: CHAT_LOAD, payload: true })
  try {
    let chats = await getTransChat(compliant_id, state)
    chats = await chats.data
    chats = await chats.data
    console.log(chats)
    dispatch({
      type: GOT_ALL_CHAT,
      payload: {
        admin_messages: AdminChatFilter(chats),
        client_messages: UserChatFilter(chats)
      }
    })
    dispatch({ type: CHAT_LOAD, payload: false })
    goDown()
  } catch (error) {
    console.log({ momo: error.response })
    dispatch({ type: CHAT_LOAD, payload: false })
    dispatch({ type: CHAT_ERROR, payload: false })
  }
}

export const sendChat = (message, goDown) => async (dispatch, state) => {
  let complaint_id = state().device.selected._id
  let data = {
    complaint_id,
    message,
    member_id: state().auth.id,
    user_type: "USER"
  }
  console.log({ data })
  dispatch({ type: CHAT_LOAD, payload: true })


  try {
    let chats = await postTransChat(data, state)
    chats = await getTransChat(complaint_id, state)
    chats = await chats.data
    chats = await chats.data
    dispatch({
      type: GOT_ALL_CHAT,
      payload: {
        admin_messages: AdminChatFilter(chats),
        client_messages: UserChatFilter(chats)
      }
    })

    dispatch({ type: CHAT_LOAD, payload: false })
    goDown()
  } catch (error) {
    console.log({ momo: error.response })
    dispatch({ type: CHAT_LOAD, payload: false })
    dispatch({ type: CHAT_ERROR, payload: false })
  }
}

export const recieveAllChat = (socket, goDown) => async (dispatch) => {
  await socket.on('got_all_chats', async message => {
    await dispatch({ type: RECIEVE_ALL_CHAT, payload: message })
    await goDown()
  })
}

export const getAdminChat = (socket, message) => async (dispatch, state) => {
  let token = await state().auth.token
  let trans_id = await state().device.device_receipt.trans_id
  let emit_message = {
    token,
    trans_id: "ONtOvx7fY",
    message
  }
  await socket.emit('admin_chat', emit_message)
}

export const recieveAdminChat = (socket, goDown) => async (dispatch) => {
  await socket.on('got_admin_chats', async message => {
    await dispatch({ type: ADMIN_CHAT, payload: message })
    await goDown()
  })
}

export const getClientChat = (socket, message) => async (dispatch, state) => {
  let token = await state().auth.token
  let trans_id = await state().device.device_receipt.trans_id
  let emit_message = {
    token,
    trans_id: "ONtOvx7fY",
    message
  }
  await socket.emit('client_chat', emit_message)
}

export const recieveClientChat = (socket, goDown) => async (dispatch) => {
  await socket.on('got_client_chats', async message => {
    await dispatch({ type: CLIENT_CHAT, payload: message })
    await goDown()
  })
}

export const recieveErrorMessage = (socket, goDown) => async (dispatch) => {
  await socket.on('got_error_message', async message => {
    await dispatch({ type: ADMIN_CHAT, payload: message })
    await goDown()
  })
}

export const clearChat = () => ({ type: CLEAR_CHAT })