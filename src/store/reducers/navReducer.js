import { NAV_IN, NAV_OUT } from './../types'

const initialState = {
  nav: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NAV_IN:
      return {
        nav: true
      }
    case NAV_OUT:
      return {
        nav: false
      }
    default:
     return state
  }
}