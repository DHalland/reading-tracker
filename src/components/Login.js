import React, { Component } from "react";
import "./Login.css";
import { Route, Link, BrowserRouter as Router, Redirect } from "react-router-dom";
import Register from "./Register.js";
import axios from "axios";

class Login extends Component {
   constructor() {
      super();

      this.state = {
         email: "",
         password: "",
         res: "",
         loggedIn: false,
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
               res: response
            }, () => {
               this.setState({
                  loggedIn: true
               })
            })
         })
         .catch(error => {
            console.log("login failure", error.response);
         });
      // window.location = "/";
   };

   render() {
      if (!this.state.loggedIn) {
         return (
            <div className="container-fluid">
               <div className="header">
                  <h1>Reading Tracker</h1>
               </div>
               <div className="login">
                  <form onSubmit={this.handleSubmit}>
                     <div className="login-email">
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
                     <div className="login-password">
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
                     <div className="login-register">
                        <button type="submit" className="btn btn-primary">
                           Login
                     </button>
                        <Router forceRefresh={true}>
                           <Link
                              to="/register"
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
      else{
         return(
            <Redirect to={{
               pathname: "/home",

               state: {data: this.state.res.data}
            }}
            />
         )
      }
   }
}

export default Login;
