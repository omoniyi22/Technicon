import React, { Component } from 'react'

class SignUp extends Component{
    render(){
        return(
            <div className="Sign_up">
                <div className="Signin  py-4">
                    <div className=" text-center mt-2">
                        <div className="first_title_1">Create an account</div>
                        <div className="first_title_2 mt-1"> in 30 seconds or less</div>
                    </div>
                    
                    <form className="Login_form">
                    <div className="new_transaction_group mb-3 ">
                        <div className="new_transaction_label small font-weight-bold">
                        Username
                        </div>
                        <div className="new_transaction_input ">
                        <div className="bolo my-1 w-100 borde-left  ">
                            <input placeholder='Username'
                             className="w-100 form-control border   py-0 border-none"/>
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
                             className="w-100 form-control border    border-none"/>
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
                             className="w-100 form-control border   py-0 border-none"/>
                        </div>
                        </div>
                    </div>
           
                    <div className="new_transaction_group mb-3 ">
                        <div className="new_transaction_label small font-weight-bold">
                        Comfirm Password
                        </div>
                        <div className="new_transaction_input ">
                        <div className="bolo my-1 w-100 borde-left  ">
                            <input placeholder='Comfirm Password'
                             className="w-100 form-control border    border-none"/>
                        </div>
                        </div>
                    </div>
                        <div className="text-center forget"></div>
                        <button className="log_in_button rounded-pill mt-3 btn" >Register</button>
                    <div className="mt-2 koch text-center">
                        <span  className="ml-2">Got an account ? </span><b className="text-primary">Sign in</b>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}
export {SignUp}