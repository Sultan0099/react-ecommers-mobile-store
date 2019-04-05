import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import ScrollToTop from "react-router-scroll-top";
class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/details-:id" component={Detail} />
            <Route path="/mycart" component={Cart} />
            <Route />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
