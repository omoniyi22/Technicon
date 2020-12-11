import {
  BLOG, NEWSLETTER, COMPLAINT, ALL_COMPLAINT, SIGNUP, REGISTER, CHAT,
  PROFILE, Avata, GET_DEVICE_RECIEPT, PAY_NOW, FORGOT_PASSWORD, RESET_PASSWORD
} from "./api";
import axios from "axios";

//Header config 
export const tokenConfig = (getState, doi) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': !doi ? 'application/json' : "multipart/form-data"
    }
  };

  if (token) {
    config.headers['x-access-token'] = token;
  }
  //console.log(config)
  return config;
};


//Blog
// export function getBlogPosts() {
//   return axios.get(BLOG);
// }

// export function newsLetter(email, firstName) {
//   return axios.post(NEWSLETTER, { email, firstName }, { tokenConfig });
// }

//LOGIN 


//POSTComplaint
export const POSTcomplaint = async (
  {
    complaint,
    device_type,
    email,
    dispatchRider,
    phone_number,
    device_brand,
    pickup_location,
    delivery_loaction,
    device_name
  },
  getToken

) => {
  return axios.post(COMPLAINT,
    {
      complaint,
      device_type,
      email,
      dispatchRider,
      phone_number,
      device_brand,
      pickup_location,
      delivery_loaction,
      device_name

    },
    tokenConfig(getToken))
}

// GETALL COMPLAINT
export const GET_ALL_complaint = async (getToken) => {
  return axios(ALL_COMPLAINT, tokenConfig(getToken))
}

//GET_PROFILE
export const GET_PROFILE = async (getToken) => {
  return axios(PROFILE, tokenConfig(getToken))
}

//UPDATE_PROFILE
export const UPDATE_PROFILE = async ({
  location, birthday, name, address, phone_number, username
}, getToken) => {
  return axios.patch(PROFILE, {
    location, birthday, name, address, phone_number, username
  }, tokenConfig(getToken))
}


export const ChangeAvatar = async (ID, data, getState) => {
  let de = new FormData()
  de.append("avatar", data)
  return axios.patch(`${Avata}/${ID}`, de, tokenConfig(getState, true))
}
export const getRecieptNow = async (id, getState) => axios(`${GET_DEVICE_RECIEPT}/${id}`, tokenConfig(getState))
export const PayApi = async ({ trans_id, payment_method }, getToken) => axios.post(`${GET_DEVICE_RECIEPT}/${"pay"}`, { trans_id, payment_method }, tokenConfig(getToken))

export const getForgotToken = async (email) => axios.post(`${FORGOT_PASSWORD}`, { email })
export const resetForgotToken = async (token, password) => axios.post(`${RESET_PASSWORD}/${token}`, { password })

export const getTransChat = async (trans_id, getToken) => axios.get(`${CHAT}/${trans_id}/complaints`, tokenConfig(getToken))
export const postTransChat = async (data, getToken) => axios.post(`${CHAT}/send`, data, tokenConfig(getToken))