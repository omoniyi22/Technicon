import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import {Link, useHistory} from 'react-router-dom'

class SignUp extends Component{
    constructor(props){
      super(props)
      this.state = {
        username:"sdkdn434",
        email: "omonit@fd.com",
        password: "wewe",
        confirm_password: "",
        show_password_one: false, 
        show_password_two: false, 
        msg: null
      }
      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
      this.show_password_one = this.show_password_one.bind(this)
      this.show_password_two = this.show_password_two.bind(this)
    }

       static PropType = {
        isAuthenticated : PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        
      }
     
      componentDidUpdate(prevProps){
        const {error, isAuthenticated} = this.props;
        if(error !== prevProps.error){
          //Check for registered error
          if(error.id === "REGISTER_FAIL"){
            this.setState({msg: error.msg})
            console.log(error)
          }else{
            this.setState({msg: null})
          }
        }
      }

      onChange(e) {
        this.setState({
          [e.target.name] : e.target.value
        })
        const {username, password, email} = this.state
        console.log( {username, password, email})
      }

    onSubmit(e){
      e.preventDefault()
       this.setState({
            msg : null
          })
      const {username, password, email, confirm_password} = this.state
      if (username === "" || password === "" || confirm_password === "" || email === ""){
          this.setState({
            msg : "Please fill all credentials"
          })
      } else if(password !== confirm_password){
          this.setState({
            msg : "Password do not match"
          })
      }
      
      else{
        const newUser = {
        username,
        password,
        email
      }

      this.props.RegisterAction(newUser);
      this.props.clearErrors()
      }
    }

    show_password_one(){
      this.setState(prev=>({
        show_password_one: !prev.show_password_one
      }))
    }
    show_password_two(){
      this.setState(prev=>({
        show_password_two : !prev.show_password_two
      }))
    }

  

    render(){
        return(
            <div className="Sign_up">
                <div className="Signin z-depth-1 mt-3  py-4 rounded-lg">
                    <div className=" text-center mt-2">
                        <div className="first_title_1">Create an account</div>
                        <div className="first_title_2 mt-1"> in 30 seconds or less</div>
                    </div>
                    { this.state.msg &&
                    <div className="reos m-0 p-0 text-center mt-2   mx-4 small " ><span className="fa fa-exclamation mr-2 "/> {this.state.msg} </div>}
                    <form className="Login_form" onSubmit={this.onSubmit} >
                    <div className="new_transaction_group mb-3 ">
                        <div className="new_transaction_label small font-weight-bold">
                        Username
                        </div>
                        <div className="new_transaction_input ">
                        <div className="bolo my-1 w-100 borde-left  ">
                            <input placeholder='Username'
                             className="w-100 form-control border   py-0 border-none"
                             onChange={this.onChange}
                             name="username"
                             value={this.state.username}
                             
                             />
                        </div>
                        </div>
                    </div>
           
                    <div className="new_transaction_group mb-3 ">
                        <div className="new_transaction_label small font-weight-bold">
                        Email Address
                        </div>
                        <div className="new_transaction_input ">
                        <div className="bolo my-1 w-100 borde-left  ">
                            <input placeholder='Email Address'
                             className="w-100 form-control border    border-none"
                             onChange={this.onChange}
                             name="email"
                             value={this.state.email}
                             type="email"
                             
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
                            <input placeholder='Password'
                             className="w-100 form-control border   py-0 border-none"
                             onChange={this.onChange}
                             name="password"
                             value={this.state.password}
                            type={`${this.state.show_password_one ? "text" : "password"}`}
                            minLength="8"
                            
                             />
                             <div className="tine ml-auto  w-auto text-right"> 
                             <span className={`fa texs ${!this.state.show_password_one ?"fa-eye" : "fa-eye-slash Sy_font"}`}
                             onClick={
                               this.show_password_one
                             }
                             ></span></div>
                        </div>
                        </div>
                    </div>
           
                    <div className="new_transaction_group mb-3 ">
                        <div className="new_transaction_label small font-weight-bold">
                        Confirm Password
                        </div>
                        <div className="new_transaction_input ">
                        <div className="bolo my-1 w-100 borde-left  ">
                            <input placeholder='Comfirm Password'
                             className="w-100 form-control border    border-none"
                             onChange={this.onChange}
                             name="confirm_password"
                             minLength="8"
                             value={this.state.confirm_password}
                              type={`${this.state.show_password_two ? "text" : "password"}`}
                             />
                             <div className="tine ml-auto  w-auto text-right"> 
                             <span className={`fa texs ${!this.state.show_password_two ?"fa-eye" : "fa-eye-slash Sy_font"}`}
                             onClick={
                               this.show_password_two
                             }
                             ></span></div>
                        </div>
                        </div>
                    </div>
                        <div className="text-center forget"></div>
                        <button className="log_in_button rounded-pill mt-3 btn" 
                        disabled={this.props.loading}
                        >{!this.props.loading ? "Register": "Loading..."}</button>
                    <div className="mt-2 koch text-center">
                        <span  className="ml-2">Got an account ? </span><b className="text-primary"><Link to="/login">Sign in</Link></b>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}
export {SignUp}