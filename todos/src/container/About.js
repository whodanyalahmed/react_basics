import React ,{Component} from 'react'
import { Link } from "react-router-dom";

class About extends Component{
    render(){
        return (
            <div>
            <h1>About page</h1>
            <br/>
            <Link to="/home"> Home</Link>
            </div>
        )
    }
}


export default About;
