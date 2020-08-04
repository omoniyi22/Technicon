import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'



import PickupLocation from './components/Transact_Process/Pickup_Location'

import Thank_You from './components/Transact_Process/Thank_You'
import Reach_Out_ID from './components/Transact_Process/Reached_Out'
import OfficeAddress from "./components/Transact_Process/Office_Address";


import Dashboard from "./components/Dashboard/";
import About from './components/About'
import LandingPage from "./prev_pack/components/page-content/landing-page/landing-page";

import NavBar from './layout/Navbar'
import Footer from './layout/Footer'
import SideNav from './layout/Side_Nav'

import Login from './components/Log_In/index'
import SignUp from './components/Sign_Up'
import Legal from './components/Legal'




// import {loadUser} from './store/actions/authAction'


import './App.scss'
let nac = true
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
    nac = false
  }
  yesNav() {
    this.setState({
      navba: true
    })
  }
  render() {
    let {auth} = this.props
    return (
      <>

        <Router>
          {nac == true ? <> <NavBar />
            <SideNav /> </> : null}
          <Route>
            <Switch>
          
                  <Route path="/dashboard" component={auth ? Dashboard : Login} />
                  <Route path="/new-transaction" component={auth ? Dashboard : Login} />
                  <Route path="/payment-gateway" component={auth ? Dashboard : Login} />
                  <Route path="/edit-profile" component={auth ? Dashboard : Login} />
                  <Route path="/payment-method" component={auth ? Dashboard : Login} />
                  <Route path="/pick-up" component={auth ? PickupLocation : Login} />
                  <Route path="/your-id" component={auth ? Reach_Out_ID : Login} />
                  <Route path="/office-address" component={auth ? OfficeAddress : Login} />
                  <Route path="/thank-you" component={ auth ? Thank_You : Login} />

                  <Route path="/payment-method" component={auth ? Dashboard : Login} />
             
                <Route path="/login" component={Login} />




              <Route path="/about" component={About} />
              <Route path="/legal" component={Legal} />
              <Route path="/login" component={() => <Login nav={this.noNav} />

              } />
              <Route path="/signup" component={
                (() => <div>{<SignUp doNav={() => this.noNav} />}</div>)
              } />
              <Route path="/" component={LandingPage} />
            </Switch>
          </Route>
          <Footer />
        </Router>
        <div onClick={
          this.noNav
        }>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(App);
