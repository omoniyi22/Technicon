import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import PickupLocation from './components/Transact_Process/Pickup_Location'
import Pix_Upload from './components/Transact_Process/Pix_Upload'
import Thank_You from './components/Transact_Process/Thank_You'
import Reach_Out_ID from './components/Transact_Process/Reached_Out'
import OfficeAddress from "./components/Transact_Process/Office_Address";
import Dashboard from "./components/Dashboard/";
import About from './components/About'
import LandingPage from './components/Home/index'
import FAQ from "./components/Faq/"
import ForgotPassword from './components/Forgot_Password'
import ResetPassword from './components/Reset_Password'

import NavBar from './layout/Navbar'
import Footer from './layout/Footer'
import SideNav from './layout/Side_Nav'

import Login from './components/Log_In/index'
import SignUp from './components/Sign_Up'
import Legal from './components/Legal'

import { nav_in } from './store/actions/navSwitch'
import './App.scss'
import './app.css'
import Result from "./components/Transact_Process/Paid_OR_Failed/";
// import {loadUser} from './store/actions/authAction'
let nac = true
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navba: true
    }
  }

  noNav() {
    nac = false
  }
  render() {
    let { auth } = this.props
    return (
      <>
        <Router>
          {this.props.nav &&
            <div>
              <NavBar />
              <SideNav />
            </div>
          }
          {
            !this.props.nav && <div className="mt-5" />
          }

          <Switch>
            <Route path="/dashboard" component={auth ? Dashboard : Login} />
            <Route path="/new-transaction" component={auth ? Dashboard : Login} />
            <Route path="/payment-gateway" component={auth ? Dashboard : Login} />
            <Route path="/edit-profile" component={auth ? Dashboard : Login} />
            <Route path="/payment-method" component={auth ? Dashboard : Login} />
            <Route path="/payment-gateway" component={auth ? Dashboard : Login} />
            <Route path="/single_transact" component={auth ? Dashboard : Login} />
            <Route path="/pick-up" component={auth ? PickupLocation : Login} />
            <Route path="/your-id" component={auth ? Reach_Out_ID : Login} />
            <Route path="/office-address" component={auth ? OfficeAddress : Login} />
            <Route path="/thank-you" component={auth ? Thank_You : Login} />
            <Route path="/thank-you" component={auth ? Thank_You : Login} />
            <Route path="/payment-method" component={auth ? Dashboard : Login} />
            <Route path="/result" component={auth ? Result : Login} />
            <Route path="/pix_upload" component={Pix_Upload} />
            <Route path="/login" component={Login} />
            <Route path="/forgot_password" component={ForgotPassword} />
            <Route path="/password/reset/:id/:token" component={ResetPassword} />
            <Route path="/about" component={About} />
            <Route path="/legal" component={Legal} />
            <Route path="/faq" component={FAQ} />
            <Route path="/login" component={() => <Login />
            } />
            <Route path="/signup" component={
              (() => <div>{<SignUp />}</div>)
            } />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
        {this.props.nav && <Footer />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
  nav: state.nav.nav
})

export default connect(mapStateToProps, { nav_in })(App);