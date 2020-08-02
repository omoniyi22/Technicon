import { BLOG, NEWSLETTER, Register, Login } from "./api";
import axios from "axios";

// const configParams = {};

export function getBlogPosts() {
  return axios.get(BLOG);
}

export function newsLetter(email, firstName) {
  return axios.post(NEWSLETTER, { email, firstName });
}

export const LoginApi = async (email, password)=>{
  return axios.post(Login, {
    email, password
  })
}

export const RegisterApi = async (username, password, email)=>{
  return axios.post(Register, {
     username, password, email
  })
}

