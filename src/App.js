import React from "react";
import "./App.css";
import { NavBar } from "./components/navbar/navbar";
import UserPageContent from "./components/page-content/dashboard/user-page-content";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutPage } from "./components/page-content/about-page/about-page";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/dashboard" exact component={UserPageContent} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
