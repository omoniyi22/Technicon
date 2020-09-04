import {
  PROFILE_ERROR,
  PROFILE_SUCCESS,
  EDIT_TIMER,
  CLEAR_ERR,
  GET_PROFILE,
  UPDATE_PROFILE,
  UPDATE_PIX
} from '../types'

import { GET_PROFILE as getProf, UPDATE_PROFILE as updateProfile, ChangeAvatar } from '../service/services'




//Get Profile
export const getProfile = async (state) => {
  try {
    console.log("get_profile")
    let res = await getProf(state)
    let data1 = await res.data
    let data2 = await data1.data
    return data2
  } catch (err) {
    return err
  }
}

// if (PIX) {
//   let talkOne = await ChangeAvatar(ID, PIX, state)
//   let talkTwo = await talkOne.data
//   let talkThree = await talkTwo.avatar
//   dispatch({ type: UPDATE_PIX, payload: talkThree })
// }

//Edit Profile
export const editProfile = (request,ID, PIX) => async (dispatch, state) => {
  console.log(request,ID, PIX)
  dispatch({
    type: EDIT_TIMER
  })
  try {
    if (PIX) {
      let talkOne = await ChangeAvatar(ID, PIX, state)
      let talkTwo = await talkOne.data
      let talkThree = await talkTwo.avatar
      dispatch({ type: UPDATE_PIX, payload: talkThree })
    }
    let reses = await updateProfile(request, state)
    console.log("copa", reses)
    let rese = await getProfile(state)
    console.log("copaf", rese)
    dispatch({
      type: GET_PROFILE,
      payload: await rese
    })
    dispatch({
      type: PROFILE_SUCCESS
    })
  } catch (err) {
    console.log(">", err.response)

    dispatch({
      type: PROFILE_ERROR,
      payload: err
    })
  }
}



export const clearErr = () => ({ type: CLEAR_ERR })