import React from 'react';

export default function Alert(props) {

    const capitalize=(word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

  return (
    <div style={{height:'50px'}} className="my-2">
    {props.alert &&
    <div className="container">
        <div class={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)}! </strong>{props.alert.msg}
        </div>
    </div>}
    </div>
  );
}
