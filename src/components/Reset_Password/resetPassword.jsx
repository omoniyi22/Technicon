import React, { Component } from 'react'
import { TestPassword } from '../../store/actions/Util'
import { Link } from 'react-router-dom'
let logo = require('./logo.png')
let EmailTest = TestPassword

export class ResetPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      test: "Enter Password",
      store_mail: "",
      re_email: ""
    }
    this.input = this.input.bind(this)
    this.test = this.test.bind(this)
    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
    let { id, token } = this.props.match.params
    if (id === "" && token === "") {
      window.location = "/"
    } else {
      this.props.SetToken(id, token)
    }

    console.log(id, token)
    !this.props.home && this.props.nav_out()
  }

  input(e) {
    this.setState({
      [e.target.name]: e.target.value,
      store_mail: this.state.email
    })
    this.test()
  }
  test() {
    this.setState({
      test: EmailTest(this.state.email, this.state.re_email)
    })
  }

  submit() {
    if (this.state.test === true) {
      this.props.sendTokenToEmail(this.state.email)
      this.setState({
        email: "",
        re_email: ""
      })
      this.setState({
        store_mail: this.state.email
      })
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
                <div className="head w-100 text-left p-3 flex pt-5 ">
                  <div className="fa fa-lock z-depth-1" />
                  <div className="heads_text">Password has been changed successfully</div>
                  {/* <div className="small_text mt-3">Not your email address? <Link className="text-primary" onClick={() => this.props.clearError()}> Try again. </Link></div> */}
                </div>

                <div className="submitin  w-100 text-left p-3 border-top">
                  <div className="cosw ">
                    <Link to="/">
                    <input type="button"
                        className="rounded-pill bordered  p-0 z-depth-1 form-control btn sm-button controlled"
                        value={loading === true ? "please wait..." : "Close"}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              :
              <div className="FP_form  z-depth-1 ">
                <div className="head w-100 text-center p-3">
                  <div className="head_text"> Pick a new password</div>
                </div>
                <div className="form  w-100 text-left p-3">
                  {
                    this.props.loading ?
                      <div className="cosw border "><span className=" my-auto fa fa-times"
                      /></div> : <div className="cosw border "><span className=" my-auto fa fa-times"
                        onClick={() => {
                          this.setState({ email: "", test: TestPassword(this.state.email, this.state.re_email) })

                        }}
                      /></div>
                  }
                  <input name="email"
                    placeholder="New password"
                    className="form-control controlled"
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
                  <div className="" style={{ marginTop: "20px" }}></div>
                  {
                    this.props.loading ?
                      <div className="cosw border "><span className=" my-auto fa fa-times"
                      /></div> : <div className="cosw border "><span className=" my-auto fa fa-times"
                        onClick={() => {
                          this.setState({ re_email: "", test: TestPassword(this.state.email, this.state.re_email) })
                        }}
                      /></div>
                  }
                  <input name="re_email"
                    placeholder="Re-type new password"
                    className="form-control controlled"
                    value={this.state.re_email}
                    onChange={this.input}
                    disabled={this.props.loading}
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
                          this.state.test === true ?
                            <div className="mysta flex">
                              <span className="fa fa-check-circle mr-1" />
                              <span className="pb-1 sd">Valid Password</span>
                            </div> :
                            <div className="props flex">
                              <span className="fa fa-exclamation-circle mr-1" />
                              <span className="pb-1 sd">{this.state.test}</span>
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
                      value={loading === true ? "please wait..." : "change password"}
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
export default ResetPassword