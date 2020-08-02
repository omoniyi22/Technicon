import React, { Component } from 'react'
// import {useHistory} from 'react-router'
import {createBrowserHistory} from 'history'
const pix = require('./profile.jpg')

class EditProfile extends Component{
  constructor(props){
  super(props)
  }
    render(){
        return(
            <form className="EditProfile  mt-2 mt-md-3 ">

                <div className=" EDIT_PROFILE  ">
                    <div className="EDIT_PROFILE_A"><span className="fa fa-arrow-left mr-1"
                    onClick={()=>createBrowserHistory().back()}
                    />  Edit Profile </div>
                    <div className="EDIT_PROFILE_B text-right rounded-pill">SAVE</div>
                </div>
                <div className="edit_pix  ">
                    <div className="mr_a  border-top border-bottom">
                    </div>

                    <div className="pix_view  border rounded-pill z-depth-1">
                        <img src={pix} className="rounded-pill" alt=""/>
                    </div>
                    <div className="plus_pix  white rounded-pill ">
                        <span  className="fa fa-plus   rounded-pill   z-depth-3"/>
                    </div>
                </div>
               

                <div className="profile_form  ">                   
                    <div className="profile_input  px-1">
                        <label className=" mb-1">Full Name</label>
                        <div className="edit_input row mx-0 md-form my-0">
                            <div className="fa fa-user"></div>
                            <div className=" form_input ">
                                <input className="form-control py-0 form-control-sm border-bottom my-0" placeholder="Full Name"/>
                            </div>
                            <div className="fa fa-pen"/>
                        </div>
                    </div>

                                
                    <div className="profile_input  px-1">
                        <label className=" mb-1">Email Address</label>
                        <div className="edit_input row mx-0 md-form my-0">
                            <div className="fa fa-envelope"></div>
                            <div className=" form_input Email ">
                                <input className="form-control py-0 form-control-sm border-bottom my-0" placeholder="Email Address"/>
                            </div>
                            <div className="fa fa-pen"/>
                        </div>
                    </div>


                    <div className="profile_input  px-1">
                        <label className=" mb-1">Phone Number</label>
                        <div className="edit_input row mx-0 md-form my-0">
                            <div className="fa fa-phone-alt"></div>
                            <div className=" form_input Phone ">
                                <input className="form-control py-0 form-control-sm border-bottom my-0" placeholder="Phone Number"/>
                            </div>
                            <div className="fa fa-pen"/>
                        </div>
                    </div>


                    <div className="profile_input  px-1">
                        <label className=" mb-1">Location</label>
                        <div className="edit_input row mx-0 md-form my-0">
                            <div className="fa fa-map-marker-alt"></div>
                            <div className=" form_input Location">
                                <input className="form-control py-0 form-control-sm border-bottom my-0" placeholder="Location"/>
                            </div>
                            <div className="fa fa-pen"/>
                        </div>
                    </div>


                    <div className="profile_input  px-1">
                        <label className=" mb-1">Birthday</label>
                        <div className="edit_input row mx-0 md-form my-0">
                            <div className="fa fa-user"></div>
                            <div className=" form_input ">
                                <input className="form-control py-0 form-control-sm border-bottom my-0" placeholder="Birthday"/>
                            </div>
                            <div className="fa fa-pen"/>
                        </div>
                    </div>                    
                </div>

            </form>
        )
    }
}
export {EditProfile}