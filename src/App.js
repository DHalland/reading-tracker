import React, { Component } from "react";
import "./App.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home"

class App extends Component {
   constructor() {
      super();

      this.state = {}
   }

   render() {
      return (
         <div>
            <Router forceRefresh={true}>
               <Route exact path="/" component={Login} />
               <Route path="/register" component={Register} />
               <Route path="/home" component={Home} />
            </Router>
         </div>
      );
   }

}

export default App;
