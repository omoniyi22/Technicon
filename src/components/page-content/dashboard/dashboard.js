import React, { Component } from "react";
import { UserTransactionAndChat } from "./user-transaction-and-chat/user-transaction-and-chat";
import UserProfile from "./user-profile/user-profile";
import TransactionHistory from "./transaction-history/transaction-history";
import  './dashboard.scss'

class DashBoard extends Component {
  render(){
    return (
      <div className="row Dashboard mx-md-5 mt-md-4 border">
        <div className="col-md-6 col-sm ChatBoard border px-2">
          <UserTransactionAndChat/>
        </div>
        <div className="col-md-6 col-sm border px-2">
          <UserProfile />
          <TransactionHistory/>
        </div>
        {/* <div className="col-md-4 col-sm Transboard border px-2">
        </div> */}
      </div>
    );
  }
}

export default DashBoard;
