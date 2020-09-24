import React from 'react';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hello! world
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends React.Component{
  render (){
    let name = "Danyal Ahmed"
    return(
      <div style={{margin:'0px auto',lineHeight:'0px',width:'155px'}}>
      <h1 style={{fontFamily: 'Bebas Neue',textAlign:'center',color:'#dd0000'}}>{name}</h1>
      <p style={{fontFamily:'dry brush',textAlign:'right',margin:'-10px'}}>Go Ahead bishes</p>
      </div>
    )
  }
}

export default App;
