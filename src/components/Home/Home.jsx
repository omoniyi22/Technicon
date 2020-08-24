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
      <div className=" row m-0 p-0 Home">
        <div className="w-100  lighten-4  home">
          <div className="Laya ">
          </div>
          <div className="lading_pack">
            <div className="leoch">
              <div className="whity">
                <div className="white sods p-3 rounded-lg">
                 {this.props.auth ?  <New_Transaction /> : <Login  home={true}/>}
                </div>
                <div className=" broder  py-2">
                  <div className="  ml-3 ">
                    <div className="circla border  ml-2  mr-auto rounded-pill ">
                      <div className="white rounded-pill border" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="re_text  white-text ">

                <div className="fojd ">
                  <div className=" broder jen py-2">
                    <div className="  ml-3 ">
                      <div className="circla border  ml-2  mr-auto rounded-pill ">
                        <div className="white rounded-pill border" />
                      </div>
                    </div>
                  </div>
                  <div className="text-white">Hire experts engineers</div>
                  <div className="text-white">to fix your gadgets...</div>
                </div>
                <div className="lopias ">
                  <div className="circle1  border  circle2 rounded-pill "><div className="white rounded-pill border" /></div>
                  <div className="circle1 border soss ml-auto  rounded-pill "><div className="white rounded-pill border" /></div>
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
          <div className="col-lg-4 posho  px-3 mt-lg-3 mb-4">
            <div className="p-3 z-depth-1 rounded-lg lioe flex ">
              <div className="p-2 border psoa my-auto rounded-pill bg-primary ">
                <img src={phone} width="42px" />
              </div>
              <div className="mr-auto pr-3 ml-3 my-auto">Our repair alive services specialize in...</div>
            </div>
          </div>
          <div className="col-lg-4 posho  px-3 mb-lg-5 mb-4">
            <div className="p-3 z-depth-1 rounded-lg lioe flex ">
              <div className="p-2 border psoa my-auto rounded-pill  pilla1 bg-primary">
                <img src={tab} width="34px" />
              </div>
              <div className="mr-auto pr-3 ml-3 my-auto">Our repair alive services specialize in...</div>
            </div>
          </div>
          <div className="col-lg-4 posho  px-3 mt-lg-3 mb-3">
            <div className="p-3 z-depth-1 rounded-lg lioe flex ">
              <div className="p-2 border psoa my-auto rounded-pill pilla2 bg-primary">
                <img src={laptop} width="34px" />

              </div>
              <div className="mr-auto pr-3 ml-3 my-auto">Our repair alive services specialize in...</div>
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
              Our unbeliveabe services a place us as leader in the
              mobile engineeering space
            </div>
          </div>
          <div className="docg p-2">

            <div className="worker_pix ">
              <div className="worker_pixin"></div>
            </div>
          </div>
        </div>
        <div className=" w-100 flex m-auto  lala_2 py-md-5">
          <ul className="About_reason  w-100 text-center pacg">
            <div className=" diver py-2 px-2  wow zoomIn fast ">
              <div className="border hoda z-depth-1  rounded-lg py-4 py-md-4 white">
                <div className="text-center">
                  <img src={realtime} width="110px" className="wow zoomIn fast" />
                </div>
                <div className="why_title w-100 my-2">
                  Pickup and Delivery
                            </div>
                <div className="why_content w-100 px-5">
                  Hey sorry about the cheezy name. When I kicked this
                  site about CSS. But of course, that
                            </div>
              </div>
            </div>


            <div className=" diver py-2 px-2  wow zoomIn fast">
              <div className="border hoda z-depth-1 rounded-lg  py-4 py-md-4 px-4 white ">
                <div className="text-center z-depth-0">
                  <img src={pick} width="110px" className="z-depth-0 wow zoomIn fast" />
                </div>
                <div className="why_title w-100 my-2">
                  Pickup and Delivery
                            </div>
                <div className="why_content w-100 px-5">
                  Hey sorry about the cheezy name. When I kicked this
                  site about CSS. But of course, that
                            </div>
              </div>
            </div>


            <div className=" diver py-2  px-2   wow zoomIn fast">
              <div className="border hoda z-depth-1  rounded-lg py-4 py-md-4 px-4 white">
                <div className="text-center">
                  <img src={expert} width="110px" className="wow zoomIn fast" />
                </div>
                <div className="why_title w-100 my-2">
                  Pickup and Delivery
                </div>
                <div className="why_content w-100 px-5">
                  Hey sorry about the cheezy name. When I kicked this
                  site about CSS. But of course, that
                </div>
              </div>
            </div>
          </ul>

        </div>

        <div className="row w-100 ahs mx-0 mt-3">
          <div className="col-md-5 abouta p-4   lighten-1">
            <div className="header mb-2">
              About Technicon Service Center
              </div>
            <div className="z-depth-1 rounded-sm">

              <div className="about_technicon">
                <div className="bsw red ">
                  <div className="bsw_img"></div>
                </div>
              </div>
              <div className="about_technicon_text mt-3 ">
                <div className="ropz px-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti dolorem aliquid vitae explicabo
                   iure illum ratione, temporibus sequi a eos hic ex velit totam ab, tempore \
                   necessitatibus. Dignissimos, obcaecati recusandae!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti dolorem aliquid vitae explicabo
                   iure illum ratione, temporibus sequi a eos hic ex velit totam ab, tempore \
                   necessitatibus. Dignissimos, obcaecati recusandae!
              </div>
                <div className="mt-3 px-3 pb-3  small">
                  <Link to="/about" className="text-primary border-bottom border-primary py-1">
                    Learn More
                </Link>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-7 blog p-3 p-md-4  border-left lighten-0">
            <div className="header mb-2 text-left ">
              Blog
              </div>
            <div className="blog_post border-top">


              <Blog />


            </div>
          </div>
        </div>
      </div>
    )
  }
}
export { Home }