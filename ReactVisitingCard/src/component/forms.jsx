import React,{Component} from "react";



class Forms extends Component{

    state= {
        inputValue:  ""
    }
    onHandleChange = event =>{

      this.setState({
        inputvalue: event.target.value
      });
    }

    onSubmit = ()=>{

    }

    render() {
        return(
            <form action="">
                <h1>Form On Chang e event</h1>
                <input type="text" value = {this.state.inputValue} onChange={this.onHandleChange} />

                <button type="button" onClick={this.onSubmit}>Sumbit</button>
            </form>
        )
    }
}

export default Forms;