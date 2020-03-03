import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";

class App extends Component {
   render() {
      return (
         <div>
            <div className="App" className="login">
               Reading Tracker
            </div>
            <Login></Login>
         </div>
      );
   }
}

export default App;
