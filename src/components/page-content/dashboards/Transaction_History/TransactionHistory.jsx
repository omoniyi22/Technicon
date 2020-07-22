import React, { Component } from 'react'

class TransactionHistory extends Component{
    render(){
        return(
            <div className="TransactionHistory">
                <div className="Advert border  text-center "> 
                    <div className="h1">ADVERT HERE</div>
                </div>
                <div className="Transactions  mt-1"> 
                    <div className="transacts_header mx-2 py-2">
                        Transaction History
                    </div>
                <div className="transacts mb-0 ">
                <div className="transacts_product row m-0   border-bottom border-left border-right">
                            <div className="transacts_product_pix p-1 ml-1 ">
                                <img className='border'/>
                            </div>
                            <div className="transacts_product_details p-1 pl-2 ">
                                <div className="transacts_product_id  mt-1">
                                #ID 02002
                                </div>
                                <div className="transacts_product_name ">
                                iphone 6x
                                </div>
                            </div>
                            <div className="transacts_product_state  ml-auto pr-2">
                                <div className="transacts_product_date   mt-1">02/03/2020</div>
                                <div className="transacts_product_status  ml-auto rounded-pill border">
                                    <span className="fa fa-check"/>
                                </div>
                            </div>
                        </div>

                        <div className="transacts_product row m-0   border-bottom border-left border-right">
                            <div className="transacts_product_pix p-1 ml-1 ">
                                <img className='border'/>
                            </div>
                            <div className="transacts_product_details p-1 pl-2 ">
                                <div className="transacts_product_id  mt-1">
                                #ID 02002
                                </div>
                                <div className="transacts_product_name ">
                                iphone 6x
                                </div>
                            </div>
                            <div className="transacts_product_state  ml-auto pr-2">
                                <div className="transacts_product_date   mt-1">02/03/2020</div>
                                <div className="transacts_product_status  ml-auto rounded-pill border">
                                    <span className="fa fa-check"/>
                                </div>
                            </div>
                        </div>

                        <div className="transacts_product row m-0   border-bottom border-left border-right">
                            <div className="transacts_product_pix p-1 ml-1 ">
                                <img className='border'/>
                            </div>
                            <div className="transacts_product_details p-1 pl-2 ">
                                <div className="transacts_product_id  mt-1">
                                #ID 02002
                                </div>
                                <div className="transacts_product_name ">
                                iphone 6x
                                </div>
                            </div>
                            <div className="transacts_product_state  ml-auto pr-2">
                                <div className="transacts_product_date   mt-1">02/03/2020</div>
                                <div className="transacts_product_status  ml-auto rounded-pill border">
                                    <span className="fa fa-check"/>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="transacts_nav  py-2 mx-0 row">
                    <div className="transacts_nav_first fa fa-angle-double-left border px-2  py-1"></div>
                    <div className="transacts_nav_prev fa fa-angle-left border px-2  py-1"></div>
                    <div className="transacts_nav_position  px-2  py-1 small row mx-0">
                        <div className="staged">1 </div> of <div className="total_page">5</div>
                    </div>
                    <div className="transacts_nav_next fa fa-angle-right border px-2  py-1"></div>
                    <div className="transacts_nav_last fa fa-angle-double-right border px-2  py-1 "></div>
                </div>
                </div>
            </div>
        )
    }
}
export {TransactionHistory}