import React, { Component, Fragment } from 'react'
import Invoice from "../Invoice";
import Chat from './chat'
const send = require('./Vector.png')
class ChatBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Switch: true
    }
    this.Switch = this.Switch.bind(this)
    this.unSwitch = this.unSwitch.bind(this)
  }
  Switch() {
    this.setState({
      Switch: true
    })
  }
  unSwitch() {
    this.setState({
      Switch: false
    })
  }
  render() {
    let { selected, empty } = this.props
    return (
      <Fragment>
        <div className="ChatBox">
          <div className="ChatBox_measure">

            <div className="chat_box_header1 py-2 px-2 font-weight-bold">
              Meet Your Engineer
                </div>
            <div
              className="chat_box_header2 row py-2  text-white rounded-sm border-bottom border-top m-0 p-0 py-1"
              style={{ height: "55px" }}
            >
              {
                selected !== false &&
                <>
                  <div className="chat_header_pix  p-2 mx-2 rounded-pill "></div>
                  <div className="chat_user_details  px-2 ml-2  ">
                    <div className="chat_user_id small">
                      #ID {selected.trans_id}
                    </div>
                    <div className="chat_user_product">
                      {selected.device_brand} {selected.device_name}
                    </div>
                  </div>
                  <div className="chat_last   ml-auto mr-2">
                    <div className="chat_date">{(selected.createdAt).slice(0, selected.updatedAt.indexOf("T")).replace(/-/g, "/")}</div>
                    {
                      selected === "INP" ?
                        <div className="product_state border rounded-pill ml-auto">
                          <div className=" my-auto fa fa-check" />
                        </div> :
                        <div className=" my-auto fa  fa-exclamation-triangle  ml-auto" />

                    }
                  </div>
                </>
              }
            </div>

            <div className="row m-0  text-center border-bottom mb-3 py-0 my_invoice">
              <div
                className={this.state.Switch ? 'col-6  py-3 mount_color' : 'col-6  py-3'}
                style={{ transitionDuration: "0.2s" }}
                onClick={this.Switch}
              >Transaction</div>
              <div
                className={!this.state.Switch ? 'col-6  py-3 mount_color' : 'col-6  py-3'}
                style={{ transitionDuration: "0.2s" }}

                onClick={this.unSwitch}
              >Invoice</div>
            </div>

            {this.state.Switch ?
              <Chat />
              :
              <div className='my_own_invoice'>
                <Invoice />
              </div>
            }
            {!this.state.Switch ?

              <div className="bottom  border">{empty === false &&
                <>
                  <div className="send_reciept border ">
                    <div className=" ml">Send Receipt to mail</div>
                  </div>
                  <div className="mail_out border ml-auto rounded-pill z-depth-1">
                    <div className="send_now border rounded-pill z-depth-1">
                      <span className="send " style={{ backgroundImage: `url(${send})` }} />
                    </div>
                  </div>
                </>
              }
              </div>
              :
              <div className="bottom white  text-black  z-depth-1 ">
                <textarea autoFocus={true} placeholder={"You can chat with your engineer"}
                  className=" send_reciept border border-primary  black-text py-1"
                  style={{ resize: "none" }}
                />
                {/* <div className=" ml">Send Receipt to mail</div> */}
                {/* </div> */}
                <div className="mail_out border ml-auto rounded-pill z-depth-1">
                  <div className="send_now border rounded-pill z-depth-1">
                    <span className="send " style={{ backgroundImage: `url(${send})` }} />
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export { ChatBox }