// ------------------------------------------------------
import React from 'react'
// ------------------------------------------------------

const Button = (props) => {
    return (
        <a 
            href={props.url}
            className={props.className}
        >
            {props.text}
        </a>
    )
}

// ------------------------------------------------------
export default Button
// ------------------------------------------------------