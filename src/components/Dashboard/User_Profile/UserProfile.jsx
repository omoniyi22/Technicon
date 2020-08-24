import React, { Component } from 'react'
import { Link } from "react-router-dom"

class UserProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="user_profiles   mb-2">
        <div className="user_profile_box">
          <div className="profile_pix text-center mx-auto rounded-pill">
            <span className="fa fa-user mt-1 px-1 " />
          </div>
          <div className="user_box_details text-center">
            <div className="name ">
              {this.props.profile.name}
                        </div>
            <div className="address">
              <botton className="btn btn-sm rounded-pill px-3 pt-0 z-depth-0 mb-0 mb-1">
                <span className="fa fa-map-marker-alt mr-1" />
                <span className="street ml-1">{this.props.profile.address}.</span>
              </botton>
            </div>
            <Link to="/edit-profile" className="text_inherit">
              <button className="edit_profile blue lighten-1 text-white btn btn-sm mt-0 z-depth-1 rounded-pill">
                Edit Profile
                        </button>
            </Link>
          </div>
        </div>
        <div className="switch_buttons py-0 mb-0 mt-3 border-top border-left border-right border-bottom">
          <Link to="/dashboard" className="text_inherit">

            <div className="dashboard mt-1 row mx-0 ">
              <div className="dashboard_icon py-1 mb-2  ">
                <div className="fa fa-home pl-4 pr-3 " />
              </div>
              <div className="dashboard_button py-2 px-1  ">
                <div className="dashboard">
                  Dashboard
                            </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="switch_buttons py-0 mb-0 mt-0  border-bottom border-left border-right">
          <Link to="/payment-method" className="text_inherit">
            <div className="dashboard mt-1 row mx-0 ">
              <div className="dashboard_icon py-1 mb-2  ">
                <div className="fa fa-money-bill-alt  pl-4 pr-3 " />
              </div>
              <div className="dashboard_button py-2 px-1  ">
                <div className="dashboard">
                  Payment
                            </div>
              </div>
            </div>
          </Link>
        </div>
        <Link to="/new-transaction" className="text_inherit">
          <div className='start_transaction z-depth-1 text-center border-left-0 border-right-0  w-100 row m-0 p-0 content-justify-center'>
            <div className=' hahaha border'>
              <span>Start a new transaction</span>
            </div>
            <div className="transact_plus ml-2 rounded-pill ">
              <div className="transact_plus_border     rounded-pill">
                <div className="fa fa-plus  border rounded-pill" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
export { UserProfile }