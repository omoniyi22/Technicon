import React, { Component } from 'react'

const logo = require('./icons/logo.png')
const legal = require('./icons/legal.png')
const login = require('./icons/login.png')
const share = require('./icons/share.png')
const about = require('./icons/about.png')
const signup = require('./icons/signup.png')
const notify = require('./icons/notify.png')



class Navbar extends Component{
    render(){
        return(
            <div className="nav_bar w-100 border-bottom">
                <nav className="Nav_Bar w-100  pl-3 text-white flex">
                    
                    <div className="nav_logo ">
                        <img src={logo} width="77px" height="43px"  className="mt-3"/>
                    </div>
                    <div className="nav_items ml-auto flex">
                    
                    <div className="cog ">
                        <div className="nav_link pb-0  mt-2 text-center">
                            <img className="nav_link_icon " width="22.8px" src={about}/>
                            <div className=" mt-1 nav_text">About</div>
                        </div>
                    </div> 

                    <div className="cog ">
                        <div className="nav_link pb-0  mt-2 text-center">
                        <span className="fa fa-share-alt nav_fa"/>
                            <div className=" mt-1 nav_text ">Share</div>
                        </div>
                    </div>  

                   

                    <div className="cog ">
                        <div className="nav_link pb-0  mt-2 text-center">
                        <img className="nav_link_icon " width="17px" src={legal}/>
                            <div className=" mt-1 nav_text notified">Legal</div>
                        </div>
                    </div> 

                    <div className="cog ">
                        <div className="nav_link pb-0  mt-2 text-center">
                            <img className="nav_link_icon " width="20.5px" src={notify}/>
                            <div className=" mt-1 nav_text notify">Notification</div>
                        </div>
                    </div> 

                    <div className="cog ">
                        <div className="nav_link pb-0  mt-2 text-center">
                            <img className="nav_link_icon " width="20px" src={login}/>
                            <div className=" mt-1 nav_text ">Log Out</div>
                        </div>
                    </div> 

                   
                 

                    <div className="border-bottom cog COG_ME ml-3 mr-2 ">
                        <div className="nav_link border-bottom pb-0  mt-2 text-center">
                            <span className="fa fa-user-alt nav_fa"/>
                            <div className=" mt-1 nav_text ">Me</div>
                        </div>
                    </div> 

                    </div>
                </nav>
            </div>
        )
    }
}
export {Navbar}