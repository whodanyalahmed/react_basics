import React from 'react'


class Header extends React.Component{
    render(){
        return(
            <div>
            {/* <Header /> */}
            <h2>Some text in the content <span className="animate">area</span>.</h2>
            <ul>
              {todo.map((value,index) => {
                return <li>{value.name}</li>
              })
              }
            </ul> 
            {/* <Footer/> */}
          </div>    
        )
    }
}

export default Header;