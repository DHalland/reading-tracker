import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
   constructor(props) {
      super(props);
      this.registerHandler = this.registerHandler.bind(this);
      this.loginHandler = this.loginHandler.bind(this);
      this.state = {
         login: true,
         reg: false
      };
   }

   registerHandler() {
      this.setState({
         login: false,
         reg: true
      });
   }
   loginHandler() {
      console.log("Registration Completed");
      this.setState({
         login: true,
         reg: false
      });
   }

   render() {
      var current;
      let login = this.state.login;
      let reg = this.state.reg;

      if (login) current = <Login registerHandler={this.registerHandler} />;
      else if (reg) {
         current = <Register loginHandler={this.loginHandler} />;
      }
      return <div>{current}</div>;
   }
}

export default App;
