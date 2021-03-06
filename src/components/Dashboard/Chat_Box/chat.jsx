import React, { Component } from 'react'
import Moment from 'react-moment'
class Chat extends Component {
  scrollToBottom = React.createRef()
  constructor(props) {
    super(props)
    this.state = {
      socket: null
    }
    this.myDate = this.myDate.bind(this)
  }
  componentDidMount() {
    this.props.all_chat.length > 0 && this.scrollToBottom.current.scrollIntoView({ behaviour: "smooth" })
  }
  componentDidUpdate(pros) {
    if ((this.props.down !== pros.down) || (this.props.all_chat.length !== pros.all_chat.length)) {
      if (this.props.all_chat.length > 0 && this.scrollToBottom.current)
        this.scrollToBottom.current.scrollIntoView({ behaviour: "smooth" })
    }
  }
  myDate(e) {
    let day = new Date(e)
  }

  render() {
    function myDate(e) {
      if (e) {
        let day = e.slice(0, 16)
        console.log(day)
        return day
      } else {
        e = Date()
        let day = e.slice(0, 16)
        console.log(day)
        return day
      }
    }
    return (
      <div className="chat_box smoothed" id="chat_box">
        {this.props.all_chat.map((arr, key) => {
          if (arr.user_type === "SUPER_ADMIN" || arr.user_type === "FRONT_DESK") {
            return <div ref={this.scrollToBottom} className="right_chat_box px-2 py-0 ml-auto">
              <div className="right_chat_box_message  border">
                {arr.message}

              </div>
              <div className='right_chat_box_date mb-3 mt-1  ml-auto'> {(arr.createdAt).slice(0, -8).replace("T", "  ").replace(/-/g, "/")}</div>
            </div>
          } else if (arr.user_type === "USER") {
            return <div ref={this.scrollToBottom} className="left_chat_box px-2 py-0 ">
              <div className="left_chat_box_message  border">
                {arr.message}
              </div>
              <div className='left_chat_box_date mb-3 mt-1 '> {(arr.createdAt).slice(0, -8).replace("T", "  ").replace(/-/g, "/")}</div>
            </div>
          }
        })}


        {/* <div className="right_chat_box px-2 py-0 ml-auto">
          <div className="right_chat_box_message  border">
            Start a new transaction
            Start a new transaction
            Start a new transaction
            Start a new transaction
                        </div>
          <div className='right_chat_box_date mb-3 mt-1  ml-auto'>25 Jul 5:00AM</div>
        </div>

        <div className="left_chat_box px-2 py-0 ">
          <div className="left_chat_box_message  border">
            Start a new transaction
            Start a new transaction
            Start a new transaction
            Start a new transaction
                        </div>
          <div className='left_chat_box_date mb-3 mt-1 '>25 Jul 5:00AM</div>
        </div>  <div className="left_chat_box px-2 py-0 ">
          <div className="left_chat_box_message  border">
            Start a new transaction
            Start a new transaction
            Start a new transaction
            Start a new transaction
          </div>
          <div className='left_chat_box_date mb-3 mt-1 '>25 Jul 5:00AM</div>
        </div> */}
      </div>
    )
  }
}

export default Chat
