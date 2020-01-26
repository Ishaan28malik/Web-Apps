import React from 'react';

class Message extends React.Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Ishaan'
        }
    }

    changeMessage(){

    }
    render() {
        return  (
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Click</button>
            </div>
        )
    }

}

export default Message 