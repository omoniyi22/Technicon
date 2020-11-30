// export const BASE = `http://localhost:8001/api/v1`
export const BASE = `https://cors-anywhere.herokuapp.com/https://technicon-api.herokuapp.com/api/v1`;
// export const BASE = `https://cors-anywhere.herokuapp.com/https://1f055bcdd77c.ngrok.io/api/v1`

//Blog
export const BLOG = `http://blog.learnam.com.ng/wp-json/wp/v2/content`;

//Newsletter
export const NEWSLETTER = `${BASE}/auth/news-letter`;

//Auth
export const SIGNUP = `${BASE}/auth/login`;

export const REGISTER = `${BASE}/auth/register`;

//Complaint
export const COMPLAINT = `${BASE}/transactions`;

//Get all Complaint
export const ALL_COMPLAINT = `${BASE}/transactions`;

// Profile
export const PROFILE = `${BASE}/auth`;

//Edit Avatar
export const Avata = `${BASE}/auth/avatar`

//Get Reciept 
export const GET_DEVICE_RECIEPT = `${BASE}/receipts`

//Pay
export const PAY_NOW = `${BASE}/receipts/pay`

//forgot password
export const FORGOT_PASSWORD = `${BASE}/auth/forgot-password`
export const RESET_PASSWORD = `${BASE}/auth/reset-password`