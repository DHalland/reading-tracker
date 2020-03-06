import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Register extends Component {
   render() {
      return (
         <Router>
            <div>
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
               <div>
                  <div className="form-group" />
                  <label htmlFor="exampleInputEmail1">Username</label>
                  <input
                     type="email"
                     class="form-control"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="Enter username"
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
                  <Link
                     to="/"
                     onClick={this.props.loginHandler}
                     className="btn btn-primary"
                  >
                     Register
                  </Link>
               </div>
            </div>
         </Router>
      );
   }
}

export default Register;
