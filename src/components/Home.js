import React, { Component } from "react";
import "./Home.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

class Home extends Component {
   constructor() {
      super();

      this.state = {
         data: [],
         
      };
   }

   componentDidMount() {
      this.setState({
         token: this.props.location.state.data.token,
         id: this.props.location.state.data.user.id,
         name: this.props.location.state.data.user.name
      },
         this.getEntries)
   }

   getEntries = () => {
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

   onChange = (e) => {
      this.setState({ [e.target.id]: e.target.value });
   };

   handleSubmit = e => {
      e.preventDefault();
      axios
         .post(
            "http://localhost:4000/entries/add",
            {
              entry_pages: this.state.pages,
              entry_minutes: this.state.minutes 
            },
            {
               headers: {
                  'x-auth-token': this.state.token
               }
            },
            { withCredentials: false }
         )
         .then((response) => {
            console.log("entry success", response);
         })
         .catch((error) => {
            console.log("entry failure", error.response);
         });
      window.location ="/home"
   }

   render() {

      const data = this.state.data
      
      return (
         <div className="container-fluid-home">
            <div className="user-info">
               <div className="top-left" style={{color: "white"}}>Previous Entries</div>
               <div className="content">
                  {Object.keys(this.state.data).map((key) =>
                     <div class="card" style={{width: "18rem"}}>
                     <div class="card-body">
                       <h5 class="card-title"> On {this.state.data[key].createdAt.substring(0,10)}</h5>
                       <p class="card-text">You read {this.state.data[key].entry_pages} pages for {this.state.data[key].entry_minutes} minutes</p>
                     </div>
                   </div>
                   )}
               </div>
               
            </div>
            <button className="btn btn-success entry-button" data-toggle="modal" data-target="#entryModal">
                  New Entry
               </button>
            <div class="modal fade" id="entryModal" tabindex="-1" role="dialog">
               <div class="modal-dialog" role="document">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">New Entry</h5>
                        <button type="button" class="close" data-dismiss="modal">
                           <span>&times;</span>
                        </button>
                     </div>
                     <div class="modal-body">
                        <form>
                           How many pages did you read today?<br></br>
                           <input type="number" id="pages" onChange={this.onChange}></input><br></br>
                           For how many minutes did you read today?<br></br>
                           <input type="number" id="minutes" onChange={this.onChange}></input>
                        </form>
                     </div>
                     <div class="modal-footer">
                        <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Home;
