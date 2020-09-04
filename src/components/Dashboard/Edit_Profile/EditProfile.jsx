import React, { Component } from 'react'
// import {useHistory} from 'react-router'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { createBrowserHistory } from 'history'
import { countWords } from './util'
import { white } from 'color-name'
const pix = require('./profile.jpg')
const cake = require('./cake.png')
class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _id: props.profile.id ? props.profile.id : "",
      email: props.profile.email ? props.profile.email : "",
      address: props.profile.address ? props.profile.address : "",
      name: props.profile.name ? props.profile.name : "",
      username: props.profile.username ? props.profile.username : "",
      phone_number: props.profile.phone_number ? props.profile.phone_number : "",
      location: props.profile.address ? props.profile.address : "",
      birthday: props.profile.birthday ? props.profile.birthday : "",
      changes: false,
      msg: "",
      file: "",
      filename: "",
      p_pix: null

    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.clearAll = this.clearAll.bind(this)
    this.onPixed = this.onPixed.bind(this)
    // this.onFileChange = this.onFileChange.bind(this)
  }
  componentDidMount(){
    console.log("this is id", this.props.profile)
  }
  onPixed(e) {
    if (e.target.files.length > 0)
      this.setState({
        changes: true,
        p_pix: e.target.files[0],
      })
    console.log("done", this.state.p_pix)
  }
  // onFileChange(e) {
  //   this.setState({
  //     p_pix: e.target.files[0]
  //   })
  //   console.log(e.target.files[0])
  // }
  clearAll() {
    this.props.clearErr()
    this.setState({
      msg: null
    })
  }
  onChange(e) {
    this.props.clearErr()
    this.setState({
      changes: true,
      [e.target.name]: e.target.value,
      msg: null,
    })
  }
  onSubmit(e) {
    // if(file !== null){
    //   const formData = new FormData()
    // formData.append("file", file)

    // try {
    //   const res = awt axios.patch('/upload', formData, {
    //     headers:{
    //       "Content-Type" : "multipart/form-data"
    //     }
    //   })
    // } catch (error) {

    // }
    // }

    e.preventDefault()
    let {
      email,
      address,
      name,
      username,
      phone_number,
      location,
      birthday,
      changes,
      file

    } = this.state
    let dataSUmited = []
    let num = phone_number > 0 && phone_number.match(/^[0-9]+$/)
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailTest = re.test(email)

    if (changes) {
      if (
        email.length < 1 ||
        birthday.length < 1 ||
        phone_number.length < 1 ||
        location.length < 1 ||
        name.length < 1
      ) {
        this.setState({
          msg: "Pls fill in all the fields"
        })
      } else if (countWords(name) < 2) {
        this.setState({
          msg: "Pls fill in your first and last name"
        })
      } else if (phone_number.match(/^[0-9]+$/) === null) {
        this.setState({
          msg: "Contact must contain only number"
        })
      } else if (phone_number.length < 11 || phone_number.length > 11) {
        this.setState({
          msg: "Contact must contain 11 digit only"
        })
      } else if (emailTest === false) {
        this.setState({
          msg: "Pls fill in a valid email address"
        })
      } else if (location.length < 8) {
        this.setState({
          msg: "Location must contain atleat 8 characters"
        })
      } else {
        if (this.state.p_pix === null)
          this.props.editProfile({
            email,
            name,
            phone_number,
            address: location,
            birthday
          })
        else
          this.props.editProfile({
            email,
            name,
            phone_number,
            address: location,
            birthday
          }, this.props.id,  this.state.p_pix)
      }
      if (this.props.success === true) {
        this.setState({
          changes: false
        })
      }
    } else {
      this.setState({
        msg: "Update has not been made"
      })
    }
  }



  render() {
    let { msg, changes } = this.state
    let { timer, success, err, message } = this.props

    return (
      <form className="EditProfile  mt-2 mt-md-3" onSubmit={this.onSubmit}>
        {timer && <div className="ariMeji  p-4 text-center mb-4npm i react-bootstrap-sweetalert">
          {<div className="temiyemi  p-5 m-auto">
            <Loader
              type="Oval"
              color="#53A3D1"
              height={30}
              width={30}
              secondaryColor={white}
            />
            <div className="ml-2 mt-3 mb-5">Updating...</div>
          </div>}
        </div>

        }

        <>
          {msg &&
            <div className="ariMeji  p-4 text-center mb-5"
              onClick={this.clearAll}
            >
              <div className="temiyemi  p-5 m-auto">

                <span className="fa desq fa-exclamation-triangle"></span>
                <div className=" mt-3 mb-5 text-danger">{message ? message : msg}</div>
              </div></div>
          }
        </>

        <>
          {err &&
            <div className="ariMeji  p-4 text-center mb-5"
              onClick={this.clearAll}
            >
              <div className="temiyemi  p-5 m-auto">

                <span className="fa desq fa-exclamation-triangle"></span>
                <div className=" mt-3 mb-5 text-danger">{message ? message : msg}</div>
              </div></div>
          }
        </>

        <>
          {success &&
            <div className="ariMeji  p-4 text-center mb-5"
              onClick={() => { this.props.clearErr() }}
            >
              <div className="temiyemi  p-5 m-auto">

                <span className="fa desq fa-check-circle text-primary"></span>
                <div className=" mt-3 mb-5 text-primary">{message ? message : msg}</div>
              </div></div>
          }
        </>

        <div className=" EDIT_PROFILE  ">
          <div className="EDIT_PROFILE_A"><span className="fa fa-arrow-left mr-1"
            onClick={() => createBrowserHistory().back()}>
          </span>  Edit Profile </div>
          <button className="EDIT_PROFILE_B  text-right rounded-pill"

          >SAVE</button>
        </div>
        <div className="edit_pix  ">
          <div className="mr_a  border-top border-bottom"
            style={{ backgroundImage: `url(${this.props.picture})` }}
          >
          </div>
          <div className="pix_view  border rounded-pill z-depth-1">
            <img
              src={`${
                this.state.p_pix !== null ?
                  URL.createObjectURL(this.state.p_pix) :  this.props.profile.avatar
                }`}
              className="rounded-pill" alt="" />
          </div>
          <div className="plus_pix  white rounded-pill pb-0">
            <label for="file" type="file" className="fa fa-plus  rounded-pill   z-depth-3" />
          </div>
          <input type="file" id="file" accept="image/*"
            onChange={this.onPixed} maxLength="1"
          />

        </div>

        <div className="profile_form  ">
          <div className="profile_input  px-1">
            <label className=" mb-1">Full Name</label>
            <div className="edit_input row mx-0 md-form my-0">
              <div className="fa fa-user"></div>
              <div className=" form_input ">
                <input className="form-control py-0 form-control-sm border-bottom my-0" placeholder="Full Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="fa fa-pen" />
            </div>
          </div>


          <div className="profile_input  px-1">
            <label className=" mb-1">Email Address</label>
            <div className="edit_input row mx-0 md-form my-0">
              <div className="fa fa-envelope"></div>
              <div className=" form_input Email ">
                <input className="form-control py-0 form-control-sm border-bottom my-0" placeholder="Email Address"
                  name="email"
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </div>
              <div className="fa fa-pen" />
            </div>
          </div>


          <div className="profile_input  px-1">
            <label className=" mb-1">Phone Number</label>
            <div className="edit_input row mx-0 md-form my-0">
              <div className="fa fa-phone-alt"></div>
              <div className=" form_input Phone ">
                <input className="form-control py-0 form-control-sm border-bottom my-0" placeholder="Phone Number"
                  onChange={this.onChange}
                  name="phone_number"
                  value={this.state.phone_number}
                />
              </div>
              <div className="fa fa-pen" />
            </div>
          </div>


          <div className="profile_input  px-1">
            <label className=" mb-1">Location</label>
            <div className="edit_input row mx-0 md-form my-0">
              <div className="fa fa-map-marker-alt"></div>
              <div className=" form_input Location">
                <input className="form-control py-0 form-control-sm border-bottom my-0" placeholder="Location"
                  onChange={this.onChange}
                  name="location"
                  value={this.state.location}
                />
              </div>
              <div className="fa fa-pen" />
            </div>
          </div>


          <div className="profile_input  px-1">
            <label className=" mb-1">Birthday</label>
            <div className="edit_input row mx-0 md-form my-0">
              <div className="fa dodl">
                {/* <img src={cake}/> */}
              </div>
              <div className=" form_input ">
                <input className="form-control py-0 form-control-sm border-bottom my-0" placeholder="Birthday"
                  type="date"
                  name="birthday"
                  onChange={this.onChange}
                  value={this.state.birthday}
                />
              </div>
              <div className="fa fa-pen" />
            </div>

          </div>


        </div>

      </form>
    )
  }
}
export default EditProfile