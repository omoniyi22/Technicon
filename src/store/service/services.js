import { BLOG, NEWSLETTER, COMPLAINT,ALL_COMPLAINT, SIGNUP, REGISTER } from "./api";
import axios from "axios";

//Header config 
export const tokenConfig = (getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json'
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
    description,
    device_type,
    email,
    dispatch_rider,
    phone_number,
    device_brand,
    pickup,
    delivery
  },
  getToken

) => {
  return axios.post(COMPLAINT,
    {
      description,
      device_type,
      email,
      dispatch_rider,
      phone_number,
      device_brand,
      pickup,
      delivery
    },
    tokenConfig(getToken))
}

// GETALL COMPLAINT
export const GET_ALL_complaint = async(getToken)=>{
  return axios(ALL_COMPLAINT, tokenConfig(getToken))
}

