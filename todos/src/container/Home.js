import React ,{Component} from 'react'

import {Link} from 'react-router-dom';


class Home extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
        console.log('constructor');
    }
    ZeroLess(){
        if(this.state.count === 0){
            return <h3>Cant decrease zero</h3>
        }
        else{
            return <h3></h3>
        }
    }
    CheckNDecrease(){
        if(this.state.count >= 1){
            this.setState({count: this.state.count -1})
        }
        else{
            this.setState({
                count: this.state.count
            })
            const element = <h4>Cant decrease zero</h4>;
            this.render(element, document.getElementById('show'));
            
            console.log("Cant decrease zero")
            // return element;
        }
    }
    // static getDerivedStateFromProps(){
    //     console.log('getDrivedStatefromprops')
    //     return{
    //         count: 5
    //     }

    // }

    componentDidMount(){
        console.log("ComponentDidMount bish")
    }
    render(){
        console.log("render working bitch")
        return (
            <div style={{textAlign: 'center'}}>
            <h1>Home page</h1>
            
            <div id="show">
            </div>
        <h3>{this.state.count}</h3>
        <button onClick={()=> this.setState({count: this.state.count + 1})}>Increament</button>
        <button onClick={()=> this.CheckNDecrease()}>Decreament</button>

   
            <br/>
            {/* we are not going to use that shit bruh,,,,, */}
            {/* <a href="/about" >About</a> */}
            <Link to="/about">About</Link>
            </div>
        )
    }
}


export default Home;
