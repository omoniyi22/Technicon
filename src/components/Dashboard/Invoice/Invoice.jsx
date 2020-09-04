import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
const emptyCart = require('./EC.png')
const error = require('./erroed.png')
const eE = require('./CTE.png')
const logo = require('./logo.png')
function getFDate(date = new Date()) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return month + '/' + day + '/' + year;
}

class Invoice extends Component {
  render() {
    const {
      device, start_, stop_, error, empty, selected
    } = this.props

    return (
      <div className="Invoice px-2"
        style={{ animationDuration: "0.3s" }}>
        {
          selected === false ?
            <div className="text-center empty_matter   mx-auto ">
              <div className="empty_one rounded-pill  mx-auto p-4 mt-5">
                {/* <div className="errored" /> */}
                <div className="fa fa-briefcase sofo"
                style={{fontSize: 50}}/>
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
                    <span className="onr">Loading ...</span> <br />
                  </div>
                </div>
                :
                <>
                  {error === "" ?

                    <>{empty === false ?
                      // Device
                      <>
                        <div className="invoice_logo w-100 ">
                          <img src={logo} alt="" width="64px" className="" />
                          <div className="logo_date  text-right">
                            {(device.updatedAt).slice(0, selected.updatedAt.indexOf("T")).replace(/-/g, "/")}
                          </div>
                        </div>
                        <div className="invoice_cash ">
                          <span className="cash">Cash</span>
                          <span className="amount  text-right">{device && device.price}</span>
                        </div>
                        <div className="transacts_list border-top">
                          {device.diagnosis &&
                            device.diagnosis.map(item =>
                              <div className="transact_items ">
                                <span className="transact_item ">{item.item}</span>
                                <span className="transact_amount ">{item.amount}</span>
                              </div>
                            )
                          }
                          <div className="transact_items   total ">
                            <span className="transact_total ">Total</span>
                            <span className="transact_total_amount border-top ">{device.price}</span>
                          </div>
                        </div>
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
export { Invoice }