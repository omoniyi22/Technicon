import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropType from 'prop-types'
import { withRouter } from 'react-router'
const logo = require('./logo.png')


class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      email: "",
      password: "",
      msg: null,
      show_password: false
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.show_password = this.show_password.bind(this)
  }

  static PropType = {
    isAuthenticated: PropType.bool,
    error: PropType.object.isRequired,
    loginAction: PropType.func.isRequired,
    clearErrors: PropType.func.isRequired,
  }
  componentDidMount() {
    !this.props.home && this.props.nav_out()
  }
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for registered error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg })
        //console.log(error)
      } else {
        this.setState({ msg: null })
      }
    }

    if (isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.setState({
      msg: null
    })
    const { email, password } = this.state

    const newUser = {
      email,
      password
    }
    if (email === "" || password === "") {
      this.setState({
        msg: "Please fill all credentials"
      })
    } else if (password.length < 8) {
      this.setState({
        msg: "Password must be 8 characters or more"
      })
    } else {
      this.props.LoginAction(newUser, this.props.history);
      this.props.clearErrors()
    }

  }
  show_password() {
    this.setState(prev => ({
      show_password: !prev.show_password
    }))
  }

  // toggle =()=>{
  //   this.setState({
  //     modal: !this.state.modal
  //   })
  // }
  render() {

    return (
      <div className="Log_in  rounded-lg">
        <div className="Login z-depth-1   rounded-lg mt-3 pt-3 pb-3">
          <div className=" text-center mt-2">
            <img src={logo} width="70px" />
          </div>
          <div className=" text-center mt-3 Login_title">
            SIGN IN
          </div>

          {this.state.msg ?
            <div className="roes m-0 p-0 text-center mt-0  text-danger mt-1  mx-4 small " ><span className="fa  text-danger fa-exclamation mr-2 " /> {this.state.msg} </div>
            : <div className="roes m-0 p-0 text-center mt-0  text-white mt-1  mx-4 small " >. {this.state.msg} </div>}

          <form className="Login_form py-3 my-1 border-bottom" onSubmit={this.onSubmit}>


            <div className="new_transaction_group mb-3 ">
              <div className="new_transaction_label small font-weight-bold">
                Email Address
                        </div>
              <div className="new_transaction_input ">
                <div className="bolo my-1 w-100 borde-left  ">
                  <input placeholder='Email Address' type="email"
                    className="w-100 form-control border py-0 border-none"
                    name="email"
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                </div>
              </div>
            </div>

            <div className="new_transaction_group mb-3 ">
              <div className="new_transaction_label small font-weight-bold">
                Password
              </div>
              <div className="new_transaction_input ">
                <div className="bolo my-1 w-100 borde-left  ">
                  <input placeholder='Password' type="password"
                    className="w-100 form-control border border-none"
                    name="password"
                    onChange={this.onChange}
                    value={this.state.password}
                    type={`${this.state.show_password ? "text" : "password"}`}
                  />
                  <div className="tine ml-auto  w-auto text-right">
                    <span className={`fa texs ${!this.state.show_password ? "fa-eye" : "fa-eye-slash Sy_font"}`}
                      onClick={
                        this.show_password
                      }
                    ></span></div>
                </div>
              </div>
            </div>
            <button className="log_in_button rounded-pill mt-4 btn"
              disabled={this.props.loading}
            >{!this.props.loading ? "Login" : "Loading..."}</button>
            <div className="mt-2 koch text-center">
              <span className="ml-2">Do you have an account ? </span><b className="text-primary ">{!this.props.loading ? <Link className="text-primary" to="/signup">Create account</Link> : <Link>Create account</Link>}</b>
            </div>
          </form>
          <div className=" mx-auto" style={{width: "fit-content", fontSize: "14px"}}>
              <b className="text-primary ">{!this.props.loading ? <Link className="text-primary" to="/forgot_password">Forgot password ?</Link> : <Link>Forgot password ?</Link>}</b>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(LogIn)