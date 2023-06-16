import React from "react";

const Button = (props) => {

    return (
        <button onClick={props.myHandler}>
            {props.text || 'button'}
        </button>
    )
}

export default Button;
