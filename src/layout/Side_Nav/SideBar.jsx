import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SwitchEffect from './../Switch'
const icon1 = require('./home.png')
const icon2 = require('./payment.png')
const icon3 = require('./about.png')
const icon4 = require('./legal.png')
const icon5 = require('./share.png')
const icon6 = require('./login.png')
const icon7 = require('./logout.png')

const logo = require('./logo.png')
class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slideRight: "100%"
    }
    this.slideRight = this.slideRight.bind(this)
    this.slideoff = this.slideoff.bind(this)
  }

  slideRight() {
    this.setState({
      slideRight: "0%"
    })
  }
  slideoff() {
    this.setState({
      slideRight: "100%"
    })
  }
  render() {
    let Swig = SwitchEffect()
    return (
      <>
      {(window.location.href.search("login") || window.location.href.search("siginup") !== -1) &&
      <div className={`w-100 side_nav `}>

        <div className="  slide_right" style={{ "right": this.state.slideRight }}>
          <div className="contained  pt-2  ">

            <div className='text-right possa' >
              <div onClick={this.slideoff}>
                <span className="fa fa-times rounded-pill " />
              </div>
            </div>
            <div className="user_n  ">
              <img className="user_pix  red rounded-pill ml-auto" />

              <div className="user_dl  mr-auto">
                <div className="userName  mt-auto mb-1">Yusuf yusuf</div>
                <div className="userLocation  mb-auto mt-1">
                  <span className="fa fa-map-marker-alt" />
                  89, Zik Hall, Unibadan
                      </div>
              </div>

            </div>

            <div className="side_items ">
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
              <Link onClick={this.slideoff} className="cinta">
                <div className="nav_item ">
                  <span className="icon5 fa fa-share-alt " />
                  <div className="sav">Share</div>
                </div>
              </Link>
              <Link onClick={this.slideoff} to="/login" className="cinta">
                <div className="nav_item  ">
                  <span className="icon6 fa fa-sign-in-alt " />
                  <div className="sav">Login</div>
                </div>
              </Link>
              <div className="nav_item  logouti" onClick={this.slideoff}>
                <span className="icon7 fa fa-sign-out-alt " />
                <div className="sav">Logout</div>
              </div>

            </div>
          </div>
        </div>


        <div className="side_nav   p-2">
          <div className="nav_button  rounded-lg" onClick={this.slideRight}>
            <span className="fa fa-bars" />
          </div>
          <div className="nav_logo  text-center">
            <Link to='/'> <img src={logo} alt="" width={'67px'} /></Link>
          </div>
          <div className="nav_login  rounded">
            <button className=" rounded-lg">
              Try for Free
                    </button>
          </div>
        </div>
      </div>
      }
      </>
    )
  }
}

export { SideBar }