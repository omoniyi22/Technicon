import React, { Component } from 'react'
import "./_blog.scss"
const pictur1 = require('./../../assets/technicon-background.jpg')
const pictur2 = require('./../../assets/logo.png')

class Blog extends Component {
  render() {
    return (
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
    )
  }
}
export default Blog