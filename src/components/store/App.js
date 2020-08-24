import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/index";


class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          {/* <NavBar /> */}
          {/* <HamburgerMenu /> */}
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new-transaction" component={Dashboard} />
            <Route path="/payment-gateway" component={Dashboard} />

            {/* <Route path="/new-transaction" component={UserPageNewTransaction} /> */}
            {/* <Route path="/payment-gateway" component={UserPaymentGateWay} /> */}
            
            {/* <Route path="/about" component={AboutPage} /> */}
            {/* <Route path="/"  component={LandingPage} /> */}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
