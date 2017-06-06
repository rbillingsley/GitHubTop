import React from 'react';

function RepoElement(props) {
return( 
    <div>
        <h1> {props.value.state.total} </h1>
        <h1> {props.value.name} </h1>
        <p> {props.value.desc} </p>
        <h1> {props.value.created} </h1>
        <h1> {props.value.address} </h1>
    </div>
)
}

export default RepoElement;