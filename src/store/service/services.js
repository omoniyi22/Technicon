import {
  BLOG, NEWSLETTER, COMPLAINT, ALL_COMPLAINT, SIGNUP, REGISTER,
  PROFILE, Avata, GET_DEVICE_RECIEPT
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
  console.log(config)
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