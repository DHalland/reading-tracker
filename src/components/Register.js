import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
   render() {
      return (
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
               <div class="form-group" />
               <label for="exampleInputEmail1">Username</label>
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
               <button type="submit" class="btn btn-primary">
                  Submit
               </button>
               <button className="btn btn-link">Register</button>
            </div>
         </div>
      );
   }
}

export default Register;