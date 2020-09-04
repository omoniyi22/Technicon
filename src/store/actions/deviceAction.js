import { STOP_RECIEPT, DEVICE_CHAT,DECICE_SELECTED, RECIEPT_ERROR, EMPTY_RECIEPT, FETCHING_RECIEPT, GET_DEVICE_RECIEPT } from './../types'
import { getRecieptNow } from './../service/services'

export const getReciept = (id) => async (dispatch, taoma) => {
  console.log(taoma().auth.token)
  await dispatch({
    type: DECICE_SELECTED,
    payload: id
  })
  await dispatch({
    type: FETCHING_RECIEPT
  })
  try {
    let res = await getRecieptNow(id.trans_id, taoma)
    res = await res.data
    res = await res.data
    console.log(res)
    if (Object.keys(res).length < 1) {
      console.log("nothing dey")
      dispatch({
        type: EMPTY_RECIEPT,
      })
    } else {
      res = await res
      console.log("something dey")
      dispatch({
        type: GET_DEVICE_RECIEPT,
        payload: res
      })
    }
  } catch (error) {
    console.log(error)
    dispatch({
      type: RECIEPT_ERROR,
      payload: error.message
    })
  }
  await dispatch({
    type: STOP_RECIEPT,
  })
}