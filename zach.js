const axios = require('axios')
function de (){

const axios = require('axios')
const body = JSON.stringify({ email:"narcisse.egonu@gmail.co",
password: "ninja@1234"});

  axios.post('https://technicon-api.herokuapp.com/api/v1/auth/login', body, 
   {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }
 )
.then(res => console.log("hey" , res.data.data))
.catch(err=>{
  console.log("hey", err.response.data.error, err.response.status)
})
}
de()





// async function de (){

// const body = JSON.stringify({ username:"sdsdsd.co",
// password: "ninja@1234", email:"narcisdsse.egou@gmal.com"});

// try{
//   let a = await axios.post('https://technicon-api.herokuapp.com/api/v1/auth/register', body, 
//    {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }
//  )
//  let b = await a.data.data
//  console.log("hey" , b)
// }catch (err) {
//      console.log("heye", err.response.data.message, err.response.status) // catches both errors
//   }
// }


// de()