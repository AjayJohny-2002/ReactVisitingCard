import React, { Component } from 'react'

export default class List extends Component {

    state={
        data : [
            {
                id:1,
                name:"john",
                age: 45
            },
            {
                id:2,
                name:"rakl",
                age: 10
            }
        ]
    };
  render() {
    return (
      <div>
        <ul>
            {this.state.data.map((value,index) =>{
                    return <li>value.name</li>
            })}
        </ul>
      </div>
    )
  }
}
