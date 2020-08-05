import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
    let { username } = this.props.auth
    let { logOutAction } = this.props
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
                {
                    this.props.auth.isAuthenticated ?

                <div className="user_n  ">
                  <img className="user_pix  red rounded-pill ml-auto border-0" />

                  <div className="user_dl  mr-auto">
                    <div className="userName  mt-auto mb-1">{this.props.auth.username}</div>
                    <div className="userLocation  mb-auto mt-1">
                      <span className="fa fa-map-marker-alt" />
                      89, Zik Hall, Unibadan
                      </div>
                  </div>

                </div> : 
                <div className=" text-center w-100 ">
                <img src={logo} width="70px" className=" pt-3"/>
                </div>
                }

                <div className="side_items ">
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
                      <Link onClick={this.slideoff} to="/register" className="cinta">
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
                  <Link onClick={this.slideoff} className="cinta">
                    <div className="nav_item ">
                      <span className="icon5 fa fa-share-alt " />
                      <div className="sav">Share</div>
                    </div>
                  </Link>
                  {
                    !this.props.auth.isAuthenticated ?
                      <>
                        <Link onClick={this.slideoff} to="/login" className=" logouti cinta">
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