import React, { Component } from 'react'
const map =require('./map.png')


class OfficeAddress extends Component{
    render(){
        return(
            <div className="OfficeLocation ">
                <div className="fit_in ">
                    <div className="pickup_map">

                    </div>
                </div>
                <div className="pickup_content  white py-2 px-4 row m-0 p-0">
                    <div className="pickup_text">

                    </div>
                    <div className="pickup_text_1 flex col-12 p-0">
                        <span className="fa fa-map-marker-alt mr-2"/>
                        <span className="enable_loaction ml-1">
                       Our office location is No 10, Sanders, University of Ibadan.
                        </span>
                    </div>

                    <div className="pickup_form flex  w-100">
                      
                    </div>
                    
                    <div className="pickup_button_3 rounded-pill text-center mt-3">
                        SEND LOCATION TO MAIL
                    </div>

                    <div className="down_button rounded-pill text-center">
                        NEXT
                    </div>
                </div>
            </div>
        )
    }
}
export {OfficeAddress}