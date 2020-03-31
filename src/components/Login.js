import React, { Component } from "react";
import "./Login.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Register from "./Register.js";
import axios from "axios";

class Login extends Component {
   constructor() {
      super();

      this.state = {
         email: "",
         password: "",
         data: []
      };
   }

   onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
   };

   handleSubmit = e => {
      console.log("hello");
      e.preventDefault();
      axios
         .post("http://localhost:4000/auth", {
            email: this.state.email,
            password: this.state.password
         })
         .then(response => {
            console.log("login success", response);
            this.setState({
               data: { response }
            });
            //Swindow.location = "/";
         })
         .catch(error => {
            console.log("login failure", error.response);
         });
      // window.location = "/";
   };

   render() {
      return (
         <div className="container-fluid">
            <div className="header">
               <h1>Reading Tracker</h1>
            </div>
            <div className="login">
               <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                     <label for="email">Email address</label>
                     <input
                        type="email"
                        class="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={this.onChange}
                     />
                  </div>
                  <br></br>
                  <div className="form-group">
                     <label for="password">Password</label>
                     <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Password"
                        onChange={this.onChange}
                     />
                  </div>
                  <br></br>
                  <div className="button-div">
                     <button type="submit" className="btn btn-primary">
                        Submit
                     </button>
                     <Router>
                        <Link
                           to="/register"
                           onClick={this.props.registerHandler}
                           className="btn btn-link"
                        >
                           Register
                        </Link>
                     </Router>
                  </div>
               </form>
            </div>
         </div>
      );
   }
}

export default Login;
