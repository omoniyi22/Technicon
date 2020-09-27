import { ADMIN_CHAT, CLIENT_CHAT, RECIEVE_ALL_CHAT, CLEAR_CHAT } from '../types'

export const getAllChat = (socket) => async (dispatch, state) => {
  let token = await state().auth.token
  let trans_id = await state().device.device_receipt.trans_id
  let emit_message = {
    user_id: "admin",
    token
  }
  socket.emit('get_transaction_chats', emit_message)
}

export const recieveAllChat = (socket, goDown) => async (dispatch) => {
  await socket.on('got_all_chats', async message => {
    await dispatch({ type: RECIEVE_ALL_CHAT, payload: message })
    await goDown()
  })
}

export const getAdminChat = (socket, message) => async (dispatch, state) => {
  let trans_id = await state().device.device_receipt.trans_id
  let emit_message = {

    // Admin does not need a token here
    // Except in admin App
    // user_id represents (demo admin token)

    user_id: "admin",
    trans_id,
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
    trans_id,
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