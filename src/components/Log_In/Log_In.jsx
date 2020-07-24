import React, { Component } from 'react'
const logo = require('./logo.png')

class LogIn extends Component{
    render(){
        return(
            <div className="Log_in z-depth-1 rounded-lg">
                <div className="Login  pt-3 pb-5">
                    <div className=" text-center mt-2">
                        <img src={logo} width="70px"/>
                    </div>
                    <div className=" text-center mt-4 Login_title">
                        SIGN IN
                    </div>
                    <form className="Login_form">
                
                    <div className="new_transaction_group mb-3 ">
                        <div className="new_transaction_label small font-weight-bold">
                        Email Address
                        </div>
                        <div className="new_transaction_input ">
                        <div className="bolo my-1 w-100 borde-left  ">
                            <input placeholder='Email Address'
                             className="w-100 form-control border   py-0 border-none"/>
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
                             className="w-100 form-control border    border-none"/>
                        </div>
                        </div>
                    </div>
                        <div className="text-center forget"> Password Forget ?</div>
                        <button className="log_in_button rounded-pill mt-4 btn" >Login</button>
                    <div className="mt-2 koch text-center">
                        <span  className="ml-2">Do you have an account ? </span><b className="text-primary">Create account</b>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}
export {LogIn}