import React from 'react'

const SwitchEffect = (
  NewTransaction,
  PaymentGateway,
  PaymentMethod,
  EditProfile
) => {
  function UrlSwitch() {
    let url
    let urls = ['new-transaction', 'dashboard', 'payment-gateway', 'edit-profile', 'payment-method', 'single_transact']
    for (url of urls) {
      if (window.location.href.search(url) != -1) {
        return url
        break;
      }
    }
  }

  switch (UrlSwitch()) {
    case 'new-transaction':
      return [[<NewTransaction />], ["mobile-v", null, "mobile-v"]]
      break;
    case 'payment-method':
      return [[<PaymentMethod />, null, 'no-border'], ["mobile-v", null, 'mobile-v']]
      break;
    case 'dashboard':
      return [[null], [null, "mobile-v", null]]
      break;
    case 'edit-profile':
      return [[null, null, null, <EditProfile />], [null, "mobile-v", "mobile-v"]]
      break;
    case 'payment-gateway':
      return [[<PaymentMethod/>, <PaymentGateway />, "no-border"], ["mobile-v", "mobile-v", null]]
      break;
    case 'single_transact':
      return [[null, null, 'no-border'], ["mobile-v", "z-depth-1", "mobile-v"]]
      break;
  }
}


export default SwitchEffect