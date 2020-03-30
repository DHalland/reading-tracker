import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

class Register extends Component {
   constructor() {
      super();

      this.state = {
         name: "",
         email: "",
         password: ""
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      // this.name = this.name.bind(this);
      // this.email = this.email.bind(this);
      // this.password = this.password.bind(this);
   }

   onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
   };

   handleSubmit(event) {
      event.preventDefault();
      axios
         .post(
            "http://localhost:4000/users/add",
            {
               user: {
                  name: this.state.name,
                  email: this.state.email,
                  password: this.state.password
               }
            }
            // ,{ withCredentials: false }
         )
         .then(response => {
            console.log("registration success", response);
         })
         .catch(error => {
            console.log("registration failure", error);
         });
      // window.location = "/";
   }

   render() {
      const newUser = {
         name: this.state.name,
         email: this.state.email,
         password: this.state.password
      };

      console.log(newUser);

      return (
         <div>
            <form onSubmit={this.handleSubmit}>
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
                     type="name"
                     class="form-control"
                     id="name"
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
                  <input
                     type="submit"
                     // onClick={this.props.loginHandler}
                     className="btn btn-primary"
                     value="Register"
                  />
               </div>
            </form>
         </div>
      );
   }
}

export default Register;
