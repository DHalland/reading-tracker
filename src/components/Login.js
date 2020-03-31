import React, { Component } from "react";
import './Login.css';
import { Link, BrowserRouter as Router } from "react-router-dom";
import Register from "./Register.js";

class Login extends Component {
   render() {
      return (
         <Router>
            <div className="container-fluid">
               <div className="header">
                  <h1>Reading Tracker</h1>
               </div>
               <div className="login">
                  <div className="form-group">
                     <label for="exampleInputEmail1">Email address</label>
                     <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                     />
                  </div>
                 <br></br>
                  <div className="form-group">
                     <label for="exampleInputPassword1">Password</label>
                     <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                     />
                  </div>
                  <br></br>
                  <div className="button-div" >
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
            </div>
         </Router>
      );
   }
}

export default Login;
