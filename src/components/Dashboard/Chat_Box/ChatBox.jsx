import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'
import Invoice from "../Invoice";
import Chat from './chat'

const socketUrl = "localhost:8001"
const socket = io(socketUrl)
const send = require('./Vector.png')
class ChatBox extends Component {
  scrollToBottom = React.createRef()
  constructor(props) {
    super(props)
    this.state = {
      Switch: false,
      down: false,
      chat: ""
    }
    this.Switch = this.Switch.bind(this)
    this.unSwitch = this.unSwitch.bind(this)
    this.Chatting = this.Chatting.bind(this)
    this.clientMessage = this.clientMessage.bind(this)
    this.adminMessage = this.adminMessage.bind(this)
    this.goDown = this.goDown.bind(this)
  }
  componentDidMount() {
    socket.on("connect", () => {
      this.props.getAllChat(socket)
      this.props.recieveAllChat(socket, this.goDown)
      this.props.recieveErrorMessage(socket, this.goDown)
      this.props.recieveAdminChat(socket, this.goDown)
      this.props.recieveClientChat(socket, this.goDown)
    })
  }
  // componentWillUnmount() {
  // socket.io.reconnection()
  // this.props.clearChat()
  // }

  adminMessage(e) {
    console.log("admin")
    if (this.state.chat.length > 0) this.props.getAdminChat(socket, this.state.chat)

  }

  clientMessage(e) {
    console.log("client")
    if (this.state.chat.length > 0) this.props.getClientChat(socket, this.state.chat)
  }
  goDown() {
    this.setState({ down: true })
    setTimeout(() => {
      this.setState({ down: false })
    }, 1000);
  }

  Chatting(e) {
    this.setState({ [e.target.name]: e.target.value })
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
    let { selected, empty, payment_status } = this.props
    return (
      <Fragment>
        <div className="ChatBox opacy">
          <div className="ChatBox_measure">

            <div className="chat_box_header1 py-2 px-2 font-weight-bold">
              Meet Your Engineer
                </div>
            <div
              className={`chat_box_header2 row py-2  text-white rounded-sm border-bottom border-top m-0 p-0 py-1 `}
              style={{ height: "55px" }}
            >
              {
                selected !== false &&
                <>
                  <div className={`chat_header_pix  p-2 mx-2 rounded-pill ${selected.device_type}`}></div>
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
                      selected.status !== "INP" ?
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

            {
              this.state.Switch ?
                <Chat down={this.state.down} all_chat={this.props.all_chats} refe={this.scrollToBottom} />
                :
                <div className='my_own_invoice'>
                  <Invoice />
                </div>
            }
            {!this.state.Switch ?

              <div className="bottom  border">{empty === false &&
                <>
                  {
                    payment_status === "NOT_PAID" ? <>
                      <div className="send_reciept border pointer mx-auto text-center">
                        <Link to="/payment-method" className="inherit text-white ml text-center w-100"
                          style={{ fontVariant: "small-caps", fontSize: 17 }}
                        >select payment method</Link>
                      </div>

                      <div className="mail_out  ml-auto  ">
                        {/* <div className="send_now border rounded-pill z-depth-1">
                      <span className="send " style={{ backgroundImage: `url(${send})` }} />
                    </div> */}
                      </div>
                    </> :
                      <>
                        <div className="send_reciept border pointer mx-auto text-center">
                          <div className=" ml text-center w-100"
                            style={{ fontVariant: "small-caps", fontSize: 17 }}
                          >payment has been made</div>
                        </div>

                        <div className="mail_out  ml-auto  ">
                          {/* <div className="send_now border rounded-pill z-depth-1">
                      <span className="send " style={{ backgroundImage: `url(${send})` }} />
                    </div> */}
                        </div>
                      </>
                  }
                </>
              }
              </div>
              :
              <div className="bottom white  text-black  z-depth-1 ">
                <textarea autoFocus={true} value={this.state.chat} name={"chat"} onChangeCapture={this.Chatting} placeholder={"You can chat with your engineer"}
                  className=" send_reciept border border-primary  black-text py-1"
                  style={{ resize: "none" }}
                />
                {/* <div className=" ml">Send Receipt to mail</div> */}
                {/* </div> */}
                <div onClick={this.clientMessage}
                  className="mail_out border ml-auto rounded-pill z-depth-1">
                  <div className="send_now border rounded-pill z-depth-1">
                    <span className="send " style={{ backgroundImage: `url(${send})` }} />
                  </div>
                </div>


                {/* This is the admin chat button */}

                {/* <div onClick={this.adminMessage}
                  className="mail_out border ml-auto rounded-pill z-depth-1">
                  <div className="send_now border rounded-pill z-depth-1">
                    <span className="send " style={{ backgroundImage: `url(${send})` }} />
                  </div>
                </div> */}
              </div>
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export { ChatBox }