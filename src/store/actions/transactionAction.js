import { } from './../types'
import { T_ERROR, T_SUCCESS, TS1, TS2, TS_END } from './../types'
import { TRANSACTION_SUCCESS } from './../types'

import { POSTcomplaint } from './../service/services'

// export const startTransact = ({details})=>async (dispatch, tokenConfig)=>{
//   let res1 = await POSTcomplaint;
//   let res2 = await res1.data

//   dispatch({
//     type: START_TRANSACTION,
//     payload: {}
//   })
// }

export const transactStart = (getState) => (dispatch) => {
  dispatch({
    type: TS1,
    payload: getState
  })
}

// export const pickUp =(getState)=> async (dispatch, pickUp)=>{
//   let data = await POSTcomplaint( getState, pickUp)
//   console.log(data)
//   dispatch({
//     type: TS2,
//     payload: getState
//   })
// }

export const Office = (getState) => async (dispatch, Taoma) => {
  let prevData = await Taoma().transact.TS2_data
  if (getState === null) {
    let data = await POSTcomplaint(prevData, Taoma)
    console.log("my-self", data)
    // dispatch({
    //   type: TS2
    // })
  } else {
    let prevDatas = { ...prevData, ...getState }
    try {
      console.log(prevDatas, prevData)
      let data = await POSTcomplaint(prevDatas, Taoma)
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
        payload: err
      })
    }
  }
}


export const Your_ID = () => ({ type: TS2 })
export const Close_Transact = () => ({ type: TS_END })