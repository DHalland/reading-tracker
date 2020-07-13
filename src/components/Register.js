import React, { Component } from "react";
import {
   Route,
   Link,
   BrowserRouter as Router,
   Redirect,
} from "react-router-dom";
import axios from "axios";
import "./Register.css";

class Register extends Component {
   constructor() {
      super();

      this.state = {
         name: "",
         email: "",
         password: "",
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      // this.name = this.name.bind(this);
      // this.email = this.email.bind(this);
      // this.password = this.password.bind(this);
   }

   componentDidMount() {
      document.addEventListener("keyup", function(event) {
         if(event.keyCode == 13) {
            this.handleSubmit();
         }
      })
   }

   onChange = (e) => {
      this.setState({ [e.target.id]: e.target.value });
   };

   handleSubmit(event) {
      event.preventDefault();
      axios
         .post(
            "http://localhost:4000/users/add",
            {
               name: this.state.name,
               email: this.state.email,
               password: this.state.password,
            },
            { withCredentials: false }
         )
         .then((response) => {
            console.log("registration success", response);
         })
         .catch((error) => {
            console.log("registration failure", error.response);
         });
      window.location = "/";
   }

   render() {
      const newUser = {
         name: this.state.name,
         email: this.state.email,
         password: this.state.password,
      };

      console.log(newUser);

      return (
         <div className="container-fluid" id="reg-container">
            <div className="header">
               <h1>Create an Account</h1>
            </div>
            <div className="register">
               <form onSubmit={this.handleSubmit}>
                  <div className="register-email">
                     <label for="email">Email address</label>
                     <input
                        onChange={this.onChange}
                        type="email"
                        class="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                     />
                  </div>
                  <br></br>
                  <div className="register-username">
                     <label htmlFor="username">Username</label>
                     <input
                        onChange={this.onChange}
                        type="name"
                        class="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        placeholder="Enter username"
                     />
                  </div>
                  <br></br>
                  <div className="register-password">
                     <label for="password">Password</label>
                     <input
                        onChange={this.onChange}
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Password"
                     />
                  </div>
                  <br></br>
                  <div className="register-login">
                     <button type="submit" className="btn btn-primary">
                        Register
                     </button>
                     <Router forceRefresh={true}>
                        <Link to="/" className="btn btn-link">
                           Login
                        </Link>
                     </Router>
                  </div>
               </form>
            </div>
         </div>
      );
   }
}

export default Register;
