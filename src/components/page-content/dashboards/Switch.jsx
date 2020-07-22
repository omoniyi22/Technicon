import React from 'react'

const SwitchEffect =(
    NewTransaction,
    PaymentGateway,
    PaymentMethod
    )=>{
    function UrlSwitch() {let url
    let urls = ['new-transaction', 'dashboard', 'payment-gateway']
    for (url of urls){
        if(window.location.href.search(url) != -1){
            return url 
            break;
        }  
    }}

    switch(UrlSwitch()){
        case 'new-transaction':
            return [<NewTransaction/>]     
            case 'payment-gateway':
            return [<PaymentMethod/>,<PaymentGateway/>, 'no-border']
            case 'dashboard':
            return []
    }

}


export default SwitchEffect