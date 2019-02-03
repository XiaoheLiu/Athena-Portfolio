import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="page-container">
        <HashRouter basename={process.env.PUBLIC_URL}>
          <div id="content-wrap">
            <NavBar />
            <Switch>
              <Route path="/" exact component={About} />
              <Route path="/projects" exact component={Projects} />
            </Switch>
          </div>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
