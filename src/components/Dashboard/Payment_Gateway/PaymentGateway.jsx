import React, { Component } from 'react'
import DayPicker from 'react-day-picker';
import './../../../../node_modules/react-day-picker/lib/style.css';
const card = require('./card.jpg')
const gaurd = require('./gaurd.png')

class PaymentGateway extends Component {
  render() {
    return (
      <>
        <div className="PaymentGateway opacy">
          <img src={card} className="PaymentGatewayCard  mt-2 z-depth-1" />
          <div className="new_transaction_form form px-2 z-depth-1 mt-2 py-3 rounded-lg ">
            <div className="new_transaction_group mb-3 ">
              <div className="new_transaction_label small font-weight-bold">
                CARD HOLDER NAME
                        </div>
              <div className="new_transaction_input ">
                <div className="bolo my-1 w-100 borde-left  ">
                  <input placeholder='Card Holder Name'
                    className="w-100 form-control border   py-0 border-none" />
                </div>
              </div>
            </div>

            <div className="new_transaction_group mb-3 ">
              <div className="new_transaction_label small font-weight-bold">
                CARD NUMBER
                        </div>
              <div className="new_transaction_input ">
                <div className="bolo my-1 w-100 borde-left  ">
                  <input placeholder='Card Number'
                    className="w-100 form-control border   py-0 border-none" />
                </div>
              </div>
            </div>


            <div className="row mx-0 px-0">
              <div className="new_transaction_group mb-3 col-6  px-0 mx-0 ">
                <div className="new_transaction_label small font-weight-bold">
                  EXP.
                        </div>
                <div className="new_transaction_input ">
                  <div className="bolo my-1 w-100 border-right ">
                    <input placeholder='Expiring Date'
                      className="w-100 form-control  py-0 border-none" />
                  </div>
                </div>
              </div>

              <div className="new_transaction_group mb-3 col-6 mx-0 px-0">
                <div className="new_transaction_label small font-weight-bold">
                  CVV
                        </div>
                <div className="new_transaction_input ">
                  <div className="bolo my-1 w-100  ">
                    <input placeholder="CVV Number" class="w-100 form-control  py-0 border-none" />
                  </div>
                </div>
              </div>
            </div>



            <div className="new_transaction_button px-1 ">
              <button className="new_transaction_button_save btn text-center text-primary z-depth-0  font-weight-bold rounded-pill btn-md mt-1"> Save</button>
            </div>
            <div className="row m-0 p-0 shield">
              <div className=" mr-1"> <img src={gaurd} /></div>
              <div className="Security">100% Security</div>
            </div>
          </div>
        </div>




      </>
    )
  }
}

export { PaymentGateway }