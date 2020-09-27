import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  FacebookShareButton, FacebookMessengerShareButton,
  FacebookMessengerIcon, FacebookIcon,
  WhatsappShareButton, WhatsappIcon,
  TwitterIcon, TwitterShareButton,
  TelegramIcon, TelegramShareButton,
  EmailIcon, EmailShareButton,
  LinkedinIcon, LinkedinShareButton,
  InstapaperShareButton, InstapaperIcon
} from 'react-share'
const logo = require('./logo.png')


class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slideRight: "100%",
      slideDown: "-100%"
    }
    this.slideRight = this.slideRight.bind(this)
    this.slideoff = this.slideoff.bind(this)
    this.share = this.share.bind(this)
  }

  slideRight() {
    this.setState({
      slideRight: "0%"
    })
  }

  slideoff() {
    this.setState({
      slideRight: "100%",
      slideDown: "-100%"
    })
  }

  share() {
    switch (this.state.slideDown) {
      case '-100%':
        this.setState({
          slideDown: "0%"
        })
        break;
      case '0%':
        this.setState({
          slideDown: "-100%"
        })
      default:
        break;
    }
  }

  render() {
    let { username, isAuthenticated } = this.props.auth
    let { logOutAction } = this.props
    return (
      <>
        {(window.location.href.search("login") || window.location.href.search("siginup") !== -1) &&
          <div className={`w-100 side_nav `}>

            <div className="  slide_right" style={{ "right": this.state.slideRight }}>
              <div className="contained  pt-2  ">

                <div className='text-right possas ' >
                  <div onClick={this.slideoff}>
                    <span className="fa fa-times rounded-pill " />
                  </div>
                </div>
                {
                  this.props.auth.isAuthenticated ?

                    <div className="user_n  ">
                      <img src={this.props.pix} className="user_pix rounded-pill ml-auto border" />

                      <Link to="/edit-profile" onClick={this.slideoff}  className="inherit user_dl  mr-auto">
                        <div className="userName  mt-auto mb-1">{this.props.auth.username}</div>
                        <div className="userLocation  mb-auto mt-1">
                          <span className="fa fa-map-marker-alt" />
                          {this.props.profile.address !== undefined ? this.props.profile.address : "Update your profile"}
                      </div>
                      </Link>

                    </div> :
                    <div className=" text-center w-100 ">
                      <img src={logo} width="70px" className=" pt-3" />
                    </div>
                }
                <div className="side_items ">

                  <div className="modals z-depth-1"
                    style={{
                      bottom: `${this.state.slideDown}`
                    }}
                  >
                    <div className=" h-100 w-100 vona border-top ">
                      <div className="border-bottom  border-top  header">
                        <header

                        >
                          Share To :
                        </header>
                      </div>
                      <div className=" icond p-3 z-depth-1">
                        <div className="row  p-2 w-100 py-2 mx-auto">
                          <div className="col-4  p-2">
                            <FacebookMessengerShareButton
                              url="www.klwenkwlnln.com" quote={'Technicon | Your device needs the perfect care'}>
                              <FacebookMessengerIcon size={41} round={true} />
                            </FacebookMessengerShareButton>
                          </div>
                          <div className="col-4  p-2">
                            <TwitterShareButton
                              url="https://twitter.com/TechniConNG?s=09" quote={'Technicon | Your device needs the perfect care'}>
                              <TwitterIcon size={41} round={true} />
                            </TwitterShareButton>
                          </div>
                          <div className="col-4  p-2">
                            <WhatsappShareButton
                              url="www.klwenkwlnln.com" quote={'Technicon | Your device needs the perfect care'}>
                              <WhatsappIcon size={41} round={true} />
                            </WhatsappShareButton>

                          </div>
                        </div>


                        <div className="row  p-2 w-100 py-2 mx-auto">
                          <div className="col-4  p-2">
                            <InstapaperShareButton
                              url="http://www.instagram.com/techniconng" quote={'Technicon | Your device needs the perfect care'}>
                              <InstapaperIcon size={41} round={true} />
                            </InstapaperShareButton>
                          </div>
                          <div className="col-4  p-2">
                            <FacebookShareButton
                              url="http://facebook.com/techniconng" quote={'Technicon | Your device needs the perfect care'}>
                              <FacebookIcon size={41} round={true} />
                            </FacebookShareButton>
                          </div>
                          <div className="col-4  p-2">
                            <TelegramShareButton
                              url="www.klwenkwlnln.com" quote={'Technicon | Your device needs the perfect care'}>
                              <TelegramIcon size={41} round={true} />
                            </TelegramShareButton>

                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                  {
                    this.props.auth.isAuthenticated ?
                      <>
                        <Link onClick={this.slideoff} to="/dashboard" className="cinta">
                          <div className="nav_item ">
                            <span className="icon1 fa fa-home " />
                            <div className="sav">Dashboard</div>
                          </div>
                        </Link>
                        <Link onClick={this.slideoff} to="/payment-method" className="cinta">
                          <div className="nav_item ">
                            <span className="icon2 fa fa-credit-card " />
                            <div className="sav">Payment</div>
                          </div>
                        </Link>
                      </> :
                      <Link onClick={this.slideoff} to="/signup" className="cinta">
                        <div className="nav_item ">
                          <span className="icon2 fa fa-user-plus " />
                          <div className="sav">Register</div>
                        </div>
                      </Link>
                  }
                  <Link onClick={this.slideoff} to="/about" className="cinta">
                    <div className="nav_item ">
                      <span className="icon3 fa fa-info-circle " />
                      <div className="sav">About</div>
                    </div>
                  </Link>
                  <Link onClick={this.slideoff} to="Legal" className="cinta">
                    <div className="nav_item ">
                      <span className="icon4 fa fa-bookmark " />
                      <div className="sav">Legal</div>
                    </div>
                  </Link>
                  <Link onClick={this.slideoff} to="/faq" className="cinta">
                    <div className="nav_item ">
                      <span className="icon4 fa fa-bell " />
                      <div className="sav">FAQs</div>
                    </div>
                  </Link>
                  <div onClick={this.share} className="cinta">
                    <div className="nav_item pdf ">
                      <span className="icon5 fa fa-share-alt " />
                      <div className="sav">Share</div>
                    </div>
                  </div>
                  {
                    !this.props.auth.isAuthenticated ?
                      <>
                        <Link to="login" onClick={this.slideoff} className=" logouti cinta">
                          <div className="nav_item  ">
                            <span className="icon6 fa fa-sign-in-alt " />
                            <div className="sav">Login</div>
                          </div>
                        </Link>
                      </>
                      :

                      <div className="nav_item  logouti" onClick={logOutAction}>
                        <span className="icon7 fa fa-sign-out-alt " />
                        <div className="sav">Logout</div>
                      </div>
                  }


                </div>
              </div>
            </div>



            <div className="side_nav   p-2">
              <div className="soss  rounded-lg" onClick={this.slideRight}>
                <span className="fa fa-bars" />
              </div>
              <div className="nav_logo   text-center">
                <Link to='/'> <img src={logo} alt="" width={'67px'} /></Link>
              </div>
              <div className="  rounded px-2 softeir">
                <Link to={isAuthenticated ? "/new-transaction" : "/login"} className="small text_inherit">
                  try for free
                </Link>
              </div>
            </div>
          </div>
        }
      </>
    )
  }
}

export { SideBar }