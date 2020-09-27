// import React, { Component } from "react";
// import Swiper from  'react-id-swiper';
// const pick = require('./pick.png')
// const expert = require('./expert.png')
// const realtime = require('./realtime.png')
// const picture = require('./Narce.jpg')


// class About extends Component{

//    componentDidMount(){
//     this.props.nav_in()
//   }
//     render(){
//         const params = {   
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             }
//         }
//         return(
//             <div className="About ralo">
//                 <div className="About_header pt-2   mx-0 ">
//                     <div className="H_note  fast wow fadeInDown">
//                         <div className="Bold doak font-weight-bold border-bottom">
//                             About Technicon
//                         </div>
//                         <div className="  Fluids ">
//                             TechniconNG is an emerging IT firm in Nigeria. We are dedicated to helping you maintain and also repair your faulty appliances by highly reputable and skilled technicians at the comfort of your home.

// At TechniconNG, we employ the power of technology to reduce stress, save time and also cut costs by taking orders from individuals who are interested in gadget repair. Our repair centres are also easily accessible for other walk-in customers who may not be able to reach the e-platform.

// We're committed to ensuring you as a client gets the best of treatments by rendering quality, reliable and top notch services as well as leaving you with thrilling experiences during your transaction adventure with us.


//                         <div className=" mt-2 Fluids">
// The TechniconNG squad comprises young and talented brains who have strong drives towards finessing and refining the concept of gadget maintenance in Nigeria. 
// Our vision is to grow into one of the top 3 leading IT firm in Nigeria in few years time and also spread our wings to other neighbouring countries.
//                         </div>
//                         </div>
//                     </div>
//                     <div className="pix  mx-0 py-3  delay-1s wow fadeInRight  ">
//                         <div className="author_card  mx-md-4">
//                             <div className="pictured mb-md-1">
//                                 <div className="fa fa-envelope mr-3 rounded-pill p-3 z-depth-1"/>
//                                 <div className="picture  rounded-pill  p-2 wow  slower fadeIn z-depth-1"
//                                 style={{backgroundImage: `url(${picture})`}}
//                                 >
//                                 </div>
//                                 <div className="fa fa-phone-alt ml-3 rounded-pill p-3 z-depth-1"/>
//                             </div>
//                             <div className="author_details  border-bottom-0 py-4 ">
//                                 <div className="a_name Fluids">Chris Coyier</div>
//                                 <div className="b_name Fluids">Founder, engineer</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="About_header  pt-2  mt-4 mt-md-5 mx-0 pacg">
//                     <div className="H_note  ">
//                         <div className="Bold  doak font-weight-bold border-bottom mx-auto">
//                             Why Technicon
//                         </div>
//                     </div>
//                 </div>

//                 <ul className="About_reason container-fluid w-100 text-center pacg">


//                     <div className=" diver py-2 px-2  wow zoomIn slow ">
//                         <div className="border hoda z-depth-1 px-5  rounded-lg py-4 py-md-5">    
//                             <div className="text-center">
//                                 <img src={realtime} width="110px" className="wow zoomIn slow"/>
//                             </div>
//                             <div className="why_title w-100 my-2">
//                                 Pickup and Delivery
//                             </div>
//                             <div className="why_content w-100 px-2">
//                                We pick up your device and deliver before/after or you may visit a technicon office near you.
//                             </div>
//                         </div>
//                     </div>


//                     <div className=" diver  mx-4  wow zoomIn slow">
//                         <div className="border hoda z-depth-1 px-5  rounded-lg py-4 py-md-5 ">    
//                             <div className="text-center">
//                                 <img src={pick} width="110px" className=" wow zoomIn slow"/>
//                             </div>
//                             <div className="why_title w-100 my-2">
//                                 Realtime Update
//                             </div>
//                             <div className="why_content w-100 px-2">
//                                Get realtime updates on the status of your device as it is being repaired.
//                             </div>
//                         </div>
//                     </div>


//                     <div className=" diver py-2  px-2   wow zoomIn slow">
//                         <div className="border hoda z-depth-1 px-5  rounded-lg py-4 py-md-5">    
//                             <div className="text-center">
//                                 <img src={expert} width="110px" className="wow zoomIn slow"/>
//                             </div>
//                             <div className="why_title w-100 my-2">
//                                 Expert Engineers
//                             </div>
//                             <div className="why_content w-100 px-2">
//                                 hire the most trusted technician to fix your mobile phone and desktop
//                             </div>
//                         </div>
//                     </div>

//                 </ul>


//                 <div className="About_header  pt-2  says mx-0 mt-4 mt-md-5">
//                     <div className="H_note   text-center">
//                         <div className="Bold doak  font-weight-bold border-bottom">
//                             What Our Clients Say about Us
//                         </div>
//                        <small className="recent">Recent testimonies</small> 
//                     </div>
//                 </div>
//                 <div className="my-4 swipe_man no_show_slide">
//                         <Swiper {...params} className="cient  my-5 py-5 px-md-5">
//                             <div className="  testifier wow fadeInLeft slow">
//                                 <div className="piz  mb-auto">
//                                     <div className="border rounded-pill z-depth-1"
//                                 style={{backgroundImage: `url(${picture})`}}

//                                     ></div>
//                                 </div>

//                                 <div className="talk ">
//                                     <div className="talk_note Fluids">
//                              “By far I feel that the individuals from the Technicon NG 
//                               reflect a great deal of urgency around technology and are eager
//                                to approach new challenges. They have proven to be very adaptive
//                                 to new products and are product minded engineers who concern 
//                                 themselves with how their work will impact the end-user.”
//                                     </div>
//                                     <div className="talk_name">
//                                         Narsis Egonu
//                                     </div>
//                                      <div className="talk_position  flex">
//                                         /Head of Goods4All
//                                         <div className="talk_date ml-auto my-0 py-0">
//                                             11/2/2020
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         </Swiper>
//                 </div>


//                 <div className="crosh  mt-1 px-md-5 row mx-0 ">
//                             <div className="  testifier col-12 z-depth-1 testifier wow fadeInLeft slow">
//                                 <div className="piz  mb-auto mt-3">
//                                     <div className=""
//                                 style={{backgroundImage: `url(${picture})`}}
//                                     ></div>
//                                 </div>

//                                 <div className="talk ">
//                                     <div className="talk_note Fluids">
//                                         Hey sorry about the cheezy name. When I kicked this 
//                                         site about CSS. But of course, that 
//                                         Hey sorry about the cheezy name. When I kicked this 
//                                         site about CSS. But of course, that

//                                     </div>
//                                     <div className="talk_name">
//                                         Kelvin Garret
//                                     </div>
//                                      <div className="talk_position  flex">
//                                         /Head of Goods4All
//                                         <div className="talk_date ml-auto my-0 py-0">
//                                             11/2/2020
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="  testifier col-12 z-depth-1 wow fadeInLeft slow">
//                                 <div className="piz  mb-auto mt-3">
//                                     <div className=""
//                                 style={{backgroundImage: `url(${picture})`}}
//                                 ></div>
//                                 </div>

//                                 <div className="talk ">
//                                     <div className="talk_note Fluids">
//                                         Hey sorry about the cheezy name. When I kicked this 
//                                         site about CSS. But of course, that 
//                                         Hey sorry about the cheezy name. When I kicked this 
//                                         site about CSS. But of course, that

//                                     </div>
//                                     <div className="talk_name">
//                                         Kelvin Garret
//                                     </div>
//                                      <div className="talk_position  flex">
//                                         /Head of Goods4All
//                                         <div className="talk_date ml-auto my-0 py-0">
//                                             11/2/2020
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>


//                             <div className="  testifier col-12 z-depth-1 wow fadeInLeft slow">
//                                 <div className="piz  mb-auto mt-3">
//                                     <div className=""
//                                 style={{backgroundImage: `url(${picture})`}}
//                                 ></div>
//                                 </div>

//                                 <div className="talk ">
//                                     <div className="talk_note Fluids">
//                                         Hey sorry about the cheezy name. When I kicked this 
//                                         site about CSS. But of course, that 
//                                         Hey sorry about the cheezy name. When I kicked this 
//                                         site about CSS. But of course, that

//                                     </div>
//                                     <div className="talk_name">
//                                         Kelvin Garret
//                                     </div>
//                                      <div className="talk_position  flex">
//                                         /Head of Goods4All
//                                         <div className="talk_date ml-auto my-0 py-0">
//                                             11/2/2020
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>



//                         </div>


//                 <div className="About_header  pt-2  says mx-0">
//                     <div className="H_note   text-center">
//                         <div className="Bold  font-weight-bold ">
//                             Board of Directors
//                         </div>
//                     </div>
//                 </div>
//                 <div className="Our_Catalogue row mx-0  py-1 px-4  pt-3">
//                     <div className="worker col-4 z-depth-1 mx-5 my-3 border py-3 z-depth-1 wow fadeInDown faster ">
//                         <div className="w-100 cleax">
//                             <div className="worker_pix  rounded-pill  ">
//                                 <div className="worker_pixin border rounded-pill"
//                                 style={{backgroundImage: `url(${picture})`}}
//                                 ></div>
//                             </div>
//                         </div>
//                         <div className="worker_name w-100 text-center">Ben Harnny</div>
//                         <div className="worker_position w-100 text-center">Top Head Enginner</div>
//                     </div>
//                     <div className="worker col-4 z-depth-1 mx-5 my-3  border py-3 z-depth-1 wow fadeInDown slow">
//                         <div className="w-100 cleax">
//                             <div className="worker_pix  rounded-pill  ">
//                                 <div className="worker_pixin border rounded-pill"
//                                 style={{backgroundImage: `url(${picture})`}}
//                                 ></div>
//                             </div>
//                         </div>
//                         <div className="worker_name w-100 text-center">Ben Harnny</div>
//                         <div className="worker_position w-100 text-center">Top Head Enginner</div>
//                     </div>
//                     <div className="worker col-4 z-depth-1 mx-5  my-4 border py-3 z-depth-1 wow fadeInDown  slower">
//                         <div className="w-100 cleax">
//                             <div className="worker_pix  rounded-pill  ">
//                                 <div className="worker_pixin border rounded-pill"
//                                 style={{backgroundImage: `url(${picture})`}}

//                                 ></div>
//                             </div>
//                         </div>
//                         <div className="worker_name w-100 text-center">Ben Harnny</div>
//                         <div className="worker_position w-100 text-center">Top Head Enginner</div>
//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }
// export {About}





import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const picture = require('./../Home/LP.png')
const pictur1 = require('./../../assets/technicon-background.jpg')
const pictur2 = require('./../../assets/logo.png')


class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faq1: true,
      faq2: true,
      faq3: true,
      faq4: true,
      faq5: true,
    }
    this.faq1 = this.faq1.bind(this)
    this.faq2 = this.faq2.bind(this)
    this.faq4 = this.faq4.bind(this)
    this.faq3 = this.faq3.bind(this)
    this.faq5 = this.faq5.bind(this)
  }
  componentDidMount() {
    this.props.nav_in()
  }
  faq1() {
    this.setState({
      faq1: !this.state.faq1
    })
  }
  faq2() {
    this.setState({
      faq2: !this.state.faq2
    })
  }
  faq3() {
    this.setState({
      faq3: !this.state.faq3
    })
  }
  faq4() {
    this.setState({
      faq4: !this.state.faq4
    })
  }
  faq5() {
    this.setState({
      faq5: !this.state.faq5
    })
  }

  render() {
    let {
      faq1,
      faq2,
      faq3,
      faq4,
      faq5
    } = this.state
    return (
      <div className="faq opacy">
        <div className="faq_header py-5  jumbotron container-fluid border z-depth-0 animated "
          style={{ background: "#F5F5F5" }}
        >
          <div className="row mx-lg-5 ">
            <div className="faq_left col-md-7 ">
              <div className="faq_title_bold biod  black-text lead">
                ABOUT US
              </div>
              <div className="faq_all_question my-2">
                Learn About Us
              </div>
              {/* <div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='1185000000' data-delay='5' data-increment="5987654">0</div> */}
            </div>
            <div className="faq_right col-md-5">
              <div className="faq_link small">
                <span><Link to="/">Home</Link><span className="mx-1"> / </span>About</span>
              </div>
            </div>
          </div>
        </div>

        <div className="faq_header white pt-3    z-depth-0"
          style={{ background: "#F5F5F5" }}
        >
          <div className="row mx-lg-5 w-100 ">
            <div className="faq_left col-md-7  py-2  specfaq">
              <div className="  pb-2 piew mx-4 mt-3 mb-2"
                style={{ fontSize: 24 }}
              >
                About Technicon
              </div>
              <div className="body    pb-2  "
                style={{ marginRight: "10px", fontSize: 15 }}
              >
                <div className=" cwe py-1 px-4 ">
                  TechniconNG is an emerging IT firm in Nigeria. We are dedicated to helping you maintain and also repair your faulty appliances by highly reputable and skilled technicians at the comfort of your home.
                  At TechniconNG, we employ the power of technology to reduce stress, save time and also cut costs by taking orders from individuals who are interested in gadget repair. Our repair centres are also easily accessible for other walk-in customers who may not be able to reach the e-platform.
                  We're committed to ensuring you as a client gets the best of treatments by rendering quality, reliable and top notch services as well as leaving you with thrilling experiences during your transaction adventure with us.
                </div>
              </div>
            </div>
          </div>
        </div >


        <div className="faq_header white pt-0 z-depth-0"
          style={{ background: "#F5F5F5" }}
        >
          <div className="row mx-lg-5 w-100  ">
            <div className="faq_left col-md-7   py-2  specfaq">
              <div className="  pb-2 piew mx-4 mt-3 mb-2 border-0"
                style={{ fontSize: 24 }}
              >
                <img src={picture} className=" pb-2" width="100%" />
                <div className=" cwe py-1   py-3">
                  The TechniconNG squad comprises young and talented brains who have strong drives towards finessing and refining the concept of gadget maintenance in Nigeria.
                  Our vision is to grow into one of the top 3 leading IT firm in Nigeria in few years time and also spread our wings to other neighbouring countries.
              </div>
              </div>
            </div>
          </div>
        </div>


        <div className="faq_header white pt-3    z-depth-0"
          style={{ background: "#F5F5F5" }}
        >
          <div className="row mx-lg-5 w-100 ">
            <div className="faq_left col-md-7  py-2  specfaq">
              <div className="  pb-2 piew mx-4 mt-3 mb-2"
                style={{ fontSize: 24 }}
              >
                Why Technicon ?
              </div>

            </div>
          </div>
        </div >


        <div className="faq_header white pt-3 jumbotron 3ontainer-fluid  z-depth-0"
          style={{ background: "#F5F5F5" }}
        >
          <div className="row mx-lg-5 w-100">
            <div className="faq_left col-md-8 py-2 border-bottom  specfaq">
              <div className="flex pointer"
                onClick={this.faq1}
              >
                <div className="border text-white question_mark  rounded-pill mr-2 mb-1 font-weight-bold"></div>
                <div className="faqui">Realtime update</div>
              </div>
              <div className={`faq_trnas my-2 ${faq1} flex`}>
                <div className=" text-white question_mark mx-1 white rounded-pill mr-2 mb-1 font-weight-bold">?</div>
                Get realtime updates on the status of your device as it is being repaired.
                 Our website has a tracking tool that enables you monitor the progress of your repair through a unique ID that will assigned to you during registration.
              </div>
            </div>

            <div className="faq_left col-md-8 py-2 border-bottom  specfaq mt-3">
              <div className="flex pointer"
                onClick={this.faq4}
              >
                <div className="border text-white question_mark  rounded-pill mr-2 mb-1 px-1 font-weight-bold"></div><div className="faqui">Pickup and delivery</div>
              </div>
              <div className={`faq_trnas my-2 ${faq4} flex`}>
                <div className=" text-white question_mark mx-1 white rounded-pill mr-2 mb-1 font-weight-bold">?</div>
                We pick up your device and deliver before/after or you may visit a technicon office near you.
                                Our technicians will also be attending to our lovely clients whose gadgets cannot leave their abode due to the nature of installation or its mobility. The repair task will be done at your residence or office.
            </div>
            </div>
            <div className="faq_left col-md-8 py-2 border-bottom  specfaq mt-3">
              <div className="flex pointer"
                onClick={this.faq5}
              >
                <div className="border text-white question_mark  rounded-pill mr-2 mb-1 font-weight-bold"></div><div className="faqui">Experienced professionals</div>
              </div>
              <div className={`faq_trnas my-2 ${faq5} flex`}>
                <div className=" text-white question_mark mx-1 white rounded-pill mr-2 mb-1 font-weight-bold">?</div>

                Yes, with technicion NG you get the most trusted technician to fix your mobile phone and desktop

            </div>
            </div>
          </div>
        </div>

        <div className="faq_header white pt-3  px-4  z-depth-0"
          style={{ background: "#F5F5F5" }}
        >
          <div className="row mx-lg-5 w-100 ">
            <div className="faq_left col-md-7  py-2  specfaq">
              <div className="  pb-2 piew mx-4 mt-3 mb-2"
                style={{ fontSize: 24 }}
              >
                BLOG
              </div>


              <div className='time_blog   px-0 p-md-2  '>
                <div className="row border-0 m-0 p-0">
                  <div className="col-12 p-0 p-md-2  mt-2  rounded-lg">
                    <div className="pack flex  z-depth-1 "
                      style={{ maxHeight: "200px", overflow: "hidden" }}
                    >
                      <div className="worker_pix pix my-auto w-100"
                        style={{ minHeight: '139px' }}
                      >
                        <div className="worker_pixin   mask rgba-white-slight waves-effect waves-light"
                          style={{ backgroundImage: `url(${pictur1})`, minHeight: '139px' }}
                        ></div>
                      </div>

                      <div className="content mb-auto mt-2 p-2 ">

                        <div className="title mt-2 h4 border-bottom pr-2">
                          Our Certified Enginners
                </div>
                        <div className="noted pr-2 ">
                Yes, with technicion NG you get the most trusted technician to fix your mobile phone and desktop
                   
                </div>
                        <div className="read_more flex text-primary px-2">
                          <div className="date text-primary ">
                            <span className="possa">  <span className="fa fa-clock mr-1 text-primary" />
                              Posted On </span>14.09.2018
                </div>
                          <div className="ml-auto mr-1 text-primary sent">read more</div>  <div className="ssowp fa fa-angle-right text-primary " />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="col-12 p-0 swd p-md-2  mt-2  rounded-lg">
                    <div className="pack flex  z-depth-1 "
                      style={{ maxHeight: "200px", overflow: "hidden" }}
                    >
                      <div className="worker_pix pix my-auto w-100"
                        style={{ minHeight: '139px' }}
                      >
                        <div className="worker_pixin border-right  mask rgba-white-slight mb-5 waves-effect waves-light"
                          style={{ backgroundImage: `url(${pictur2})`,backgroundSize:"100% 50%", backgroundPosition: "center", backgroundRepeat: "no-repeat", Height: '120px',Width: '100%' }}
                        ></div>
                      </div>

                      <div className="content mb-auto mt-2 p-2 ">

                        <div className="title mt-2 h4 border-bottom pr-2">
                          Get Delivery Services
                </div>
                        <div className="noted pr-2 ">
                          Technicon NG picks up your device and deliver before/after or you may visit a technicon office near you.
                </div>
                        <div className="read_more flex  px-2 text-primary">
                          <div className="date text-primary">
                            <span className="possa">  <span className="fa fa-clock text-primary font-weight-bold mr-1" />
                              Posted On</span> 14/09/2018
                </div>
                          <div className="ml-auto mr-1 text-primary sent">read more</div>  <div className="ssowp text-primary fa fa-angle-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="read_more flex  px-2">
                  <div className="mx-auto mr-1 sont py-1 px-2 z-depth-0 text-primary small ">see More
                  <div className="mx-0 sonto z-depth-0  border rounded-pill"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    )
  }
}



export { About }