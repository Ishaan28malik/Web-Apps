import React from 'react';

/*function New() {
    return <h1>Yo</h1>
}*/

const New = (props)  =>{
    console.log(props);
    return (
        <div>
    <h1>Yes {props.name}</h1>
    {props.children}
    </div>
    )
}

export default New 
