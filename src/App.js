import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/index";
import About from './components/About'
// import Home from './components/Home'
// import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { NavBar } from "./prev_pack/components/navbar/navbar"
import LandingPage from "./prev_pack/components/page-content/landing-page/landing-page";
import HamburgerMenu from "./prev_pack/components/hamburger-menu/hamburger-menu";

import './App.scss'
class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <HamburgerMenu />
        <Router>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new-transaction" component={Dashboard} />
            <Route path="/payment-gateway" component={Dashboard} />
            <Route path="/payment-gateway" component={Dashboard} />
            <Route path="/About" component={About} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
        <Footer/>
      </>
    );
  }
}

export default App;
