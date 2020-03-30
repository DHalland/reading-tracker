import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Register extends Component {
   constructor() {
      super();

      this.state = {
         name: "",
         email: "",
         password: ""
      };

      // this.name = this.name.bind(this);
      // this.email = this.email.bind(this);
      // this.password = this.password.bind(this);
   }

   onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
   };

   render() {
      const newUser = {
         name: this.state.name,
         email: this.state.email,
         password: this.state.password
      };

      console.log(newUser);

      return (
         <Router>
            <div>
               <div>
                  <div class="form-group" />
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                     onChange={this.onChange}
                     type="email"
                     class="form-control"
                     id="email"
                     aria-describedby="emailHelp"
                     placeholder="Enter email"
                  />
               </div>
               <div>
                  <div className="form-group" />
                  <label htmlFor="exampleInputEmail1">Username</label>
                  <input
                     onChange={this.onChange}
                     type="email"
                     class="form-control"
                     id="username"
                     aria-describedby="emailHelp"
                     placeholder="Enter username"
                  />
               </div>
               <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                     onChange={this.onChange}
                     type="password"
                     class="form-control"
                     id="password"
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
