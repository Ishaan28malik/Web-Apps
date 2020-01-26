import React, {/* Component */} from 'react';

class Welcome extends React.Component {
    render(){
        return <h1>Welcome {this.props.name} </h1>
    }
}

/*function Welcome() {
    return <h1>No</h1>
}*/

//const Welcome = () => <h1>No</h1>


export default Welcome;
