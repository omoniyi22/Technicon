import React from "react";
import "./App.css";
import { NavBar } from "./components/navbar/navbar";
import UserPageChatDashBoard from "./components/page-content/dashboard/user-chat-and-history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutPage } from "./components/page-content/about-page/about-page";
import Dashboard from "./components/page-content/dashboards/index";
import UserPaymentGateWay from "./components/page-content/dashboard/user-payment-methods";
import LandingPage from "./components/page-content/landing-page/landing-page";
import HamburgerMenu from "./components/hamburger-menu/hamburger-menu";
/*
Routes

user-profile
transacrion-history
Dashboard
new-tranasction
payment-gateway
thank-you
edit-profile
pickup-location
reached-out
oFfice-address
invoice
payment-method

*/


class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <HamburgerMenu />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new-transaction" component={Dashboard} />
            <Route path="/payment-gateway" component={Dashboard} />

        
            
            <Route path="/about" component={AboutPage} />
            <Route path="/"  component={LandingPage} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
