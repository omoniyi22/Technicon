import { START_TRANSACTION } from './../types'
import { T_ERROR, T_SUCCESS, TS1, TS2, TS3, TS4 } from './../types'
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
  let prevData =  await Taoma().transact.TS2_data
  if (getState === null) {
    let data = await POSTcomplaint(prevData, Taoma)
    console.log("my-self", data)
    dispatch({
      type: TS2
    })
  } else {
    try{
    prevData = await {...prevData, ...getState}
    console.log(getState)
    let data = await POSTcomplaint(prevData, Taoma)
    let resp = await data.status
    console.log(resp)
    }catch(err){
    console.log('office', err)
    }
    
    dispatch({
      type: TS2
    })
  }
}


export const YourID = () => {
  return {
    type: TS3
  }
}
export const Thanks = () => {
  return {
    type: TS4
  }
}


