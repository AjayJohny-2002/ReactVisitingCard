import { Component, useState } from 'react'

import './App.css'
import Todo from "./component/Todo"

class App extends Component{

  state = {
    myString : "Heloo",
    string1 : "Dename"
  }


  handleChange = ()=>{
    this.setState({
      myString: "Ajay"
    })
  }
  render(){
    return (
      <div className="App">
       <h1>{this.state.myString}</h1>
       <h2>{this.state.string1}</h2>
       <button onClick={this.handleChange}>Change</button>
       <Todo sendingData ={this.state.myString} />
      </div>
     );
  }
}
export default App
