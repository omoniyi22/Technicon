import React, { Component } from 'react'
import PropType from 'prop-types'
let loader = require('./tenor.gif')
const advert = require('./advert.png')


class TransactionHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 0,
      ra_disabled: false,
      la_disabled: false
    }
  }
  static PropType = {
    all: PropType.array.isRequired,
    AllComplaint: PropType.func.isRequired
  }

  componentDidMount() {
    this.props.AllComplaint()
  }

  render() {
    let transaction = this.props.all.length !== 0 && this.props.all[this.state.position].map(item => (
      <div className="transacts_product row m-0   border-bottom border-left border-right">
        <div className="transacts_product_pix p-1 ml-1 ">
          <img className='border' />
        </div>
        <div className="transacts_product_details p-1 pl-2 ">
          <div className="transacts_product_id  mt-1">
            #ID {item.trackingCode}
          </div>
          <div className="transacts_product_name ">
            {item.device_type}
          </div>
        </div>
        <div className="transacts_product_state  ml-auto pr-2">
          <div className="transacts_product_date   mt-1">

            {/* <Moment calendar> */}
            {(item.updatedAt).slice(0, -8).replace("T", "  ").replace(/-/g, "/")}
            {/* </Moment>  */}


          </div>
          <div className="transacts_product_status  ml-auto rounded-pill border">
            <span className="fa fa-check" />
          </div>
        </div>
      </div>
    ))

    return (
      <div className="TransactionHistory">
        <div className="Advert border  text-center">
          <div className="h1"
          style={{visibility: "hidden"}}
          >ADVERT HERE</div>
        </div>
        <div className="Transactions  mt-1">
          <div className="transacts_header mx-2 py-2">
            Transaction History
                    </div>
          <div className="transacts mb-0 ">
            <div className={this.props.load ? "machine senc" : "machine"}>
              {this.props.load === true || this.props.all === undefined ? <img src={loader} className="a" /> : transaction}
            </div>



            {/* <div className="transacts_product row m-0   border-bottom border-left border-right">
              <div className="transacts_product_pix p-1 ml-1 ">
                <img className='border' />
              </div>
              <div className="transacts_product_details p-1 pl-2 ">
                <div className="transacts_product_id  mt-1">
                  #ID 02002
                                </div>
                <div className="transacts_product_name ">
                  iphone 6x
                                </div>
              </div>
              <div className="transacts_product_state  ml-auto pr-2">
                <div className="transacts_product_date   mt-1">02/03/2020</div>
                <div className="transacts_product_status  ml-auto rounded-pill border">
                  <span className="fa fa-check" />
                </div>
              </div>
            </div> */}

            {/* <div className="transacts_product row m-0   border-bottom border-left border-right">
              <div className="transacts_product_pix p-1 ml-1 ">
                <img className='border' />
              </div>
              <div className="transacts_product_details p-1 pl-2 ">
                <div className="transacts_product_id  mt-1">
                  #ID 02002
                                </div>
                <div className="transacts_product_name ">
                  iphone 6x
                                </div>
              </div>
              <div className="transacts_product_state  ml-auto pr-2">
                <div className="transacts_product_date   mt-1">02/03/2020</div>
                <div className="transacts_product_status  ml-auto rounded-pill border">
                  <span className="fa fa-check" />
                </div>
              </div>
            </div> */}

          </div>
          <div className="transacts_nav  py-2 mx-0 row mt-auto">
            <button className="transacts_nav_first fa fa-angle-double-left border px-2  py-1"
              onClick={() => {
                this.setState({
                  position: 0,
                  la_disabled: true,
                  ra_disabled: false
                })
              }}
              disabled={this.state.la_disabled || this.state.position === 0 && true}
              >
            </button>
            <button className="transacts_nav_prev fa fa-angle-left border px-2  py-1"
              onClick={() => {
                if (this.state.position === 0) {
                  this.setState({
                    position: 0,
                    la_disabled: true,
                    ra_disabled: false
                  })
                } else {
                  this.setState({
                    position: this.state.position - 1,
                    ra_disabled: false
                  })
                }
              }}
              disabled={this.state.la_disabled || this.state.position === 0 && true}
            ></button>
            <div className="transacts_nav_position  px-2  py-1 small row mx-0">
              <div className="staged">{this.props.all.length !== 0 ? this.state.position + 1 : 0} </div> of <div className="total_page">{this.props.all.length}</div>
            </div>
            <button className="transacts_nav_next fa fa-angle-right border px-2  py-1"
              disabled={this.props.all.length === 0  || this.state.ra_disabled && true}
              onClick={() => {
                if (this.state.position === (this.props.all.length - 2)) {
                  this.setState({
                    position: this.state.position + 1,
                    ra_disabled: true,
                    la_disabled: false

                  })
                } else if (this.state.position < this.props.all.length) {
                  this.setState({
                    position: this.state.position + 1,
                    la_disabled: false

                  })
                }
              }}
            ></button>
            <button className="transacts_nav_last fa fa-angle-double-right border px-2  py-1 "
              onClick={() => {
                this.setState({
                  position: this.props.all.length - 1,
                  ra_disabled: true,
                  la_disabled: false
                })
              }}
              disabled={this.props.all.length === 0  || this.state.ra_disabled && true}
            ></button>
          </div>
        </div>
      </div>
    )
  }
}
export default TransactionHistory