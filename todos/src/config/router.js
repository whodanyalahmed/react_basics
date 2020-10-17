import React , {Component} from 'react';
import {
    BrowserRouter as Router,    Route

} from 'react-router-dom';
import About from '../container/About';
import Home from '../container/Home';
import Index from '../container/Index';


class AppRouter extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Index} />

                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />

            </Router>
        )
    }
}


export default  AppRouter; 