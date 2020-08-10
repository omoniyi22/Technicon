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
  InstapaperShareButton, InstapaperIcon,
  PinterestShareButton, PinterestIcon
} from 'react-share'

const logo = require('./icons/logo.png')
const legal = require('./icons/legal.png')
const login = require('./icons/login.png')
const share = require('./icons/share.png')
const about = require('./icons/about.png')
const signup = require('./icons/signup.png')
const notify = require('./icons/notify.png')



class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.closeShare = this.closeShare.bind(this)
  }

  closeShare() {
    this.setState(prev => {
      return {
        show: !prev.show
      }
    })
  }
  render() {
    let { username } = this.props.auth
    let { logOutAction } = this.props
    function AuthNav() {
      return (
        <>
          <div className="cog ">
            <Link to="/Login" className="limk ">

              <div className="nav_link pb-0  mt-2 text-center">
                <span className="fa fa-sign-in-alt nav_fa" />
                <div className=" mt-1 nav_text ">Login</div>
              </div>
            </Link>
          </div>
          <div className="cog ">
            <Link to="/signup" className="limk ">
              <div className="nav_link pb-0  mt-2 text-center">
                <span className="fa fa-user-plus nav_fa" />
                <div className=" mt-1 nav_text ">Sign Up</div>
              </div>
            </Link>
          </div>
        </>
      )
    }

    function UnAuthNav() {
      return (
        <>
          <div className="cog ">
            <Link to="/notification" className="limk ">

              <div className="nav_link pb-0  mt-2 text-center">
                <img className="nav_link_icon " width="20.5px" src={notify} />
                <div className=" mt-1 nav_text notify">Notification</div>
              </div>
            </Link>
          </div>

          <div className="cog ">
            <Link className="limk ">
              <div className="nav_link pb-0  mt-2 text-center"
                onClick={logOutAction}
              >
                <img className="nav_link_icon " width="20px" src={login} />
                <div className=" mt-1 nav_text ">Log Out</div>
              </div>
            </Link>
          </div>




          <div className=" cog COG_ME ml-3 mr-2 ">
            <Link to="/dashboard" className="limk ">
              <div className="nav_link  pb-0  mt-2 text-center">
                <span className="fa fa-user-alt nav_fa" />
                <div className=" mt-1 nav_text ">{username ? username : "No User"}</div>
              </div>
            </Link>
          </div>



        </>
      )
    }
    let { show } = this.state
    return (
      <div className="nav_bar w-100 z-depth-1 ">
        <nav className="Nav_Bar w-100  pl-3 pr-2  flex">

          <div className="nav_logo ">
            <Link to="/" className="limk ">
              <img src={logo} width="77px" height="43px" className="mt-3 pb-1" />
            </Link>
          </div>
          <div className="nav_items ml-auto flex">

            <div className="cog ">
              <Link to="/about" className="limk ">
                <div className="nav_link pb-0  mt-2 text-center">
                  <img className="nav_link_icon " width="22.8px" src={about} />
                  <div className=" mt-1 nav_text">About</div>
                </div>
              </Link>
            </div>

            <div className="cog ">
              <div  className="limk "
              onClick={this.closeShare}
              >
                <div className="nav_link pb-0  mt-2 text-center">
                  <span className="fa fa-share-alt nav_fa" />
                  <div className=" mt-1 nav_text ">Share</div>
                </div>
              </div>
            </div>


            <div className="cog ">
              <Link to="/legal" className="limk ">
                <div className="nav_link pb-0  mt-2 text-center">
                  <img className="nav_link_icon " width="17px" src={legal} />
                  <div className=" mt-1 nav_text notified">Legal</div>
                </div>
              </Link>
            </div>

            {this.props.auth.isAuthenticated ? UnAuthNav() : AuthNav()}

          </div>
        </nav>
        <div className="sharemodal p-5 "
          style={{ display: `${show ? 'flex': 'none'}`, backgroundColor : `${show ? '#0000002d': '#ffffff00'}`}}
        >
          <div className='lasaas'
          onClick={this.closeShare}
          ></div>
          <div className="modals m-auto p-4 "
          style={{ display: `${show ? 'flex': 'none'}`}}
          >
            <div className="spread  row p-5 text-center rounded-lg white z-depth-1">

              <div className="col-3  p-2">
                <FacebookMessengerShareButton
                  url="www.klwenkwlnln.com" quote={'Technicon | Your device needs the perfect care'}
                  className="z-depth-1 rounded-pill"
                >
                  <FacebookMessengerIcon size={57} className=" dso "

                    round={true} />
                </FacebookMessengerShareButton>
              </div>
              <div className="col-3  p-2">
                <TwitterShareButton
                  className="z-depth-1 rounded-pill"
                  url="www.klwenkwlnln.com" quote={'Technicon | Your device needs the perfect care'}>
                  <TwitterIcon size={57} className="" round={true} />
                </TwitterShareButton>
              </div>
              <div className="col-3  p-2">
                <WhatsappShareButton
                  className="z-depth-1 rounded-pill"
                  url="www.klwenkwlnln.com" quote={'Technicon | Your device needs the perfect care'}>
                  <WhatsappIcon size={57} className="" round={true} />
                </WhatsappShareButton>

              </div>
              <div className="col-3  p-2">
                <EmailShareButton
                  className="z-depth-1 rounded-pill"
                  url="www.klwenkwlnln.com" quote={'Technicon | Your device needs the perfect care'}>
                  <EmailIcon size={57} round={true} className='' />
                </EmailShareButton>
              </div>
              <div className="col-3  p-2">
                <FacebookShareButton
                  className="z-depth-1 rounded-pill mt-3"
                  url="www.klwenkwlnln.com" quote={'Technicon | Your device needs the perfect care'}>
                  <FacebookIcon size={57} className='' round={true} />
                </FacebookShareButton>
              </div>
              <div className="col-3  p-2">
                <TelegramShareButton
                  className="z-depth-1 rounded-pill mt-3"
                  url="www.klwenkwlnln.com" quote={'Technicon | Your device needs the perfect care'}>
                  <TelegramIcon size={57} className={''} round={true} />
                </TelegramShareButton>

              </div>
              <div className="col-3  p-2">
                <PinterestShareButton
                  className="z-depth-1 rounded-pill mt-3"
                  url="www.klwenkwlnln.com" quote={'Technicon | Your device needs the perfect care'}>
                  <PinterestIcon size={57} className={''} round={true} />
                </PinterestShareButton>

              </div>
              <div className="col-3  p-2">
                <LinkedinShareButton
                  className="z-depth-1 rounded-pill mt-3"
                  url="www.klwenkwlnln.com" quote={'Technicon | Your device needs the perfect care'}>
                  <LinkedinIcon size={57} className={''} round={true} />
                </LinkedinShareButton>

              </div>
            </div>

            <div className="linkss  border rounded-lg z-depth-0">
              <span className="fa fa-users" />
              <span className="dext m-auto">
                Tell someone about technicon
              </span>
              <div className="fa fa-times m-auto"
                onClick={this.closeShare}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export { Navbar }