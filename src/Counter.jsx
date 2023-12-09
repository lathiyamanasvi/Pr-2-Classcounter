const { Component } = require("react");

class Counter extends Component{
    constructor(){
        super();
        this.state={
            cnt :0
        }
    }

    Increment = () =>{
        this.setState(({cnt: this.state.cnt +1}))
    }

    Decrement = () =>{
       if(this.state.cnt > 0){
            this.setState(({cnt: this.state.cnt -1}))
       }
    }

    reset = () => {
        this.setState({cnt: this.state.cnt = 0})
    }

    render(){
        return(
            <center>
                <h1>Counter App</h1>
                <div class="d-flex align-items-center justify-content-center mt-5 ">
                <button onClick={this.Increment} class="btn btn-success px-5 ">+</button>
                <span class="fs-3 mx-2 rounded px-5 " style={{backgroundColor:"pink"}}>{`${this.state.cnt}`}</span>
                <button onClick={this.Decrement} class="btn btn-success px-5">-</button>
                </div>
                <div>
                    <button  onClick={this.reset} class="btn btn-success px-5 mt-3">Reset</button>
                </div>
            </center>
        )
    }
}
export default Counter;