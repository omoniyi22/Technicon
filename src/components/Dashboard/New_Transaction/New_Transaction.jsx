import React, { Component } from 'react'
class NewTransaction extends Component{
    render(){
        return(
            <form>
            <div className="new_transaction_header font-weight-bold px-1 py-3  ">New Transaction</div>
            <div className="NewTransaction ">
                <div className="new_transaction_form form px-1 ">
                    <div className="new_transaction_group mb-3 ">
                        <div className="new_transaction_label small font-weight-bold">
                        COMPLAINT
                        </div>
                        <div className="new_transaction_input ">
                        <div className="bolo my-1 w-100 borde-left  ">
                            <input placeholder='What is wrong with your device'
                             className="w-100 form-control border   py-0 border-none"/>
                        </div>
                        </div>
                    </div>

                    <div className="row mx-0 px-0">
                        <div className="new_transaction_group mb-3 col-6  px-0 mx-0 ">
                        <div className="new_transaction_label small font-weight-bold">
                            CONTACT
                        </div>
                        <div className="new_transaction_input ">
                        <div className="bolo my-1 w-100 border-right ">
                            <input  placeholder='Phone number'
                            className="w-100 form-control  py-0 border-none"/>
                        </div>
                        </div>
                    </div>

                    <div className="new_transaction_group mb-3 col-6 mx-0 px-0">
                        <div className="new_transaction_label small font-weight-bold">
                        REPAIR
                        </div>
                        <div className="new_transaction_input ">
                        <div className="bolo my-1 w-100  ">
                            <select class="w-100 form-control  py-0 border-none">
                            <option value="1">Phone</option>
                            <option value="2">Laptop</option>
                            <option value="3">Desktop</option>
                            <option value="3">Accesories</option>
                            <option value="3">Tablet</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="new_transaction_group mb-3 ">
                        <div className="new_transaction_label small font-weight-bold">
                        EMAIL ADDRESS
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
                        BRAND
                        </div>
                        <div className="new_transaction_input ">
                        <div className="bolo my-1 w-100 borde-left  ">
                            <input placeholder='Enter Your Device Brand'
                             className="w-100 form-control border   py-0 border-none"/>
                        </div>
                        </div>
                    </div>



                <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" id="defaultGroupExample2"  name="groupOfDefaultRadios"/>
                <label class="custom-control-label" for="defaultGroupExample2">I need a dispatch rider</label>
                </div>


                <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios"/>
                <label class="custom-control-label" for="defaultGroupExample3">I will bring my device to the technical office myself</label>
                </div>

    <div className="new_transaction_button  mt-4 mt-md-5">
<button className=" btn z-depth-0 rounded-pill"> Next</button>
    </div>
                </div>
            </div>
            </form>
        )
    }
}
export {NewTransaction}