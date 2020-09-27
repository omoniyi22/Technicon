import React, { Component } from 'react'
import { nav_in } from './../../store/actions/navSwitch'
import { connect } from 'react-redux'

import UserProfile from './User_Profile'
import ChatBox from './Chat_Box'
import TransactionHistory from './Transaction_History'

import NewTransaction from './New_Transaction'
import PaymentGateway from './Payment_Gateway'
import PaymentMethod from './Payment_Method'

import EditProfile from './Edit_Profile'
import './index.scss'
import SwitchEffect from './Switch'
class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.nav_in()
  }

  render() {
    let Switch = SwitchEffect(
      NewTransaction,
      PaymentGateway,
      PaymentMethod,
      EditProfile,
      PaymentMethod,
      PaymentGateway
    )[0]
    let mobile_view = SwitchEffect(
      NewTransaction,
      PaymentGateway,
      PaymentMethod,
      EditProfile,
      PaymentMethod
    )[1]
    return (
      <div className='C_style opacy row  py-2 mx-0 px-0 mt-2 mx-md-1 '>
        <div className={` Dash_1 col-lg-4 col-md-6  mb-4 ${mobile_view[0]}`}  >
          <div className="opacy w-100 mb-4 mt-2">
            {Switch[3] == null ? <UserProfile /> : Switch[3]}
          </div>
        </div>
        <div className={` Dash_2 col-lg-4 ${!Switch[2] && "border z-depth-1"} ${mobile_view[1]} col-md-6 `}>
          <div className="opacy w-100 mb-4 mt-2">
            {Switch[0] == null ? <ChatBox /> : Switch[0]}
  
          </div>
        </div>
        <div className={` Dash_3 col-lg-4 col-md-6 mx-0 ${mobile_view[2]} `}>
          <div className="opacy mb-4 ">
            {Switch[1] == null ? <TransactionHistory /> : Switch[1]}
          </div>
        </div>
      </div>
    )
  }
}


export default connect(null, { nav_in })(Dashboard)