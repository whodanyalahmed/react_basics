import React, { Component } from 'react';
import '../App.css';
import firebase from '../config/firebase'


class Index extends Component{
  constructor(){
    super()
    this.state = {
      todos : [{name: "Danyal", edit: false},{name: "Ahmed",edit: false},{name: "Rohit", edit: false}],
      value : ''
    }
  }

  add_todos = () => {
    let obj = {name: this.state.value , edit: false}
    // console.log('work work')
    firebase.database().ref('/').child('todos')
    .push(obj)
    // this.state.todos.push({name: this.state.value, edit: false});
    this.setState({
      todos: [...this.state.todos,obj],
      value: ''
    })
  }
  delete_todo = (i) => {
    // console.log(this.state.todos.pop(i))
    console.log(this.state.todos.splice(i,1));
    this.setState({
      todos: this.state.todos
    })
  }
  handleChange = (e,i) => {
    this.state.todos[i].name = e.target.value;
    this.setState({
      todos:this.state.todos
    })
  }
  update = (i) => {
    this.state.todos[i].edit = false;
    // console.log(i)
    this.setState({
      todos:this.state.todos
    })
  }
  edit_todo = (i,val) => {
    // var prm = prompt("Enter edited value: ")
    // this.state.todos[i] = prm;
    this.state.todos[i].edit = true


    this.setState({
      todos: this.state.todos
    })
  }

  render(){
    return(
      <div>
        <input value = {this.state.value} onChange={(e) => this.setState({value: e.target.value}) } type="text" placeholder="Enter item " />
        <button onClick={this.add_todos} >+Add item</button>
        <br/>
        <ul>
          {
          this.state.todos.map((v,i) => {
          return <li key={i}>
            {v.edit? <input type="text" value={v.name} placeholder="enter edited value" onChange={(e)=>this.handleChange(e,i)}/>: v.name } 
            {v.edit ? <button onClick={() => this.update(i)}> update</button> : <button onClick={()=> this.edit_todo(i,v.name)} > Edit</button>} 
            {/* <button onClick={() => this.edit_todo(i,v)}>Edit</button> */}
            <button onClick={() =>this.delete_todo(i)}>Delete</button></li>
          })
          }
        </ul>
      </div>
    )
  }
}
export default Index;
