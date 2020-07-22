import React, { Component } from 'react'
const logo = require('./logo.png')
function getFDate(date = new Date() ) {
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
  }

class Invoice extends Component{
    render(){
        return(
            <div className="Invoice px-2">
                <div className="invoice_logo w-100 ">
                    <img src={logo} alt="" width="64px" className=""/>
                    <div className="logo_date  text-right">
                        {getFDate()}
                    </div>
                </div>
                <div className="invoice_cash ">
                    <span className="cash  ">Cash</span>
                    <span className="amount  text-right">N3500</span>
                </div>
                <div className="transacts_list border-top">
                    <div className="transact_items ">
                        <span className="transact_item ">Screen repair</span>
                        <span className="transact_amount ">N3500</span>
                    </div>
                    <div className="transact_items ">
                        <span className="transact_item ">Motherboard repair</span>
                        <span className="transact_amount ">N3500</span>
                    </div>
                    <div className="transact_items   total ">
                        <span className="transact_total ">Total</span>
                        <span className="transact_total_amount border-top ">N3500</span>
                    </div>
                </div>
            </div>
        )
    }
}
export {Invoice}