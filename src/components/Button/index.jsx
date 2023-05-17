import React from "react";

const Button = (props) => {
    return (
        <button>
            {props.text || 'button'}
        </button>
    )
}

export default Button;
