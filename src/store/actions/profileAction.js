import {
  PROFILE_ERROR,
  PROFILE_SUCCESS,
  EDIT_TIMER,
  CLEAR_ERR,
  GET_PROFILE
} from '../types'

import { UPDATE_PROFILE, GET_PROFILE as getProf } from '../service/services'

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



//Edit Profile
export const editProfile = (request) => async (dispatch, state) => {
  console.log(request)
  dispatch({
    type: EDIT_TIMER
  })
  try {
    let reses = await UPDATE_PROFILE(request, state)
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
    console.log(">", err)

    dispatch({
      type: PROFILE_ERROR,
      payload: err
    })
  }
}

export const clearErr = () => ({ type: CLEAR_ERR })