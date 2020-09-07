import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import CustomPaystack from './../paystack/paystack'

const map = require('./map.png')
const vecto = require('./vecto.png')
const vectu = require('./vectu.png')
const vecti = require('./vecti.png')

class PickupLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pickup_location: "",
      delivery_location: "",
      msg: null,
      mss: this.props.err
    }

    this.onClick = this.onClick.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    if (this.props.TS1 === false) {
      this.props.history.push('/dashboard')
    }
  }
  onClick(e) {
    this.setState({
      msg: null,
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    let {
      pickup_location,
      delivery_location
    } = this.state
    if (
      pickup_location.length > 8 && delivery_location.length > 8
    ) {
      this.props.Office(
        {
          pickup_location,
          delivery_location
        }, this.props.history
      )

    } else {
      this.setState({
        msg: "Both fields must contain at least 8 characters \n for proper description"
      })
    }
  }
  componentDidUpdate(prevProps) {
    let { success } = this.props
    if (success !== prevProps.success) {
      this.props.history.push('/your-id')
    }
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>

        <div className="PickupLocation z-depth-1 rounded-lg mt-5 pb-4 ">
          <div className="fit_in ">
            <div className="pickup_map">
            </div>
          </div>
          <div className=" pickup_content  white py-2 px-4 row m-0 p-0">
            <div className="pickup_text">

            </div>
            <div className="pickup_text_1 flex col-12 p-0">
              <span className="fa fa-map-marked-alt mr-2" />
              <span className="enable_loaction ml-1">
                Enable your location so our dispatch riders can come pickup your gadget.
                </span>
            </div>
            <div className="w-100 text-center text-danger mx-auto mt-3 small"
              style={{ visibility: this.state.msg ? "visible" : "hidden", marginBottom: "-10px" }}
            >{this.state.msg && this.state.msg + " !!!"} </div>
            <div className="w-100 text-center text-danger mx-auto mt-3 small"
              style={{ visibility: this.props.err ? "visible" : "hidden", marginBottom: "-10px" }}
            >{this.props.err && this.props.err + " !!! Please go back and try again .."} </div>
            <div className="pickup_form flex  w-100">
              <div className="left  flex">
                <img src={this.state.pickup_location.length > 8 ? vecto : vectu} width="20px" />
                <img className="vecti" className="my-1" src={vecti} />
                <img src={this.state.delivery_location.length > 8 ? vecto : vectu} width="20px" />
              </div>
              <div className="right">

                <div className="new_transaction_group mb-2 ">
                  <div className="new_transaction_label small font-weight-bold">
                    PICKUP LOCATION
                        </div>
                  <div className="new_transaction_input ">
                    <div className="bolo my-1 w-100 borde-left  ">
                      <input placeholder='Pickup Location'
                        name="pickup_location"
                        onChange={this.onClick}
                        value={this.state.pickup_location}
                        className="w-100 form-control    py-0 -none" />
                    </div>
                  </div>
                </div>

                <div className="new_transaction_group mb-3 ">
                  <div className="new_transaction_label small font-weight-bold">
                    DELIVERY ADDRESS
                        </div>
                  <div className="new_transaction_input ">
                    <div className="bolo my-1 w-100 borde-left  ">
                      <input placeholder='Delivery address'
                        name="delivery_location"
                        onChange={this.onClick}
                        value={this.state.delivery_location}
                        className="w-100 form-control    py-0 -none" />
                    </div>
                  </div>
                </div>

              </div>
            </div>


            <button className="pickup_button_3 rounded-pill text-center mt-3"
              disabled={this.props.Load}
            >
              {this.props.Load ? 'LOADING...' : 'NEXT'}
            </button>
          </div>
        </div>
      </form>

    )
  }
}
export default withRouter(PickupLocation)