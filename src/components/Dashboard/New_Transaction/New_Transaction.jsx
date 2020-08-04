import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { number } from 'prop-types'

class NewTransaction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: "",
      phone_number: "",
      device_type: "",
      email: "",
      device_brand: "",
      dispatch_rider: true,
      msg: null,
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



  onCheck(e) {
    this.setState({
      dispatch_rider: !this.state.dispatch_rider
    })
  }

  onSubmit(e) {


    
    e.preventDefault()
    let {
      description,
      phone_number,
      device_type,
      email,
      device_brand,
      dispatch_rider
    } = this.state

    if (
      description.length > 1 &&
      phone_number.length > 1 &&
      device_type.length > 1 &&
      email.length > 1 &&
      device_brand.length > 1
    ) {
      if (this.state.dispatch_rider) {
        this.props.transactStart({
          description,
          phone_number,
          device_type,
          email,
          device_brand,
          dispatch_rider
        })
        this.props.history.push('/pick-up')
      }
      else {
          this.props.transactStart({
          description,
          phone_number,
          device_type,
          email,
          device_brand,
          dispatch_rider
        })
        this.props.history.push('/office-address')
      }
       this.setState({
      description: "",
      phone_number: "",
      device_type: "",
      email: "",
      device_brand: "",
      dispatch_rider: true,
      msg: null

    })
    } else {
      this.setState({
        msg: "Pls fill in all the fields"
      })
    }

  
  }

  render() {
    const {
      description,
      phone_number,
      device_type,
      email,
      device_brand,
      dispatch_rider
    } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <div className="new_transaction_header font-weight-bold px-1 py-3  ">New Transaction</div>
        <div className="NewTransaction ">
          <div className="new_transaction_form form px-1 ">
            <div className="new_transaction_group mb-3 ">
              <div className="new_transaction_label small font-weight-bold">
                COMPLAINT
                        </div>
              <div className="new_transaction_input ">
                <div className="bolo my-1 w-100 borde-left ">
                  <input placeholder='What is wrong with your device'
                    className="w-100 form-control border   py-0 border-none"
                    name="description"
                    value={this.state.description}
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
                      type = {number}
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
                      <option >Phone</option>
                      <option >Laptop</option>
                      <option >Desktop</option>
                      <option >Accesories</option>
                      <option >Tablet</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="new_transaction_group mb-3 ">
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
                checked={this.state.dispatch_rider}
                onChange={() => {
                  this.setState({
                    dispatch_rider: true
                  })
                }
                } />
              <label class="custom-control-label" for="defaultGroupExample2">I need a dispatch rider</label>
            </div>


            <div class="custom-control custom-radio">
              <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios" onChange={() => {
                this.setState({
                  dispatch_rider: false
                })
              }
              } />
              <label class="custom-control-label" for="defaultGroupExample3">I will bring my device to the technical office myself</label>
            </div>

            {`${description}`}
            {`${phone_number}`}
            {`${device_brand}`}
            {`${email}`}
            {`${device_type}`}


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