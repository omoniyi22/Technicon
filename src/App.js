import React from "react";
import "./App.css";
import { NavBar } from "./components/navbar/navbar";
import UserPageChatDashBoard from "./components/page-content/dashboard/user-chat-and-history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutPage } from "./components/page-content/about-page/about-page";
import UserPageNewTransaction from "./components/page-content/dashboard/new-transaction-page";
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/dashboard" exact component={UserPageChatDashBoard} />
            <Route path="/new-transaction" component={UserPageNewTransaction} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
