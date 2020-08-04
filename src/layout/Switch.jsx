import React from 'react'

const SwitchEffect =()=>{
    function UrlSwitch() {
    let url
    let urls = ['login', 'signup']
    for (url of urls){
        if(window.location.href.search(url) != -1){
            return url 
            break;
        }else{
          return "url" 
          break;
        }
    }}

    switch(UrlSwitch()){
        case 'login':
          return ['no-displayed']
          break;    
        case 'signup':
          return ['no-displayed']
          break;
        case 'url':
          return ['displayed']
          break;
    }
}


export default SwitchEffect