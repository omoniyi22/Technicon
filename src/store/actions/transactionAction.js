import { LOAD, T_GET_ALL } from './../types'
import { T_ERROR, T_SUCCESS, TS1, TS2, TS_END, ALL_LOADING, T_ALL_ERROR } from './../types'
import { POSTcomplaint, GET_ALL_complaint } from './../service/services'
import {T_loader} from './Util'


export const transactStart = (getState) => (dispatch) => {
  dispatch({
    type: TS1,
    payload: getState
  })
}

export const Office = (getState) => async (dispatch, Taoma) => {
  let prevData = await Taoma().transact.TS2_data

  dispatch({
    type: LOAD,
    payload: await !Taoma().transact.Load
  })

  if (getState === null) {
    try {
      let data = await POSTcomplaint(prevData, Taoma)
      dispatch({
        type: LOAD,
        payload: await !Taoma().transact.Load
      })
      console.log("my-self", data)
      if (data.data.data.trackingCode) {
        dispatch({
          type: T_SUCCESS,
          payload: data.data.data.trackingCode
        })
      }
    } catch (err) {
      console.log('office', err)
      dispatch({
        type: T_ERROR,
        payload: err
      })
      dispatch({
        type: LOAD,
        payload: await !Taoma().transact.Load
      })
    }
  } else {
    let prevDatas = { ...prevData, ...getState }
    try {
      console.log(prevDatas, prevData)
      let data = await POSTcomplaint(prevDatas, Taoma)
      dispatch({
        type: LOAD,
        payload: await !Taoma().transact.Load
      })
      console.log(data)
      if (data.data.data.trackingCode) {
        dispatch({
          type: T_SUCCESS,
          payload: data.data.data.trackingCode
        })
      }
    } catch (err) {
      console.log('office', err)
      dispatch({
        type: T_ERROR,
        payload: err.message
      })
      dispatch({
        type: LOAD,
        payload: await !Taoma().transact.Load
      })
    }
  }
}

export const Your_ID = () => ({ type: TS2 })
export const Close_Transact = () => ({ type: TS_END })


export const AllComplaint = () => async (dispatch, Taoma) => {
  dispatch({
    type: ALL_LOADING,
    payload: await !Taoma().transact.all_loading
  })
  try {
    let data = await GET_ALL_complaint(Taoma)
    let resp = await data
    let res = await resp.data.data
    dispatch({
      type: T_GET_ALL,
      payload:  T_loader(await res)
    })
  } catch (err) {
    
    console.log(err)
    dispatch({
      type: T_ALL_ERROR,
      payload: true
    })
   
  }
}
