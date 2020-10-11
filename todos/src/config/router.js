import React , {Component} from 'react';
import {
    BrowserRouter as Router,Route

} from 'react-router-dom';
import About from '../container/About';
import Home from '../container/Home';
import Index from '../container/Index';


class AppRouter extends Component{
    render(){
        return(
            <Router>
                {/* <Route path="/" component={Index} /> */}

                <Route path="/" component={Home} />
                <Route path="/about" component={About} />

            </Router>
        )
    }
}


export default  AppRouter; 