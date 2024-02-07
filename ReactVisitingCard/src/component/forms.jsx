import React,{Component} from "react";



class Forms extends Component{

    constructor(probs){
        super(probs);
        this.state= {
            firstName:  "",
            secondName:  ""
        };

        this.inputOne = React.createRef();
        this.inputTwo = React.createRef();
    }
    

   

    onSubmit = ()=>{
        console.log(this.inputOne.value)

        console.log(this.inputTwo.value)
    }

    render() {
        return(
            <form action="">
                <h1>Form On Chang e event</h1>
                <input type="text" name="firstName" ref={input => this.inputOne = input}   />

                <input type="text" name="secondName" ref={input => this.inputTwo = input}  />


                <button type="button" onClick={this.onSubmit}>Sumbit</button>
            </form>
        )
    }
}

export default Forms;