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

// function de(a, b) {
//   let num = a.match(/^[0-9]+$/)
//   // let num = a.match(/\d+/i)
//   let alf = a.match(/[A-Za-z]/g)
//   if (num !== null) {
//     console.log('this contains number')
//       // console.log('this conatins alpha')
//     // if (alf !== null) {
//     // }
//   }
// }

// de('22')

// function validateEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     console.log(re.test(email))
// }
// validateEmail('wwewe@dsd.com')


// function fola(p) {
//   let items
//   let content = 3
//   items = Math.ceil(p.length / content)
//   let i = 0
//   let j
//   let len = []
//   while (i < items) {
//     j = p.splice(0, content)
//     len.push(j)
//     i++
//   }
//   return (len)
// }
// let v = fola([1, 2, 3, 4, 5, 6, 7, 2, 3, 8, 3])[0]
// v.map(i=>console.log(i))