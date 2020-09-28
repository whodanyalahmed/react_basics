import React , {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/Footer'
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
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}



class App extends Component{
 render(){ 
  let todo = [{name:'Danyal',so : 'GH'},{name: "Rohit",so: "Motilal"}];
  return (
      <div className={'container'}>
        <Header />
        {/* <Header /> */}
        <h2>Some text in the content <span className="animate">area</span>.</h2>
        <ul>
          {todo.map((value,index) => {
            return <li>{value.name}</li>
          })
          }
        </ul>
        <BasicTextFields />
        <button className="btn btn-primary ">Primary</button>
        <br/> 
        <br/> 
        <br/> 
        <Footer/>
      </div>         
  )
}
}



export default App;
