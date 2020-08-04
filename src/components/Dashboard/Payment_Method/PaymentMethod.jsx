import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class PaymentMethod extends Component {
    constructor(props){
        super(props)
        this.state = {
            checked : [],
            point: ''
        }  
        this.Checked = this.Checked.bind(this)
    }
    Checked(e){
        this.setState({
            checked : e
        })
        console.log(e)
    }

    render(){
        return(
            <div className="PaymentMethod   lighten-4">
                <div className="Payment_Choice  white  z-depth-1 ">
                    <div className="payment_header ">
                        Payment methods
                    </div>
                    <div className="payment_method_cash border-top py-3  row m-0" >
                    <div className="payment_method_cash_icon fa fa-money-check "></div>
                        <div className="payment_method_title  ml-3 ">Cash</div>
                        <div className={`${this.state.checked != this ? "payment_method_check" : "payment_method_uncheck" }  ml-3 text-right `} onClick={this.Checked}>
                            <div className="border rounded-pill  ml-auto">
                                <div className=" m-auto fa fa-check w-100 h-100"/>
                            </div>
                        </div>
                    </div>

                    
                    <div className="payment_method_cash border-top py-3 row m-0">
                        <div className="payment_method_cash_icon fa fa-money-check "></div>
                        <div className="payment_method_title  ml-3 ">**** 12345</div>
                        

                        <div className="payment_method_uncheck  ml-3 text-right ">
                            <div className="border rounded-pill  ml-auto">
                                <div className=" m-auto fa fa-check w-100 h-100"/>
                            </div>
                        </div>
                    </div>

                    <div className="payment_method_cash border-top py-3 row m-0">
                        <div className="border  rounded-pill addman">
                        <div className="payment_method_cash_icon fa fa-plus  mx-auto"></div>
                        </div>
                        <div className="payment_method_title ml-3 ">
                          <Link to='/payment-gateway'>
                          Add Payment Card
                          </Link>
                        </div>                     
                    </div>
                </div>
                <div className="payment_method_promo mt-1 py-2 white z-depth-1">
                    <div className="payment_header mt-1 py-2 mb-0 white">Promo</div>
                    <div className="promo_gifting  mt-1  mb-0 white pl-2 pr-3 row mb-4">
                        <div className="gifting_content  ml-auto">
                            <div className="gifting_header  ml-2">
                               <div className="mr-3 mb-2"> -20% Discount</div>
                            </div>
                            <div className="gifting_note  mr-3">
                                <div>Valid for 30 days</div>
                                <div>maxmimum value N400</div>
                                <div>Expires 12 Dec 2020</div>
                            </div>
                        </div>
                        <div className="w-25 gifting_icon  mr-auto  mt-3">
                        <span className="fa fa-gift  font-eright-bold  my-auto"/>
                        </div>
                    </div>
                <div className="mb-2 ">
                    <span className="referral_gift fa fa-gift"/>
                    <span className="ml-2 enter_referral">Enter referral code</span>
                </div>
                </div>
            </div>
        )
    }
}
export {PaymentMethod}