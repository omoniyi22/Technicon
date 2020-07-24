import React, { Component } from 'react'

import UserProfile from './User_Profile'
import ChatBox from './Chat_Box'
import TransactionHistory from './Transaction_History'

import NewTransaction from './New_Transaction'
import PaymentGateway from './Payment_Gateway'
import PaymentMethod from './Payment_Method'

import EditProfile from './Edit_Profile'
import Invoice from './Invoice'
import PickupLocation from './Pickup_Location'

import Thank_You from './Thank_You'
import Reach_Out_ID from './Reached_Out'
import OfficeAddress from "./Office_Address";

import LogIn from './../Log_In'
import SignUp from './../Sign_Up'

import './index.scss'
//Switch Dashboard components
import SwitchEffect from './Switch'

class Dashboard extends Component {
    render (){
    let Switch = SwitchEffect(
        NewTransaction,
        PaymentGateway,
        PaymentMethod
     )
        return(
            <div className='C_style row  py-2 mx-0 px-0 mt-2 mx-md-1 '>
              <div className="Dash_1 col-lg-4 col-md-6  mb-4 ">
                <div className=" w-100 mb-4 mt-2">
                  {/* <UserProfile/> */}
              {/* <OfficeAddress/> */}
              <LogIn/>
              {/* <EditProfile/> */}
              </div>  
              </div>  
              <div className={`Dash_2 col-lg-4 ${!Switch[2] && "border "} col-md-6 `}>
                <div className=" w-100 mb-4 mt-2">
                {/* {Switch[0] == null ? <ChatBox/> : Switch[0]} */}
                  {/* <Thank_You/> */}
                  <SignUp/>
                </div>
              </div>  
              <div className="Dash_3 col-lg-4 col-md-6 mx-0 ">
                <div className=" mb-4 ">
                {/* {Switch[1]  == null ? <TransactionHistory/> : Switch[1]} */}
                {/* <PaymentGateway/> */}

                <PickupLocation/>
                {/* <SignUp/> */}

                </div>
              </div>  
            </div>
        )
    }
}


export default Dashboard