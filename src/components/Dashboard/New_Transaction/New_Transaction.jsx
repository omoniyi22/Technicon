import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { number } from 'prop-types'

class NewTransaction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      complaint: "",
      phone_number: "",
      device_type: "",
      email: "",
      device_brand: "",
      dispatchRider: true,
      device_name: "",
      msg: "",
      ButtonReady: true
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  Clear() {
    this.setState({
      msg: ""
    })
  }

  onCheck(e) {
    this.setState({
      dispatchRider: !this.state.dispatchRider
    })
  }

  onSubmit(e) {
    e.preventDefault()

    let {
      complaint,
      phone_number,
      device_type,
      email,
      device_brand,
      dispatchRider,
      device_name
    } = this.state

    let num = phone_number.match(/^[0-9]+$/)
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailTest = re.test(email)

    if (
      complaint.length < 1 ||
      phone_number.length < 1 ||
      device_type.length < 1 ||
      email.length < 1 ||
      device_brand.length < 1,
      device_name.length < 1
    ) {
      this.setState({
        msg: "Pls fill in all the fields"
      })
    } else if (phone_number.length < 11 || phone_number.length > 11) {
      this.setState({
        msg: "Contact must 11 digit"
      })
    } else if (num === null) {
      this.setState({
        msg: "Contact must contain only number"
      })
    } else if (emailTest === false) {
      this.setState({
        msg: "Pls fill in a valid email address"
      })
    }
    else {
      if (this.state.dispatchRider) {
        this.props.transactStart({
          complaint,
          phone_number,
          device_type,
          email,
          device_brand,
          dispatchRider,
          device_name
        })
        this.props.history.push('/pick-up')
      }
      else {
        this.props.transactStart({
          complaint,
          phone_number,
          device_type,
          email,
          device_brand,
          dispatchRider,
          device_name
        })
        this.props.history.push('/office-address')
      }
      this.setState({
        complaint: "",
        phone_number: "",
        device_type: "",
        email: "",
        device_brand: "",
        device_name: "",
        dispatchRider: true,
        msg: null
      })
    }


  }

  render() {
    const {
      complaint,
      phone_number,
      device_type,
      email,
      device_brand,
      dispatchRider,
      device_name
    } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <div className="new_transaction_header font-weight-bold px-1 py-3 col-12  flex">New Transaction
        {this.state.msg && <div className="Error  ml-auto mr-2 mt-1 small  rounded-pill pl-2 py-1  lighten-2 text-danger">{this.state.msg} !!!
         <span
              onClick={
                this.Clear.bind(this)
              }
            /></div>}
        </div>
        <div className="NewTransaction ">
          <div className="new_transaction_form form px-1  ">
            <div className="new_transaction_group mb-3 ">
              <div className="new_transaction_label small font-weight-bold">
                COMPLAINT
              </div>
              <div className="new_transaction_input ">
                <div className="bolo my-1 w-100 borde-left ">
                  <input placeholder='What is wrong with your device'
                    className="w-100 form-control border   py-0 border-none"
                    name="complaint"
                    value={this.state.complaint}
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>

            <div className="row mx-0 px-0">
              <div className="new_transaction_group mb-3 col-6  px-0 mx-0 ">
                <div className="new_transaction_label small font-weight-bold">
                  CONTACT
                        </div>
                <div className="new_transaction_input ">
                  <div className="bolo my-1 w-100 border-right ">
                    <input placeholder='Phone number'
                      className="w-100 form-control  py-0 border-none"
                      name="phone_number"
                      value={this.state.phone_number}
                      onChange={this.onChange}
                      type={number}
                    />
                  </div>
                </div>
              </div>

              <div className="new_transaction_group mb-3 col-6 mx-0 px-0">
                <div className="new_transaction_label small font-weight-bold">
                  REPAIR
                </div>
                <div className="new_transaction_input ">
                  <div className="bolo my-1 w-100  ">
                    <select class="w-100 form-control  py-0 border-none"
                      onChange={this.onChange}
                      value={this.state.device_type}
                      name="device_type"
                    >
                      <option >Select Device Type</option>
                      <option >Laptop</option>
                      <option >Desktop</option>
                      <option >Tablet</option>
                      <option >Accesories</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mx-0 px-0">

              <div className="new_transaction_group mb-3 col-6 px-0 mx-0 pr-1">
                <div className="new_transaction_label small font-weight-bold">
                  EMAIL ADDRESS
                        </div>
                <div className="new_transaction_input ">
                  <div className="bolo my-1 w-100 borde-left  ">
                    <input placeholder='Email Address'
                      className="w-100 form-control border   py-0 border-none"
                      onChange={this.onChange}
                      value={this.state.email}
                      name="email"
                    />
                  </div>
                </div>
              </div>
              <div className="new_transaction_group mb-3 col-6 px-0 mx-0 ">
                <div className="new_transaction_label small font-weight-bold">
                  DEVICE NAME
                        </div>
                <div className="new_transaction_input ">
                  <div className="bolo my-1 w-100 borde-left  ">
                    <input placeholder='Device Name'
                      className="w-100 form-control border   py-0 border-none"
                      onChange={this.onChange}
                      value={this.state.device_name}
                      name="device_name"
                    />
                  </div>
                </div>
              </div>
            </div>


            <div className="new_transaction_group mb-3 ">
              <div className="new_transaction_label small font-weight-bold">
                BRAND
                        </div>
              <div className="new_transaction_input ">
                <div className="bolo my-1 w-100 borde-left  ">
                  <input placeholder='Enter Your Device Brand'
                    className="w-100 form-control border   py-0 border-none"
                    onChange={this.onChange}
                    value={this.state.device_brand}
                    name="device_brand"
                  />
                </div>
              </div>
            </div>



            <div class="custom-control custom-radio">
              <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios"
                checked={this.state.dispatchRider}
                onChange={() => {
                  this.setState({
                    dispatchRider: true
                  })
                }
                } />
              <label class="custom-control-label" for="defaultGroupExample2">I need a dispatch rider</label>
            </div>


            <div class="custom-control custom-radio">
              <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios" onChange={() => {
                this.setState({
                  dispatchRider: false
                })
              }
              } />
              <label class="custom-control-label" for="defaultGroupExample3">I will bring my device to the technical office myself</label>
            </div>



            <div className="new_transaction_button  mt-4 mt-md-5">
              <button
                className=" btn z-depth-0 rounded-pill"

              > Next</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}
export default withRouter(NewTransaction)