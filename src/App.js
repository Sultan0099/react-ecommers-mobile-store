import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import ScrollToTop from "react-router-scroll-top";
import { TransitionGroup, CSSTransition } from "react-transition-group";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App page">
          <ScrollToTop />
          <Navbar />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={3000}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/details-:id" component={Detail} />
                    <Route path="/mycart" component={Cart} />
                    <Route />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
