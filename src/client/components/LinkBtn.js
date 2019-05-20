// ------------------------------------------------------
import React from 'react'
import { Link } from 'react-router-dom'
// ------------------------------------------------------

const LinkBtn = (props) => {
    return (
        <Link 
            to={props.url}
            className={props.className}
        >
            {props.text}
        </Link>
    )
}

// ------------------------------------------------------
export default LinkBtn
// ------------------------------------------------------