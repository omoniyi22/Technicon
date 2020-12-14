import React, { Component } from 'react'
import New_Transaction from './../../components/Dashboard/New_Transaction/index'
import { Link } from 'react-router-dom'
import Login from './../Log_In/index'
import './../Dashboard/index.scss'
import Blog from './Blog'
const pick = require('./pick.png')
const expert = require('./expert.png')
const realtime = require('./realtime.png')
const laptop = require('./lapt.svg')
const phone = require('./pho.svg')
const tab = require('./tab.svg')

class Home extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.nav_in()
  }
  render() {
    return (
      <div className=" row m-0 p-0 Home opacy">
        <div className="w-100  lighten-4  home">
          <div className="Laya ">
          </div>
          <div className="lading_pack">
            <div className="leoch">
              <div className="whity">
                {/* <div className="white sods p-3 rounded-lg">
                  {this.props.auth ? <New_Transaction /> : <Login home={true} />}
                </div> */}
                {/* <div className=" broder  py-2">
                  <div className="  ml-3 ">
                    <div className="circla border  ml-2  mr-auto rounded-pill animated delay-3s  wow zoomIn slow"
                      style={{
                        animationIterationCount: "infinite",
                        animationDirection: "alternate"
                      }}>
                      <div className="white rounded-pill border" />
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="re_text  white-text mt-5">

                <div className="fojd ">
                  <div className=" broder jen py-2 ">
                    <div className="  ml-3 ">
                      <div className="circla border wow zoomIn slow  ml-2  mr-auto rounded-pill "
                        style={{
                          animationIterationCount: "infinite",
                          animationDirection: "alternate"
                        }}
                      >
                        <div className="white rounded-pill border" />
                      </div>
                    </div>
                  </div>
                  <div className="text-white fmma">Hire experts engineers</div>
                  <div className="text-white fmma">to fix your gadgets...</div>
                  <div className="small text-white bisy font-weight-light">
                    Technicon brings quality repair
                   <br />
                    to your finger tips
                    </div>

                  <div className="ml-0 mr-auto  text-left mt-2  w-fit ppoaa">
                    <Link to={this.props.isAuthenticated ? "/new-transaction" : "/signup"} className=" mr-auto ml-0">
                      <button className="log_in_button ml-0 rounded-pill btn slso mt-4 btn-white z-depth-1">
                        Try for free
                      </button>
                    </Link>
                  </div>

                </div>
                <div className="lopias ">
                  <div className="circle1  border  circle2 rounded-pill animated delay-1s  wow zoomIn slow"
                    style={{
                      animationIterationCount: "infinite",
                      animationDirection: "alternate"
                    }}
                  ><div className="white rounded-pill border animated delay-1s  wow zoomIn slow"
                    style={{
                      animationIterationCount: "infinite",
                      animationDirection: "alternate"
                    }}
                    /></div>
                  <div className="circle1 border soss ml-auto  rounded-pill animated delay-2s  wow zoomIn slow"
                    style={{
                      animationIterationCount: "infinite",
                      animationDirection: "alternate"
                    }}
                  ><div className="white rounded-pill border" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4  w-100  landing_2" >
          <div className="border border-primary w-25">
          </div>
          <div className="mx-3 landin_2_text text-primary">
            What we do
          </div>
          <div className="border border-primary w-25">
          </div>
        </div>
        <div className="p-1  w-100  landing_2 ope" >
          <div className="mx-3 sokale">
            Our repair services specialize in...
          </div>
        </div>
        <div className="row  w-100 p-0 m-0 mx-md-5  mt-3 mt-md-5 ">
          <div className="col-lg-4 posho wow fadeInLeft    px-3 mt-lg-3 mb-4">
            <div className="p-3 z-depth-1 blue-grey lighten-5 rounded-lg lioe flex ">
              <div className="p-2 border psoa my-auto rounded-pill bg-primary ">
                <img src={phone} width="42px" />
              </div>
              <div className="mr-auto pr-3 ml-3 my-auto">Android and IOS<span className="text-primary"> mobile phones and accessories</span></div>
            </div>
          </div>
          <div className="col-lg-4 posho wow fadeInLeft delay-1s    px-3 mb-lg-5 mb-4">
            <div className="p-3 z-depth-1 blue-grey lighten-5 rounded-lg lioe flex ">
              <div className="p-2 border psoa my-auto rounded-pill  pilla1 bg-primary">
                <img src={tab} width="34px" />
              </div>
              <div className="mr-auto pr-3 ml-3 my-auto">Hardware and Software of<span className="text-primary"> tablets and accessories</span></div>
            </div>
          </div>
          <div className="col-lg-4 posho  wow fadeInLeft  delay-2s px-3 mt-lg-3 mb-3">
            <div className="p-3 z-depth-1 blue-grey lighten-5 rounded-lg lioe flex ">
              <div className="p-2 border psoa my-auto rounded-pill pilla2 bg-primary">
                <img src={laptop} width="34px" />

              </div>
              <div className="mr-auto pr-3 ml-3 my-auto">
                All brands of laptops, and     <span className="text-primary"> operating systems.</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" m-0 w-100 mt-4 flex pt-md-5 lala_2  p-md-3 ">
          <div className="docg p-2">
            <div className="worker_pix  ">
              <div className="worker_pixin"></div>
            </div>
          </div>
          <div className="awho  text-center text-white p-4">
            Use Technicon in three steps
            <div className="tectak text-white px-2 px-md-4">
              Our unbeatable services a place us as leader in the
              mobile engineeering space
            </div>
          </div>
          <div className="docg p-2">

            <div className="worker_pixd ">
              <div className="worker_pixin"></div>
            </div>
          </div>
        </div>
        <div className=" w-100 flex m-auto  lala_2 py-md-5">
          <ul className="About_reason  lex w-100 text-center pacg">
            <div className="  py-2 px-2 mt-md-5  wow zoomIn fast ">
              <div className="border hoda z-depth-1 rounded-lg py-4 py-md-4 white">
                <div className="text-center">
                  <img src={realtime} width="110px" className="rounded-pill" />
                </div>
                <div className="why_title w-100 my-2">
                  Pickup and Delivery
                            </div>
                <div className="why_content w-100 px-5">
                  We pick up your device and deliver before/after or you may visit a technicon office near you.
                            </div>
              </div>
            </div>


            <div className="  py-2 px-2   wow zoomIn fast">
              <div className="border hoda z-depth-1 rounded-lg  py-4 py-md-4 px-4 white ">
                <div className="text-center z-depth-0">
                  <img src={pick} width="110px" className="z-depth-0 mt-md-4 rounded-pill  wow zoomIn fast" />
                </div>
                <div className="why_title w-100 my-2">
                  Realtime updates
                            </div>
                <div className="why_content w-100 px-5">
                  Get realtime updates on the status of your device as it is being repaired.

                            </div>
              </div>
            </div>


            <div className="  py-2  px-2 mt-md-5  wow zoomIn fast">
              <div className="border hoda z-depth-1  rounded-lg py-4 py-md-4 px-4 white">
                <div className="text-center">
                  <img src={expert} width="110px" className="rounded-pill" />
                </div>
                <div className="why_title w-100 my-2">
                  Expert engineers
                </div>
                <div className="why_content w-100 px-5">
                  hire the most trusted technician to fix your mobile phone and desktop
                </div>
              </div>
            </div>
          </ul>

        </div>

        <div className="row w-100 ahs mx-0 mt-3">
          <div className="col-md-12 abouta p-4   lighten-1">
            <div className="header mb-2">
              About Technicon Service Center
              </div>
            <div className="z-depth-1 rounded-sm flex">

              <div className="about_technicon w-50 ">
                <div className="bsw red ">
                  <div className="bsw_img"></div>
                </div>
              </div>
              <div className="about_technicon_text mt-3 w-50 ">
                <div className="ropz px-3">
                  TechniconNG is an emerging IT firm in Nigeria. We are dedicated to helping you maintain and also repair your faulty appliances by highly reputable and skilled technicians at the comfort of your home.

                  At TechniconNG, we employ the power of technology to reduce stress, save time and also cut costs by taking orders from individuals who are interested in gadget repair. Our repair centres are also easily accessible for other walk-in customers who may not be able to reach the e-platform.

                  We're committed to ensuring you as a client gets the best of treatments by rendering quality, reliable and top notch services as well as leaving you with thrilling experiences during your transaction adventure with us.

                  The TechniconNG squad comprises young and talented brains who have strong drives towards finessing and refining the concept of gadget maintenance in Nigeria.

                  Our vision is to grow into one of the top 3 leading IT firm in Nigeria in few years time and also spread our wings to other neighbouring countries.
              </div>
                <div className="mt-3 px-3 pb-3  small">
                  {/*
                    Learn More
                */}
                  <Link to="/about" className="text-primary border-bottom border-primary py-1">
                    <div className="read_more flex mr-auto p-0 mx-0  festin">
                      <div className="mx-auto mr-1 sont py-1  z-depth-0 text-primary  ">Learn More
                    <div className="mx-0 sonto    z-depth-0  border rounded-pill"></div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
          {/* <div className="col-md-7 blog p-3 p-md-4  border-left lighten-0">
            <div className="header mb-2 text-left ">
              Blog
              </div>
            <div className="blog_post border-top">


              <Blog />


            </div>
          </div> */}
        </div>
      </div>
    )
  }
}
export { Home }