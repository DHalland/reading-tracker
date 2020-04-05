import React, { Component } from "react";
import "./Home.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

class Home extends Component {
   constructor() {
      super();

      this.state = {
        data: []
      };
   }

   componentDidMount() {
      this.setState({
         token: this.props.location.state.data.token,
         id: this.props.location.state.data.user.id
      },
         this.getEntries)
   }

   getEntries = () => {
      console.log("hello")
      axios
         .get(
            "http://localhost:4000/entries/" + this.state.id,
            {
               headers: {
                  'x-auth-token': this.state.token
               }
            },
            { withCredentials: false }
         )
         .then(response => {
            this.setState({
               data: response.data
            })
         })
   }
   render() {
      const data = this.state.data
      return (
         <div className="container-fluid-home">
            <div className="user-info">
               <div className="top-left">Currently Reading</div>
               <div id="content">
                  {Object.keys(this.state.data).map((key) =>
                  <div>
                  <div>{this.state.data[key].entry_name}</div>
                  <div>{this.state.data[key].entry_author}</div>
                  </div>
                  )}
               </div>
               <button className="entry-button">
                  <span>New Entry</span>
               </button>
            </div>
         </div>
      );
   }
}

export default Home;
