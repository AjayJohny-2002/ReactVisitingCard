import React, { Component } from 'react'

export default class Todo extends Component {
  

  render() {
    return (
      <div>
        <h1>ToDoComponent</h1>
        <h2>{this.props.sendingData}</h2>
      </div>
    )
  }
}
