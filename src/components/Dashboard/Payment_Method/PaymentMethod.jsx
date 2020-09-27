import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
var NumberFormat = require('react-number-format/dist/react-number-format');


class PaymentMethod extends Component {
  constructor(props) {
    super(props)
    this.state = {
      point: null,
      payment_method: ""
    }
    this.point_in = this.point_in.bind(this)
    this.point_out = this.point_out.bind(this)
    this.pay = this.pay.bind(this)
  }
  point_in() {
    this.setState({
      point: false,
      payment_method: "CARD"
    })
    //console.log(this.state.payment_method)
  }
  point_out() {
    this.setState({
      point: true,
      payment_method: "CASH"
    })
    //console.log(this.state.payment_method)
  }
  pay() {
    let { payment_method } = this.state
    this.props.pay(payment_method, this.props.history)
  }
  render() {
    let { payment_status, device, start_, stop_, error, empty, selected, loading, response } = this.props
    return (
      <div className="PaymentMethod   lighten-4">
        {/* <div className="overun"></div> */}
        {
          selected === false ?
            <div className="text-center empty_matter opacy  mx-auto ">
              <div className="empty_one rounded-pill  mx-auto p-4 mt-5">
                {/* <div className="errored" /> */}
                <div className="fa fa-briefcase sofo"
                  style={{ fontSize: 50 }} />
              </div>
              <div className="font-weight-bold  empty_text mt-4">
                <span className="onr">Select a device from transaction history</span> <br />
              </div>
            </div> :
            <>
              {start_ === true ?
                <div className="text-center empty_matter   mx-auto ">
                  <div className="empty_one rounded-pill  mx-auto p-4 mt-5">
                    {/* <div className="empty_oned  errored " /> */}
                    <Loader
                      type="Puff"
                      color="#53A3D1"
                      height={49}
                      width={49}
                      secondaryColor={"white"}
                    />
                  </div>
                  <div className="font-weight-bold  empty_text mt-4">
                    {/* <span className="onr">Loading ...</span> <br /> */}
                  </div>
                </div>
                :
                <>
                  {error === "" ?

                    <>{empty === false ?
                      // Device
                      <>
                        {
                          payment_status === "NOT_PAID" ?
                            <>
                              <div className="Payment_Choice   white  z-depth-1 ">
                                <div className="payment_header flex">
                                  <span>Payment methods</span>
                                  <span className="ml-auto mr-1">Amount</span>
                                </div>
                                <div className="trans_idd flex mb-1 text-primary font-weight-bold">
                                  <div className=""> ID: {selected.trans_id}</div>
                                  <div className="ml-auto mr-1">{device &&
                                    <NumberFormat value={device.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                                  } </div>
                                </div>
                                <div className={`payment_method_cash  d ${this.state.point === true && "bg_hasher"} border-top  py-3  row m-0 pointer px-2`}
                                  onClick={this.point_out}
                                >
                                  <div className="payment_method_cash_icon fa fa-money-bill "
                                    style={{ color: this.state.point === true ? "#2f9af1b0" : "#6c6f725d" }}
                                  ></div>
                                  <div className="payment_method_title  ml-3 ">Cash</div>
                                  <div className={`${this.state.point === true ? "payment_method_check" : "payment_method_uncheck"}  ml-3 text-right `}>
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
                                      >{


                                          <>
                                            {
                                              response === "SENT" ?
                                                <div><span className="fa fa-credit-card" style={{ fontSize: 13 }} />invoice sent email</div>
                                                :
                                                <>
                                                  {this.state.point === null && 'select payment method'}
                                                  {this.state.point === false && <div
                                                    onClick={this.pay}><span className="fa fa-credit-card" style={{ fontSize: 13 }} /> pay</div>}
                                                  {this.state.point === true && <div
                                                    onClick={this.pay}> <span className="fa fa-paper-plane" style={{ fontSize: 12.2 }} /> mail invoice</div>}
                                                </>
                                            }
                                          </>
                                        }</span>
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
                            </>
                            :
                            <>
                              <div className="text-center empty_matter   mx-auto ">
                                <div className="empty_one rounded-pill  mx-auto p-4 mt-5">
                                  <div className="empty_oned emptied_one">
                                    <div className="fa fa-check my-auto" />
                                  </div>
                                </div>
                                <div className="font-weight-bold empty_text mt-4">
                                  <span className="onr mt-4">Payment has been made..</span> <br />
                                </div>
                              </div>
                            </>
                        }
                      </>
                      :
                      <div className="text-center empty_matter   mx-auto ">
                        <div className="empty_one rounded-pill  mx-auto p-4 mt-5">
                          <div className="empty_oned" />
                        </div>
                        <div className="font-weight-bold empty_text mt-4">
                          <span className="onr">Invoice not available..</span> <br />
                          <small><i>Device has not been diagonised</i></small>
                        </div>
                      </div>
                    }
                    </>
                    :
                    <div className="text-center empty_matter   mx-auto ">
                      <div className="empty_one rounded-pill  mx-auto p-4 mt-5">
                        <div className="errored" />
                      </div>
                      <div className="font-weight-bold  empty_text mt-4">
                        <span className="onr">{error}</span> <br />
                      </div>
                    </div>

                  }
                </>}
            </>
        }

      </div>
    )
  }
}
export { PaymentMethod }