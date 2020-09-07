import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PaymentMethod extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: [],
      point: null
    }
    this.Checked = this.Checked.bind(this)
    this.point_in = this.point_in.bind(this)
    this.point_out = this.point_out.bind(this)
  }
  point_in() {
    this.setState({
      point: false
    })
  }
  point_out() {
    this.setState({
      point: true
    })
  }
  Checked(e) {
    this.setState({
      checked: e
    })
    console.log(e)
  }

  render() {
    return (
      <div className="PaymentMethod   lighten-4">
        <div className="Payment_Choice   white  z-depth-1 ">
          <div className="payment_header flex">
            <span>Payment methods</span>
            <span className="ml-auto mr-1">Amount</span>
          </div>
          <div className="trans_idd flex mb-1 text-primary font-weight-bold">
            <div className=""> ID: #12323WE</div>
            <div className="ml-auto mr-1">2332 </div>
          </div>
          <div className={`payment_method_cash  d ${this.state.point === true && "bg_hasher"} border-top  py-3  row m-0 pointer px-2`}
            onClick={this.point_out}
          >
            <div className="payment_method_cash_icon fa fa-money-bill "
              style={{ color: this.state.point === true ? "#2f9af1b0" : "#6c6f725d" }}
            ></div>
            <div className="payment_method_title  ml-3 ">Cash</div>
            <div className={`${this.state.point === true ? "payment_method_check" : "payment_method_uncheck"}  ml-3 text-right `} onClick={this.Checked}>
              <div className="border rounded-pill  ml-auto">
                <div className=" m-auto fa fa-check w-100 h-100" />
              </div>
            </div>
          </div>


          <div className={`payment_method_cash d ${this.state.point === false && "bg_hasher"}  border-bottom py-3 row m-0 pointer px-2`}
            onClick={this.point_in}
          >
            <div className="payment_method_cash_icon fa fa-credit-card "
              style={{ color: this.state.point === false ? "#2f9af1b0" : "#6c6f725d" }}
            ></div>
            <div className="payment_method_title  ml-3 ">Card</div>
            <div className={`${this.state.point === false ? "payment_method_check" : "payment_method_uncheck"}  ml-3 text-right`}>
              <div className="border rounded-pill  ml-auto">
                <div className=" m-auto fa fa-check w-100 h-100" />
              </div>
            </div>
          </div>

          <div className="payment_method_cash  py-3 row m-0">
            {/* <div className="border  rounded-pill addman mx-auto">
              <div className="payment_method_cash_icon fa fa-plus  mx-auto"></div>
            </div> */}
            <div className="payment_method_title mx-auto"
              style={{ fontVariant: "small-caps", fontSize: 18 }}
            >
              <div>
                <span style={{ color: this.state.point === null ? "#84848a93" : "#6AB3EF", transitionDuration: "0.8s" }}
                  className={`${this.state.point !== null && "pointer"}`}
                >
                  {this.state.point === null && 'select payment method'}
                  {this.state.point === false && <><span className="fa fa-credit-card" style={{ fontSize: 13 }} /> pay</>}
                  {this.state.point === true && <> <span className="fa fa-paper-plane" style={{ fontSize: 12.2 }} /> mail invoice</>}
                </span>
              </div>
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
              <span className="fa fa-gift  font-eright-bold  my-auto" />
            </div>
          </div>
          <div className="mb-2 ">
            <span className="referral_gift fa  text-white fa-gift" />
            {/* <span className="ml-2 enter_referral">Enter referral code</span> */}
          </div>
        </div>
      </div>
    )
  }
}
export { PaymentMethod }