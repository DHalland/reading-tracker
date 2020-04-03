import React, { Component } from "react";
import "./Home.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

class Home extends Component {
   constructor() {
      super();

      this.state = {
         token: []
      };
   }

componentDidMount(){
    this.setState({
        token: this.props.location.state.data,
    })
}

   render() {
      return (
         <div className="container-fluid-home">
            <div className="user-info">
               <div className="top-left">Currently Reading</div>
               <button className="entry-button">
                  <span>New Entry</span>
               </button>
            </div>
         </div>
      );
   }
}

export default Home;
