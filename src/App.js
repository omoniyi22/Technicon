import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import UserProfile from './components/dashboard/User_Profile'
import ChatBox from './components/dashboard/Chat_Box/'
import TransactionHistory from './components/dashboard/Transaction_History'

import NewTransaction from './components/dashboard/New_Transaction'
import PaymentGateway from './components/dashboard/Payment_Gateway'
import PaymentMethod from './components/dashboard/Payment_Method'

import EditProfile from './components/dashboard/Edit_Profile'
import Invoice from './components/dashboard/Invoice'
import PickupLocation from './components/dashboard/Pickup_Location'

import Thank_You from './components/dashboard/Thank_You'
import Reach_Out_ID from './components/dashboard/Reached_Out'
import OfficeAddress from "./components/dashboard/Office_Address";


import Dashboard from "./components/Dashboard/dash.jsx";
import About from './components/About'
import LandingPage from "./prev_pack/components/page-content/landing-page/landing-page";

import NavBar from './layout/Navbar'
import Footer from './layout/Footer'
import SideNav from './layout/Side_Nav'

import Login from './components/Log_In'
import SignUp from './components/Sign_Up'




import { Provider } from 'react-redux';

import store from './store/index'
// import {loadUser} from './store/actions/authAction'


import './App.scss'


function man() {
  var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  if (w <= 991) {
    return true
  } else {
    return false
  }
}


let navba = true

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navba: true
    }
    this.noNav = this.noNav.bind(this)
    this.yesNav = this.yesNav.bind(this)
  }

  noNav() {
    this.state.navba = false
    console.log("nav", this.state.navba)
  }
  yesNav() {
    this.setState({
      navba: true
    })
  }
  render() {
    let mobileSkin = man()
    return (
      <>
        <Provider store={store}>
          <Router>
            {this.state.navba == true ? <> <NavBar />
              <SideNav /> </> : null}
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/new-transaction" component={Dashboard} />
              <Route path="/payment-gateway" component={Dashboard} />
              <Route path="/edit-profile" component={Dashboard} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={
                (() => <div>{<SignUp doNav={this.noNav} />}</div>)
              } />
              <Route path="/" component={LandingPage} />
            </Switch>
            <Footer />
          </Router>
        </Provider>
        <div onClick={
          this.noNav
        }>
          ndsndk
     </div>
      </>
    );
  }
}

export default App;
