import axios from 'axios'
const LoginURL = "https://technicon-api.herokuapp.com/api/v1/auth/login"
const registerURL = "https://technicon-api.herokuapp.com/api/v1//auth/register/auth/register"

export const FetchLogin = async (email, password)=>{
    let response = await axios.post(
        LoginURL, {email, password }
    )
    let data = await response.data
    if (response.status >=400 ){
        throw new Error(data.error)
    }
    return data
}

export const FetchRegister = async (email, username, password)=>{
    let response = await axios.post(
        registerURL, {email,username, password }
    )
    let data = await response.data
    if (response.status >=400 ){
        throw new Error(data.error)
    }
    return data
}