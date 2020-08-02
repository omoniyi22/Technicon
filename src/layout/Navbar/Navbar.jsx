import React, { Component } from 'react'
import {Link} from 'react-router-dom'
const logo = require('./icons/logo.png')
const legal = require('./icons/legal.png')
const login = require('./icons/login.png')
const share = require('./icons/share.png')
const about = require('./icons/about.png')
const signup = require('./icons/signup.png')
const notify = require('./icons/notify.png')



class Navbar extends Component{
  constructor(props){
    super(props)
  }
    render(){
      let {username} = this.props.auth
      let{logOutAction} = this.props
      function AuthNav(){
        return(
          <>
          <div className="cog ">
                       <Link to="/Login" className="limk ">

                        <div className="nav_link pb-0  mt-2 text-center">
                        <span className="fa fa-sign-in-alt nav_fa"/>
                            <div className=" mt-1 nav_text ">Login</div>
                        </div>
                        </Link>
                    </div>  
                    <div className="cog ">
                       <Link to="/signup" className="limk ">
                        <div className="nav_link pb-0  mt-2 text-center">
                        <span className="fa fa-user-plus nav_fa"/>
                            <div className=" mt-1 nav_text ">Sign Up</div>
                        </div>
                        </Link>
                    </div>
                    </> 
        )
      }

      function UnAuthNav(){
        return(
          <>
          <div className="cog ">
                       <Link to="/notification" className="limk ">

                        <div className="nav_link pb-0  mt-2 text-center">
                            <img className="nav_link_icon " width="20.5px" src={notify}/>
                            <div className=" mt-1 nav_text notify">Notification</div>
                        </div>
                        </Link>
                    </div> 

                    <div className="cog ">
                       <Link  className="limk ">
                      
                        <div className="nav_link pb-0  mt-2 text-center"
                              onClick={logOutAction}
                        >
                            <img className="nav_link_icon " width="20px" src={login}/>
                            <div className=" mt-1 nav_text ">Log Out</div>
                        </div>
                        </Link>
                    </div> 

                   
                 

                    <div className=" cog COG_ME ml-3 mr-2 ">
                       <Link to="/dashboard" className="limk ">
                        <div className="nav_link  pb-0  mt-2 text-center">
                            <span className="fa fa-user-alt nav_fa"/>
                            <div className=" mt-1 nav_text ">{username ? username : "No User"}</div>
                        </div>
                        </Link>
                    </div> 

            

          </>
        )
      }

        return(
            <div className="nav_bar w-100 z-depth-1 ">
                <nav className="Nav_Bar w-100  pl-3 pr-2  flex">
                    
                    <div className="nav_logo ">
                       <Link to="/" className="limk ">
                        <img src={logo} width="77px" height="43px"  className="mt-3 pb-1"/>
                    </Link>
                    </div>
                    <div className="nav_items ml-auto flex">
                    
                    <div className="cog ">
                      <Link to="/about" className="limk ">
                        <div className="nav_link pb-0  mt-2 text-center">
                            <img className="nav_link_icon " width="22.8px" src={about}/>
                            <div className=" mt-1 nav_text">About</div>
                        </div>
                        </Link>
                    </div> 

                    <div className="cog ">
                       <Link to="/share" className="limk ">
                        <div className="nav_link pb-0  mt-2 text-center">
                        <span className="fa fa-share-alt nav_fa"/>
                            <div className=" mt-1 nav_text ">Share</div>
                        </div>
                        </Link>
                    </div>  
                     

                    <div className="cog ">
                       <Link to="/legal" className="limk ">
                        <div className="nav_link pb-0  mt-2 text-center">
                        <img className="nav_link_icon " width="17px" src={legal}/>
                            <div className=" mt-1 nav_text notified">Legal</div>
                        </div>
                        </Link>
                    </div> 

                    {this.props.auth.isAuthenticated ? UnAuthNav() : AuthNav()}

                    </div>
                </nav>
            </div>
        )
    }
}
export {Navbar}