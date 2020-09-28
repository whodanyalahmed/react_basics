import React from 'react'


class Header extends React.Component{
    render(){
        
        return(
            <h1>This is the <span className="animate">header</span>.</h1>
        )
    }
}

class Logo extends React.Component{
    render(){
        return
        (
            <div>
                <h2>Logo</h2>    
            </div>
        )
    }
}

export {Header,Logo};