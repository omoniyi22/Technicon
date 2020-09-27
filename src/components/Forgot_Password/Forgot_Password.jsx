import React, { Component } from 'react'
import { EmailTest } from '../../store/actions/Util'
import { Link } from 'react-router-dom'
let logo = require('./logo.png')

export class Forgot_Password extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      test: false,
      store_mail: ""
    }
    this.input = this.input.bind(this)
    this.test = this.test.bind(this)
    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
    !this.props.home && this.props.nav_out()
  }

  input(e) {
    this.setState({
      [e.target.name]: e.target.value,
      store_mail: this.state.email
    })
  }
  test() {
    this.setState({
      test: EmailTest(this.state.email)
    })
  }

  submit() {
    if (this.state.test) {
      this.setState({
        email: ""
      })
      this.setState({
        store_mail: this.state.email
      })
      this.props.sendTokenToEmail(this.state.email)
    }
  }

  render() {
    let { loading, sent, fail, error } = this.props
    return (
      <div className="Forgot_Password text-center">
        <div>
          <img src={logo} className="" style={{ width: "fit-content" }} />
        </div>
        <div className="FP text-center">
          {
            sent === true ?
              <div className="FP_form  z-depth-1 ">
                <div className="head w-100 text-left p-3">
                  <div className="head_text">Email Sent</div>
                  <div className="note_text">We sent a message to {this.state.store_mail} so you can pick your new password.</div>
                  <div className="small_text mt-3">Not your email address? <Link className="text-primary" onClick={() => this.props.clearError()}> Try again. </Link></div>
                </div>
                <div className="form  w-100 text-left p-3">

                </div>
                <div className="submitin  w-100 text-left p-3 border-top">
                  <div className="cosw ">
                    <Link to="/">
                      <input type="button"
                        onClick={() => {
                          this.props.history.goBack()
                        }}
                        className="rounded-pill bordered  p-0 z-depth-1 form-control btn sm-button controlled"
                        value={loading === true ? "please wait..." : "Close"}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              :
              <div className="FP_form  z-depth-1 ">
                <div className="head w-100 text-left p-3">
                  <div className="head_text"> Reset your password</div>
                  <div className="note_text">We’ll send you the info you need.</div>
                  <div className="small_text">Can’t access your email?</div>
                </div>
                <div className="form  w-100 text-left p-3">
                  {
                    this.props.loading ?
                      <div className="cosw border "><span className=" my-auto fa fa-times"
                      /></div> : <div className="cosw border "><span className=" my-auto fa fa-times"
                        onClick={() => this.setState({ email: "", test: false })}
                      /></div>
                  }
                  <input name="email" className="form-control controlled"
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChange={this.input}
                    disabled={this.props.loading}
                    // onKeyPress={this.test}
                    onKeyUp={() => {
                      this.test()
                    }}
                    onClick={() => {
                      this.props.clearError()
                      this.test()
                    }
                    }
                  />
                  <div className="text-pick">
                    {error !== "" ?
                      <div className="props flex">
                        <span className="fa fa-exclamation-circle mr-1" />
                        <span className="pb-1 sd">{error}</span>
                      </div> :
                      <>
                        {
                          this.state.test ?
                            <div className="mysta flex">
                              <span className="fa fa-check-circle mr-1" />
                              <span className="pb-1 sd">Valid Email</span>
                            </div> :
                            <div className="props flex">
                              <span className="fa fa-exclamation-circle mr-1" />
                              <span className="pb-1 sd">Valid Email</span>
                            </div>
                        }
                      </>
                    }
                  </div>
                </div>
                <div className="submitin  w-100 text-left p-3 border-top">
                  <div className="cosw ">
                    <input type="button"
                      className="rounded-pill bordered  p-0 z-depth-1 form-control btn sm-button controlled"
                      onClick={loading === false ? this.submit : () => console.log("happy")}
                      value={loading === true ? "please wait..." : "Send a password reset email"}
                    />
                  </div>
                </div>
              </div>
          }
        </div>
      </div >
    )
  }
}
