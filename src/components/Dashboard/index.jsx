import React, { Component } from 'react'
import { withResizeDetector } from 'react-resize-detector'
import { nav_in } from './../../store/actions/navSwitch'
import { connect } from 'react-redux'


import UserProfile from './User_Profile'
import ChatBox from './Chat_Box'
import TransactionHistory from './Transaction_History'

import NewTransaction from './New_Transaction'
import PaymentGateway from './Payment_Gateway'
import PaymentMethod from './Payment_Method'

import EditProfile from './Edit_Profile'
// import Invoice from './Invoice'
// import PickupLocation from './Pickup_Location'

// import Thank_You from './Thank_You'
// import Reach_Out_ID from './Reached_Out'
// import OfficeAddress from "./Office_Address";



import './index.scss'
//Switch Dashboard components
import SwitchEffect from './Switch'



class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      w: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      h: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
    this.screenResize = this.screenResize.bind(this)
  }
  componentDidMount() {
    this.props.nav_in()
  }
  screenResize() {
    this.setState({
      w: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      h: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    })
  }
  componentDidUpdate() {
    if (window.innerWidth !== this.state.w) {
      window.addEventListener("resize", this.screenResize)
    }
  }
  componentDidUpdate() {
    if (window.innerWidth !== this.state.w) {
      window.addEventListener("resize", this.screenResize)
    }
  }

  render() {
    let Switch = SwitchEffect(
      NewTransaction,
      PaymentGateway,
      PaymentMethod,
      EditProfile,
      PaymentMethod
    )[0]
    let mobile_view = SwitchEffect(
      NewTransaction,
      PaymentGateway,
      PaymentMethod,
      EditProfile,
      PaymentMethod
    )[1]
    return (
      <div className='C_style row  py-2 mx-0 px-0 mt-2 mx-md-1 '>
        <div className={`Dash_1 col-lg-4 col-md-6  mb-4 ${mobile_view[0]}`}  >
          <div className=" w-100 mb-4 mt-2">
            {Switch[3] == null ? <UserProfile /> : Switch[3]}
          </div>
        </div>
        <div className={`Dash_2 col-lg-4 ${!Switch[2] && "border "} ${mobile_view[1]} col-md-6 `}>
          <div className=" w-100 mb-4 mt-2">
            {Switch[0] == null ? <ChatBox /> : Switch[0]}
  
          </div>
        </div>
        <div className={`Dash_3 col-lg-4 col-md-6 mx-0 ${mobile_view[2]} `}>
          <div className=" mb-4 ">
            {Switch[1] == null ? <TransactionHistory /> : Switch[1]}
          </div>
        </div>
        {
          ((function (width, height) {
            return (
              <div className="Dash_3 col-12 mx-0 " style={{ display: width < 991 ? "block" : "none" }}>
                <div className=" mb-4 ">
                  {Switch[1] == null ? <TransactionHistory /> : Switch[1]}
                </div>
              </div>)
          })())
        }

      </div>
    )
  }
}


export default connect(null, { nav_in })(Dashboard)