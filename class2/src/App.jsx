import React , {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/header'
// function App() {
//   let todo = [{name:'Danyal'},{name: "Rohit"}]
//   return (
//     <div>
//       <ul>
//         {todo.map((item,index) => {
//           return (<li>{item.text}</li>)
//         })}

//       </ul>
//     </div>
//   );
// }
// class Header extends Component{
//   render(){
//     return (
//       <div>
//         <h1>This is the <span className="animate">header</span>.</h1>
//       </div>
//     )
//   }
// } 

// class Footer extends Component{
//   render(){
//     return(
//       <div>
//         <footer>
//           <h4>This is the footer bish.</h4>
//         </footer>
//       </div>
//     )
//   }
// }



class App extends Component{
 render(){ 
  let todo = [{name:'Danyal',so : 'GH'},{name: "Rohit",so: "Motilal"}];
  return (
    <Header/>
  )
}
}



export default App;
