import { BLOG, NEWSLETTER, COMPLAINT, SIGNUP, REGISTER } from "./api";
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
export function getBlogPosts() {
  return axios.get(BLOG);
}



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
      // description,
      // device_type,
      // email,
      // dispatch_rider,
      // phone_number,
      // device_brand,
      // pickup,
      // delivery


  //     	"description" : "Screen damaged",
	// "device_type" : "IPHONE X",
	// "email" : "narcisse.egonu@gmail.com",
	// "dispatch_rider" : true,
	// "phone_number" : "07067656140",
	// "device_brand":"Apple",
	// "pickup" : "University of Ibadan",
	// "delivery":"Bodija"	
    },
    tokenConfig(getToken))
}

// export function newsLetter(email, firstName) {
//   return axios.post(NEWSLETTER, { email, firstName }, { tokenConfig });
// }