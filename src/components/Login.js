import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Register from "./Register.js";

class Login extends Component {
   render() {
      console.log("hello");
      // let display = this.state;
      return (
         <Router>
            <div>
               <div className="App" className="login">
                  Reading Tracker
               </div>
               <div>
                  <div class="form-group" />
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                     type="email"
                     class="form-control"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="Enter email"
                  />
               </div>
               <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                     type="password"
                     class="form-control"
                     id="exampleInputPassword1"
                     placeholder="Password"
                  />
               </div>
               <div>
                  <button type="submit" className="btn btn-primary">
                     Submit
                  </button>
                  <Link
                     to="/register"
                     onClick={this.props.registerHandler}
                     className="btn btn-link"
                  >
                     Register
                  </Link>
               </div>
            </div>
         </Router>
      );
   }
}

export default Login;
