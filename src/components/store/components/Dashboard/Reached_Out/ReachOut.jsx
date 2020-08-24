import React, { Component } from 'react'

class Reach_Out_ID extends Component {
    render(){
        return(
            <div className="ReachOut"> 
                <div className="w-100 I_D text-center px-5">
                    Your ID number is #0203
                </div>
                <div className="w-100 thank_u text-center" >
                    Thank You for reaching out to technicon. We will reach to you shortly
                </div>
                
                <div className="thank_button  col-12 w-100 mx-0 px-2 text-center rounded-pill">
                    <div className="w-100 rounded-pill">
                    DONE
                    </div>
                </div>
                
            </div>
        )
    }
}
export {Reach_Out_ID}