import React from "react";
import "./App.css";
import { NavBar } from "./components/navbar/navbar";
import UserPageChatDashBoard from "./components/page-content/dashboard/user-chat-and-history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutPage } from "./components/page-content/about-page/about-page";
import UserPageNewTransaction from "./components/page-content/dashboard/new-transaction-page";
import UserPaymentGateWay from "./components/page-content/dashboard/user-payment-methods";
import LandingPage from "./components/page-content/landing-page/landing-page";
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/dashboard" component={UserPageChatDashBoard} />
            <Route path="/new-transaction" component={UserPageNewTransaction} />
            <Route path="/payment-gateway" component={UserPaymentGateWay} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
