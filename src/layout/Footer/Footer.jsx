import React, { Component } from 'react'

class Footer extends Component{
    render(){
        return(
            <div  className=" Footer  mt-5">
                <footer className="footer px-2 px-md-4 py-4">
                    <div className="social text-center">
                        <div className="Join font-weight-bold mb-2">
                            Technion.com
                        </div>
                        <div className="socials py-0 py-2 border-top border-bottom flex">
                            <div className="social-icon  flex ">
                                <div className="mt-1 mr-3 no_go_show">Follow us</div>
                                <div className="">
                                    <div className="fab fa-facebook p-2 mx-1 rounded-pill border"/>
                                    <div className="fab fa-twitter p-2 mx-1 rounded-pill border"/>
                                    <div className="fab fa-whatsapp p-2 mx-1 rounded-pill border"/>
                                </div>
                            </div>
                            <div className="social-icon flex ml-auto no_go_show">
                                <div className="mt-1 mr-3 ">Mobile App</div>
                                <div className="">
                                    <div className="fab fa-apple p-2 mx-1 rounded-pill border"/>
                                    <div className="fab fa-android p-2 mx-1 rounded-pill border"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_one text-center pt-3">
                        © Copyright 2020 Technicon  all right reserved
                    </div>
                </footer>
            </div>
        )
    }
}
export {Footer}