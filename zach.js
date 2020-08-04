// const axios = require('axios')
// function de (){

// const axios = require('axios')
// const body = JSON.stringify({ email:"narcisse.egonu@gmail.com",
// password: "ninja@1234"});

//   axios.post('https://technicon-api.herokuapp.com/api/v1/auth/login', body, 
//    {
//     headers: {
//       'Content-Type': 'application/json; charset=utf-8'
//     }
//   }
//  )
// .then(res => console.log("hey" , res.data.data))
// .catch(err=>{
//   console.log("hey", err, err)
// })
// }
// de()





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
//  let b = await a.data
//  console.log("hey" , b)
// }catch (err) {
//      console.log("heye", err.response.data.message, err.response.status) // catches both errors
//   }
// }



// function de (){

// const axios = require('axios')
// const body = JSON.stringify({ email:"narcisse.egonu@gmail.com",
// password: "ninja@1234"});

//   axios.post('https://technicon-api.herokuapp.com/api/v1/complaint', {
// 	"description" : "Screen damaged",
// 	"device_type" : "IPHONE X",
// 	"email" : "narcisse.egonu@gmail.com",
// 	"dispatch_rider" : true,
// 	"phone_number" : "07067656140",
// 	"device_brand":"Apple",
// 	"pickup" : "University of Ibadan",
// 	"delivery":"Bodija"	
// }	, 
//    {
//     headers: {
//       'Content-Type': 'application/json',
//       'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjAxZDY0MWEwNjRkMDAyNGJmY2U4NiIsImVtYWlsIjoibmFyY2lzc2UuZWdvbnVAZ21haWwuY29tIiwiaWF0IjoxNTk2NTE3MDAxLCJleHAiOjE1OTY2MDM0MDF9.Nbd1EfbjlIHDY1ZphKyzQyr-HpeCEmNAVXKAvWzlKBU'
//     }
//   }
//  )
// .then(res => console.log("hey" , res.data.data))
// .catch(err=>{
//   console.log("hey", err, err)
// })
// }
// de()

function de(a, b) {
  let num = a.match(/\d+/g)
  let alf = a.match(/[A-Za-z]/g)
  if (alf !== null) {
    console.log('this contains number')
      console.log('this conatins alpha')
    if (alf !== null) {
    }
  }
}

de('2w2..')