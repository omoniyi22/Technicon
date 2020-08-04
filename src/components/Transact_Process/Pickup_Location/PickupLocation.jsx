import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'


const map = require('./map.png')
const vecto = require('./vecto.png')
const vectu = require('./vectu.png')
const vecti = require('./vecti.png')

class PickupLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pickup: "",
      delivery: "",
      msg: null
    }

    this.onClick = this.onClick.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount() {
    if (this.props.TS1 === false) {
      this.props.history.push('./dashboard')
    }
  }

  onClick(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit() {
    let {
      pickup,
      delivery
    } = this.state
    if (
      pickup.length > 1 || delivery.length > 1
    ) {
      this.props.Office(
        pickup,
        delivery
      )
      this.setState({
        msg: "There is an error"
      })
    } else {
      this.setState({
        msg: "There is an error"
      })
    }
  }

  render() {
    return (
      <form> 

        <div className="PickupLocation ">
          <div className="fit_in ">
            <div className="pickup_map">
            </div>
          </div>
          <div className="pickup_content  white py-2 px-4 row m-0 p-0">
            <div className="pickup_text">

            </div>
            <div className="pickup_text_1 flex col-12 p-0">
              <span className="fa fa-map-marked-alt mr-2" />
              <span className="enable_loaction ml-1">
                Enable your location so our dispatch riders can come pickup your gadget.
                        </span>
            </div>
            <div className="pickup_form flex  w-100">
              <div className="left  flex">
                <img src={vecto} width="20px" />
                <img className="vecti" className="my-1" src={vecti} />
                <img src={vectu} width="20px" />
              </div>
              <div className="right">

                <div className="new_transaction_group mb-2 ">
                  <div className="new_transaction_label small font-weight-bold">
                    COMPLAINT
                        </div>
                  <div className="new_transaction_input ">
                    <div className="bolo my-1 w-100 borde-left  ">
                      <input placeholder='What is wrong with your device'
                        name="pickup"
                        onChange={this.onClick}
                        value={this.state.pickup}
                        className="w-100 form-control    py-0 -none" />
                    </div>
                  </div>
                </div>

                <div className="new_transaction_group mb-3 ">
                  <div className="new_transaction_label small font-weight-bold">
                    COMPLAINT
                        </div>
                  <div className="new_transaction_input ">
                    <div className="bolo my-1 w-100 borde-left  ">
                      <input placeholder='What is wrong with your device'
                        name="delivery"
                        onChange={this.onClick}
                        value={this.state.delivery}
                        className="w-100 form-control    py-0 -none" />
                    </div>
                  </div>
                </div>

              </div>
            </div>


            <div className="pickup_button_3 rounded-pill text-center mt-3"
            onClick={this.onSubmit}
            >
              NEXT
            </div>
{this.state.pickup}
{this.state.delivery}

          </div>
        </div>
      </form>

    )
  }
}
export default withRouter(PickupLocation)