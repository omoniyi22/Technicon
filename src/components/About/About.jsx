import React, { Component } from "react";
import Swiper from  'react-id-swiper';
const pick = require('./pick.png')
const expert = require('./expert.png')
const realtime = require('./realtime.png')
const picture = require('./Narce.jpg')


class About extends Component{
  constructor(props){
    super(props)
  }
   componentDidMount(){
    this.props.nav_in()
  }
    render(){
        const params = {   
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        }
        return(
            <div className="About">
                <div className="About_header pt-2   mx-0 ">
                    <div className="H_note  fast wow fadeInDown">
                        <div className="Bold doak font-weight-bold border-bottom">
                            About Technicon
                        </div>
                        <div className="note  Fluids">
                            Hey sorry about the cheezy name. When I kicked this 
                            site off on July 4th, 2007, 
                            I mostly really did write about CSS. But of course, that 
                            means writing about HTML too. And then JavaScript as I began 
                            to learn that. The site is WordPress, so writing about that was
                            sprinkled in. As my experience as a front-end developer and designer
                            grew and my knowledge broadened, so did the sites topics.
                        <div className=" mt-2 Fluids">
                            Hey sorry about the cheezy name. When I kicked this 
                            site off on July 4th, 2007, 
                            I mostly really did write about CSS. But of course, that 
                        </div>
                        </div>
                    </div>
                    <div className="pix  mx-0 py-3  delay-1s wow fadeInRight  ">
                        <div className="author_card  mx-md-4">
                            <div className="pictured mb-md-1">
                                <div className="fa fa-envelope mr-3"/>
                                <div className="picture  rounded-pill  p-2 wow  slower fadeIn"
                                style={{backgroundImage: `url(${picture})`}}
                                >
                                </div>
                                <div className="fa fa-phone-alt ml-3"/>
                            </div>
                            <div className="author_details  border-bottom-0 py-4 ">
                                <div className="a_name Fluids">Chris Coyier</div>
                                <div className="b_name Fluids">Founder, engineer</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="About_header  pt-2  mt-4 mt-md-5 mx-0 pacg">
                    <div className="H_note  ">
                        <div className="Bold  doak font-weight-bold border-bottom mx-auto">
                            Why Technicon
                        </div>
                    </div>
                </div>

                <ul className="About_reason  w-100 text-center pacg">


                    <div className=" diver py-2 px-2  wow zoomIn slow ">
                        <div className="border hoda z-depth-1  rounded-lg py-4 py-md-5">    
                            <div className="text-center">
                                <img src={realtime} width="110px" className="wow zoomIn slow"/>
                            </div>
                            <div className="why_title w-100 my-2">
                                Pickup and Delivery
                            </div>
                            <div className="why_content w-100 px-2">
                                Hey sorry about the cheezy name. When I kicked this 
                                site about CSS. But of course, that
                            </div>
                        </div>
                    </div>


                    <div className=" diver py-2 px-2  wow zoomIn slow">
                        <div className="border hoda z-depth-1 rounded-lg py-4 py-md-5">    
                            <div className="text-center">
                                <img src={pick} width="110px" className=" wow zoomIn slow"/>
                            </div>
                            <div className="why_title w-100 my-2">
                                Pickup and Delivery
                            </div>
                            <div className="why_content w-100 px-2">
                                Hey sorry about the cheezy name. When I kicked this 
                                site about CSS. But of course, that
                            </div>
                        </div>
                    </div>


                    <div className=" diver py-2  px-2   wow zoomIn slow">
                        <div className="border hoda z-depth-1  rounded-lg py-4 py-md-5">    
                            <div className="text-center">
                                <img src={expert} width="110px" className="wow zoomIn slow"/>
                            </div>
                            <div className="why_title w-100 my-2">
                                Pickup and Delivery
                            </div>
                            <div className="why_content w-100 px-2">
                                Hey sorry about the cheezy name. When I kicked this 
                                site about CSS. But of course, that
                            </div>
                        </div>
                    </div>
                
                </ul>


                <div className="About_header  pt-2  says mx-0 mt-4 mt-md-5">
                    <div className="H_note   text-center">
                        <div className="Bold doak  font-weight-bold border-bottom">
                            What Our Clients Say about Us
                        </div>
                       <small className="recent">Recent testimonies</small> 
                    </div>
                </div>
                <div className="my-4 swipe_man no_show_slide">
                        <Swiper {...params} className="cient  my-5 py-5 px-md-5">
                            <div className="  testifier wow fadeInLeft slow">
                                <div className="piz  mb-auto">
                                    <div className="border rounded-pill"
                                style={{backgroundImage: `url(${picture})`}}
                                    
                                    ></div>
                                </div>
                                
                                <div className="talk ">
                                    <div className="talk_note Fluids">
                                        Hey sorry about the cheezy name. When I kicked this 
                                        site about CSS. But of course, that 
                                        Hey sorry about the cheezy name. When I kicked this 
                                        site about CSS. But of course, that
                                        Hey sorry about the cheezy name. When I kicked this 
                                        site about CSS. But of course, that 
                                        Hey sorry about the cheezy name. When I kicked this 
                                        site about CSS. But of course, that
                                    </div>
                                    <div className="talk_name">
                                        Kelvin Garret
                                    </div>
                                     <div className="talk_position  flex">
                                        /Head of Goods4All
                                        <div className="talk_date ml-auto my-0 py-0">
                                            11/2/2020
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </Swiper>
                </div>


                <div className="crosh  mt-1 px-md-5 row mx-0 ">
                            <div className="  testifier col-12 z-depth-1 testifier wow fadeInLeft slow">
                                <div className="piz  mb-auto mt-3">
                                    <div className=""
                                style={{backgroundImage: `url(${picture})`}}
                                    ></div>
                                </div>
                                
                                <div className="talk ">
                                    <div className="talk_note Fluids">
                                        Hey sorry about the cheezy name. When I kicked this 
                                        site about CSS. But of course, that 
                                        Hey sorry about the cheezy name. When I kicked this 
                                        site about CSS. But of course, that
                                  
                                    </div>
                                    <div className="talk_name">
                                        Kelvin Garret
                                    </div>
                                     <div className="talk_position  flex">
                                        /Head of Goods4All
                                        <div className="talk_date ml-auto my-0 py-0">
                                            11/2/2020
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="  testifier col-12 z-depth-1 wow fadeInLeft slow">
                                <div className="piz  mb-auto mt-3">
                                    <div className=""
                                style={{backgroundImage: `url(${picture})`}}
                                ></div>
                                </div>
                                
                                <div className="talk ">
                                    <div className="talk_note Fluids">
                                        Hey sorry about the cheezy name. When I kicked this 
                                        site about CSS. But of course, that 
                                        Hey sorry about the cheezy name. When I kicked this 
                                        site about CSS. But of course, that
                                  
                                    </div>
                                    <div className="talk_name">
                                        Kelvin Garret
                                    </div>
                                     <div className="talk_position  flex">
                                        /Head of Goods4All
                                        <div className="talk_date ml-auto my-0 py-0">
                                            11/2/2020
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="  testifier col-12 z-depth-1 wow fadeInLeft slow">
                                <div className="piz  mb-auto mt-3">
                                    <div className=""
                                style={{backgroundImage: `url(${picture})`}}
                                ></div>
                                </div>
                                
                                <div className="talk ">
                                    <div className="talk_note Fluids">
                                        Hey sorry about the cheezy name. When I kicked this 
                                        site about CSS. But of course, that 
                                        Hey sorry about the cheezy name. When I kicked this 
                                        site about CSS. But of course, that
                                  
                                    </div>
                                    <div className="talk_name">
                                        Kelvin Garret
                                    </div>
                                     <div className="talk_position  flex">
                                        /Head of Goods4All
                                        <div className="talk_date ml-auto my-0 py-0">
                                            11/2/2020
                                        </div>
                                    </div>
                                </div>
                            </div>


                          
                        </div>


                <div className="About_header  pt-2  says mx-0">
                    <div className="H_note   text-center">
                        <div className="Bold  font-weight-bold ">
                            Board of Directors
                        </div>
                    </div>
                </div>
                <div className="Our_Catalogue row mx-0  py-1 px-4">
                    <div className="worker col-4 z-depth-1  border py-3 z-depth-1 wow fadeInDown faster ">
                        <div className="w-100 cleax">
                            <div className="worker_pix  rounded-pill  ">
                                <div className="worker_pixin border rounded-pill"
                                style={{backgroundImage: `url(${picture})`}}
                                ></div>
                            </div>
                        </div>
                        <div className="worker_name w-100 text-center">Ben Harnny</div>
                        <div className="worker_position w-100 text-center">Top Head Enginner</div>
                    </div>
                    <div className="worker col-4 z-depth-1  border py-3 z-depth-1 wow fadeInDown slow">
                        <div className="w-100 cleax">
                            <div className="worker_pix  rounded-pill  ">
                                <div className="worker_pixin border rounded-pill"
                                style={{backgroundImage: `url(${picture})`}}
                                ></div>
                            </div>
                        </div>
                        <div className="worker_name w-100 text-center">Ben Harnny</div>
                        <div className="worker_position w-100 text-center">Top Head Enginner</div>
                    </div>
                    <div className="worker col-4 z-depth-1  border py-3 z-depth-1 wow fadeInDown  slower">
                        <div className="w-100 cleax">
                            <div className="worker_pix  rounded-pill  ">
                                <div className="worker_pixin border rounded-pill"
                                style={{backgroundImage: `url(${picture})`}}
                                
                                ></div>
                            </div>
                        </div>
                        <div className="worker_name w-100 text-center">Ben Harnny</div>
                        <div className="worker_position w-100 text-center">Top Head Enginner</div>
                    </div>
                   
                </div>
            </div>
        )
    }
}
export {About}