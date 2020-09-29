import React , {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header,Logo} from './components/header'
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
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));





class App extends Component{
  // This is start topic
  constructor(){
    super()
    this.state = {
      name : "Danyal Ahmed",
      email : "Daniahmedkhatri@gmail.com",
      value : ""
    }
  
  }
  set_name = () => {
    this.setState({
      name: this.state.name
    })
  }
  get_name = () => {
    console.log(this.state.name)
  }
  handleChange (e){
    this.setState({
      [e.target.name] : e.target.value
    })

  }
 render(){ 
  let todo = [{name:'Danyal',so : 'GH'},{name: "Rohit",so: "Motilal"}];
  return (
      <div className={'container'}>
        <Logo />
        <Header />
        <h2>Hello! welcome back... {this.state.name}</h2>
        <h3>email : {this.state.email}</h3>
        {/* use either value: value or name: value...both will set that attribute as value */}
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" defaultValue={this.state.name}
        onChange={event => {
          const { value } = event.target;
          this.setState({ value : value }); }} /> */}
        {/* <input type="input" onChange={(e)=>this.setState({value : e.target.value})} />  */}
        
        <TextField id="outlined-basic" name="name" label="Outlined" variant="outlined" defaultValue={this.state.name}
        onChange={(e) => this.handleChange(e)} />
        <button className="btn btn-primary " onClick= {this.set_namec}>Set</button>
        <button className="btn btn-dark " onClick= {this.get_name}>Get</button>
        <br/>
        <h2>Some text in the content <span className="animate">area</span>.</h2>
        <ul>
          {todo.map((value,index) => {
            return <li>{value.name}</li>
          })
          }
        </ul>

        <button className="btn btn-primary ">Primary</button>
        <br/> 
        <br/> 
        <br/> 
        <Footer/>
      </div>         
  )
}
}

// function BasicTextFields() {
//   const classes = useStyles();

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
      
//     </form>
//   );
// }

export default App;
