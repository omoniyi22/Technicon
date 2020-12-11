import { STOP_RECIEPT, DEVICE_CHAT, DECICE_SELECTED, RECIEPT_ERROR, EMPTY_RECIEPT, FETCHING_RECIEPT, GET_DEVICE_RECIEPT, PAYMENT_START, SENT, PAID, PAYMENT_ERROR, T_SUCCESS, OKAY } from './../types'
import { getRecieptNow, PayApi } from './../service/services'
import CustomPaystack from './../../components/Transact_Process/paystack/paystack'

import {
  ADMIN_CHAT, CLIENT_CHAT, RECIEVE_ALL_CHAT, CLEAR_CHAT,
  CHAT_LOAD, CHAT_ERROR, GOT_ALL_CHAT,

} from '../types'
import { getTransChat, postTransChat } from '../service/services'
import { AdminChatFilter, UserChatFilter } from './Util'


export const getReciept = (id) => async (dispatch, state) => {
  //console.log(state().auth.token)
  let compliant_id = state().device.selected._id
  await dispatch({
    type: DECICE_SELECTED,
    payload: id
  })
  await dispatch({
    type: FETCHING_RECIEPT
  })
  dispatch({ type: CHAT_LOAD, payload: true })


  try {
    let res = await getRecieptNow(id.trans_id, state)
    res = await res.data
    res = await res.data
    //console.log(res)

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


    if (Object.keys(res).length < 1) {
      //console.log("nothing dey")
      dispatch({
        type: EMPTY_RECIEPT,
      })
    } else {
      res = await res
      //console.log("something dey")
      dispatch({
        type: GET_DEVICE_RECIEPT,
        payload: res
      })
    }
  }
  catch (error) {


    dispatch({
      type: RECIEPT_ERROR,
      payload: error.message
    })
    console.log({ momo: error.response })
    dispatch({ type: CHAT_LOAD, payload: false })
    dispatch({ type: CHAT_ERROR, payload: false })
  }
  await dispatch({
    type: STOP_RECIEPT,
  })
}

export const payAction = (input, reDirect) => async (dispatch, time) => {
  try {
    reDirect.push('/dashboard')
    reDirect.push('/result')
    //console.log("input", input)
    let trans_id = time().device.device_receipt.trans_id
    let payment_method = input
    await dispatch({ type: PAYMENT_START })
    let res = await PayApi({ trans_id, payment_method }, time)
    res = await res.data
    res = await res.data

    if (input === "CARD") {
      const payload = {
        email: await res.email,
        amount: await res.amount,
        reference: await res.reference
      }
      const onSuccess = () => {
        if (res.trackingCode) {
          dispatch({ type: PAID, payload: "PAID" })
        }
      }
      const onError = (error) => {
        dispatch({ type: PAYMENT_ERROR, payload: "an error occured" })
      }
      CustomPaystack.pay(payload, onSuccess, onError)
    } else {
      await dispatch({ type: SENT, payload: "SENT" })
      //console.log("datan", res)
    }
  } catch (error) {
    dispatch({ type: PAYMENT_ERROR, payload: error.message })
  }
}

export const okayAction = () => ({ type: OKAY })