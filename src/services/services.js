import { BLOG, NEWSLETTER } from "./api";
import axios from "axios";

// const configParams = {};

export function getBlogPosts() {
  return axios.get(BLOG);
}

export function newsLetter(email, firstName) {
  return axios.post(NEWSLETTER, { email, firstName });
}
