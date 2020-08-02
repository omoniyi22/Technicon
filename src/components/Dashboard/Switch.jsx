import React from 'react'

const SwitchEffect =(
    NewTransaction,
    PaymentGateway,
    PaymentMethod,
    EditProfile
    )=>{
    function UrlSwitch() {
    let url
    let urls = ['new-transaction', 'dashboard', 'payment-gateway', 'edit-profile']
    for (url of urls){
        if(window.location.href.search(url) != -1){
            return url 
            break;
        }  
    }}

    switch(UrlSwitch()){
        case 'new-transaction':
          return [<NewTransaction/>] 
          break;    
        case 'payment-gateway':
          return [<PaymentMethod/>,<PaymentGateway/>, 'no-border']
          break;
        case 'dashboard':
          return [null]
          break;
        case 'edit-profile':
          return [null, null, null, <EditProfile/>]
          break;
    }
}


export default SwitchEffect