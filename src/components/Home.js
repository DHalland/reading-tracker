import React, {Component} from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

class Home extends Component {
    constructor(){
        super();

        this.state ={
            token: [],
        }
    }

    render(){
       return <h1>hello</h1>
    }
}

export default Home;