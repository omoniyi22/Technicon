import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/index";


class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new-transaction" component={Dashboard} />
            <Route path="/payment-gateway" component={Dashboard} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
